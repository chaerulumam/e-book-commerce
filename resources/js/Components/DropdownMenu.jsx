import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { Link as InertiaLink } from "@inertiajs/react";

function Link({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <InertiaLink
                    {...props}
                    className={clsx(
                        active && "bg-gray-100 text-black",
                        "w-full block text-gray-600 py-1.5 px-3 text-sm"
                    )}
                    href={href}
                >
                    {children}
                </InertiaLink>
            )}
        </Menu.Item>
    );
}

function DropdwonMenu({ classNameButton = "", label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button
                        className={clsx(
                            classNameButton,
                            "flex items-center gap-x-2"
                        )}
                    >
                        {label}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={clsx(
                                "w-5 h-5 transition duration-200",
                                open && "rotate-180"
                            )}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="absolute w-64 rounded-lg shadow-sm top-full right-0 bg-white mt-2 overflow-hidden">
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

function Divider() {
    return <div className="bg-gray-200 my-1 w-full block h-px" />;
}

DropdwonMenu.Link = Link;
DropdwonMenu.Divider = Divider;
export default DropdwonMenu;
