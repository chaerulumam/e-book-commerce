import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    const { auth } = usePage().props;
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
                        <NavLink href="/dashboard">Dashboard</NavLink>
                        {auth.user ? (
                            <>
                                <NavLink href="/profile">
                                    {auth.user.name}
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink href="/signin">Sign in</NavLink>
                                <NavLink href="/signup">Dashboard</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
