import React from "react";
import App from "@/Layouts/App";
import { Head, Link, router } from "@inertiajs/react";
import Header from "@/Components/Header";
import Container from "@/Components/Container";
import { numberFormat } from "@/Libs/helper";
import { toast } from "react-hot-toast";

export default function Index({ carts }) {
    const onDeleteHandler = (cart_id) => {
        router.post(
            route("cart.delete", cart_id),
            { _method: "DELETE" },
            {
                onSuccess: () => toast.success("Removed"),
            }
        );
    };
    return (
        <div>
            <Head title="Your carts" />
            <Header
                title="Your carts"
                description="The product was added to the cart"
            />
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.length ? (
                            <>
                                {carts.map((cart, i) => (
                                    <tr key={cart.id}>
                                        <td>{i + 1}</td>
                                        <td>
                                            <Link
                                                href={`/products/${cart.product.slug}`}
                                            >
                                                {cart.product.name}
                                            </Link>
                                        </td>
                                        <td className="text-right">
                                            {numberFormat(cart.price)}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    onDeleteHandler(cart.id)
                                                }
                                                className="focus:outline-none"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td>Total</td>
                                    <td className="text-right">
                                        Rp.{" "}
                                        {numberFormat(
                                            carts.reduce(
                                                (acc, cart) => acc + cart.price,
                                                0
                                            )
                                        )}
                                    </td>
                                </tr>
                            </>
                        ) : (
                            "No Items"
                        )}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}
Index.layout = (page) => <App children={page} />;
