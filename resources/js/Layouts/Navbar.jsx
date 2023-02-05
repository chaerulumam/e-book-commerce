import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import DropdwonMenu from "@/Components/DropdownMenu";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    const { auth, categories_global } = usePage().props;
    // console.log(auth);
    return (
        <nav className="bg-white border-b py-2">
            <Container>
                <div className="flex items-center justify-between">
                    <NavLink href="/">
                        {" "}
                        <ApplicationLogo />
                    </NavLink>
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Products</NavLink>
                        <DropdwonMenu label="Categories">
                            {categories_global.map((category) => (
                                <DropdwonMenu.Link
                                    href={`/products?category=${category.slug}`}
                                >
                                    {category.name}
                                </DropdwonMenu.Link>
                            ))}
                        </DropdwonMenu>
                        {auth.user ? (
                            <>
                                <DropdwonMenu label={auth.user.name}>
                                    <DropdwonMenu.Link href="/profile">
                                        Profile
                                    </DropdwonMenu.Link>
                                    <DropdwonMenu.Link href="/dashboard">
                                        Dashboard
                                    </DropdwonMenu.Link>
                                    <DropdwonMenu.Link href="/cart">
                                        Cart
                                    </DropdwonMenu.Link>
                                    <DropdwonMenu.Link href="/history">
                                        History
                                    </DropdwonMenu.Link>
                                    <DropdwonMenu.Link
                                        href="/logout"
                                        method="post"
                                    >
                                        Logout
                                    </DropdwonMenu.Link>
                                </DropdwonMenu>
                            </>
                        ) : (
                            <>
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
