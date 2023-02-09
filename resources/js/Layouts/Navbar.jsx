import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import DropdwonMenu from "@/Components/DropdownMenu";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props;
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
                                    <DropdwonMenu.Link href="/products/me">
                                        My Product
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
                                <NavLink
                                    className="flex items-center gap-2"
                                    href="/carts"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="inline w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                    {carts_global_count > 0
                                        ? carts_global_count
                                        : null}
                                </NavLink>
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
