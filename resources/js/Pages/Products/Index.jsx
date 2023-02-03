import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import ProductItem from "@/Components/ProductItem";
import Header from "@/Components/Header";

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    return (
        <div>
            <Head title="Products" />

            <Header
                title="The Products"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum architecto aperiam incidunt suscipit velit minima omnis dolores nulla sapiente ex sit voluptate aut officia veniam perspiciatis, quos quo. Illum!"
            />
            <Container>
                {products.length ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                ) : null}
            </Container>
        </div>
    );
}
Index.layout = (page) => <App children={page} />;
