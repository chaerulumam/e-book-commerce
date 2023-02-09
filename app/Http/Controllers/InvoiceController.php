<?php

namespace App\Http\Controllers;

use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class InvoiceController extends Controller
{
    public function store(Request $request)
    {
        $total = (int) $request->total;

        $cart_ids = $request->collect('carts')->pluck('id');
        // $order_id = 'order-' . '78781238' . $request->user()->id . $cart_ids->implode('');
        $order_id = 'order-' . now()->format('Y') . $request->user()->id . $cart_ids->implode('');
        $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);
        if ($invoiceExists) {
            return to_route('invoice.show', $invoiceExists);
        } else {
            $invoice = Auth::user()->invoices()->updateOrCreate(
                compact('order_id'),
                [
                    'order_id' => $order_id,
                    'gross_amout' => $total,
                    'cart_ids' => $cart_ids,
                    'payment_type' => $request->payment_type,
                ]
            );

            $data = [
                "payment_type" => $request->payment_type,
                "transaction_details" => [
                    "gross_amount" => $total,
                    "order_id" => $order_id,
                ],
                "customer_details" => [
                    "email" => $request->user()->email,
                    "first_name" => $request->user()->name,
                ],
                "item_details" => $request->collect('carts')->map(fn ($item) => [
                    "id" => $item['id'],
                    "price" => (int) round((11 / 100) * $item['price'], 0) + $item['price'],
                    "quantity" => 1,
                    "name" => $item['product']['name']
                ])
            ];

            if ($request->payment_type == 'bank_transfer') {
                $data = [...$data, 'bank_transfer' => [
                    'bank' => $request->bank
                ]];
            }

            $response = Http::withBasicAuth(config('services.midtrans.server_key') . ':', '')
                ->post('https://api.sandbox.midtrans.com/v2/charge', $data);

            $body = $response->json();
            // dd($body);
            $invoice->update([
                'payment_info' => [
                    'qr_code' => $request->payment_type == 'gopay' ? $body['actions'][0]['url'] : null,
                    'bank' => $request->payment_type !== 'gopay' ? [
                        'name' => $body['va_numbers'][0]['bank'],
                        'va_number' => $body['va_numbers'][0]['va_number']
                    ]
                        : null,
                ]
            ]);

            // dd($response->json());
        }

        return to_route('invoice.show', $invoice);
    }

    public function show(Invoice $invoice)
    {
        return inertia('Invoice/Show', [
            'invoice' => new InvoiceResource($invoice)
        ]);
    }
}
