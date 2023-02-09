import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Table from "@/Components/Table";
import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";

export default function Mine(props) {
    const { data: products, meta, links } = props.products;
    // console.log("Data: ", products);
    console.log(products);
    return (
        <div>
            <Head title="Your products" />
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Header>Your Product</Card.Header>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className="w-0">#</Table.Th>
                                    <Table.Th>Product Name</Table.Th>
                                </tr>
                            </Table.Thead>

                            <Table.Tbody>
                                {products.length ? (
                                    <>
                                        {products.map((product, i) => (
                                            <tr key={product.id}>
                                                <Table.Td className="w-0">
                                                    {meta.from + i}
                                                </Table.Td>
                                                <Table.Td>
                                                    <a
                                                        href={product.url}
                                                        target="_blank"
                                                        className="text-blue-600 hover:text-blue-700 underline"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {product.name}
                                                    </a>
                                                </Table.Td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <Table.Empty colSpan={2} />
                                )}
                            </Table.Tbody>
                        </Table>
                        <Card.Footer>
                            <Pagination
                                marginTop="mt-0"
                                meta={meta}
                                links={links}
                            />
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
Mine.layout = (page) => <App children={page} />;
