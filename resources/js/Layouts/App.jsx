import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Toaster position="top-center" />
            <main className="py-12">{children}</main>
        </div>
    );
}
