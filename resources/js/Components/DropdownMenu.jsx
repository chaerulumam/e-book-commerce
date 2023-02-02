import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { Link as InertiaLink } from "@inertiajs/react";

function Link({ href, children }) {
    return (
        <Menu.Item>
            {({ active, ...props }) => (
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

function DropdwonMenu({ label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button className="flex items-center gap-x-2">
                        {label}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={clsx(
                                "w-5 h-5",
                                open && "rotate-180 transition duration-200"
                            )}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="absolute w-64 top-full right-0 bg-white mt-2 overflow-hidden">
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

DropdwonMenu.Link = Link;
export default DropdwonMenu;
