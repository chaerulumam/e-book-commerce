import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";

export default function Show({ invoice }) {
    return (
        <div>
            <Head title={`Your order ${invoice.order_id}`} />
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        {invoice.qr_code ? <img src={invoice.qr_code} /> : null}
                        {invoice.bank ? (
                            <div>
                                {/* <div className="font-semibold text-xl uppercase">
                                    {invoice.bank.name}
                                </div> */}
                                <div className="p-2 text-lg text-blue-900 bg-gradient-to-r from-blue-200 via-transparent to-transparent">
                                    <div>
                                        <strong className="font-semibold uppercase">
                                            {invoice.bank.name}
                                        </strong>{" "}
                                        Virtual Account Number
                                        <br />
                                        {invoice.bank.va_number}
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="prose">
                        <div>
                            <h3>Instruction</h3>
                            <p>
                                Please follow the instruction belows how to pay!
                            </p>
                            <ol>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
Show.layout = (page) => <App children={page} />;
