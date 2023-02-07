import React from "react";

function Card({ children }) {
    return <div className="border rounded-lg overflow-hidden">{children}</div>;
}
function Header({ children }) {
    return <div className="bg-gray-100 px-4 py-2.5 border-b">{children}</div>;
}

function Body({ children }) {
    return <div className="pt-4">{children}</div>;
}
function Table({ children }) {
    return <div>{children}</div>;
}

function Footer({ children }) {
    return <div className="bg-gray-100 px-4 py-2.5 border-t">{children}</div>;
}

Card.Header = Header;
Card.Body = Body;
Card.Table = Table;
Card.Footer = Footer;
export default Card;
