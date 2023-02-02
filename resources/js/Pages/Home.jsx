import Container from "@/Components/Container";
import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <div>
            <Head title="E Book Commerce" />
            <Container>Home</Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
