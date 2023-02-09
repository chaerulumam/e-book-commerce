<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PaymentNotificationController extends Controller
{
    public function hit(Request $request)
    {
        $invoice = Invoice::where('order_id', $request->order_id)->first();

        $signature_key = hash('sha512', $request->order_id . $request->status_code . $invoice->gross_amount . '.00' . config('services.midtrans.server_key'));

        if ($request->signature_key == $signature_key) {
            $invoice->update([
                'succeeded_at' => $request->settlement_time,
            ]);
        }

        Cart::whereIn('id', $invoice->cart_ids)->update([
            'paid_at' => $request->settlement_time,
        ]);

        Cache::forget('carts_global_count');
    }
}
