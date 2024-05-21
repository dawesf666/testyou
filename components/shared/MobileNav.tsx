"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import clsx from "clsx";

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <header className="flex-between fixed h-16 w-full border-b-4 lg:hidden overflow-hidden">
            <nav className="dark:bg-black bg-white h-screen overflow-scroll justify-between md:flex items-center flex-col gap-10 ">
                <div className="flex justify-end p-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />

                        <Sheet>
                            <SheetTrigger>
                                <Image
                                    src="/assets/icons/menu.svg"
                                    alt="menu"
                                    width={32}
                                    height={32}
                                    className="cursor-pointer"
                                />
                            </SheetTrigger>
                            <SheetContent className="sheet-content sm:w-64">
                                <>
                                    {/* <Image
                                        src="/assets/images/logo-text.svg"
                                        alt="logo"
                                        width={152}
                                        height={23}
                                    /> */}

                                    {navLinks.map((link) => (
                                        <ul
                                            className="mt-3 w-full"
                                            key={link.label}
                                        >
                                            <li
                                                className={clsx(
                                                    "w-full flex rounded-full scale-[1.2] cursor-pointer",
                                                    {
                                                        "dark:bg-[#2F006B] bg-[#EEE0FF] ":
                                                            pathname ===
                                                            link.route,
                                                    }
                                                )}
                                                key={link.route}
                                            >
                                                <Link
                                                    //className="sidebar-link cursor-pointer"
                                                    href={link.route}
                                                    className="flex w-full items-start gap-5 p-3"
                                                >
                                                    <Image
                                                        src={link.icon}
                                                        alt="logo"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <p> {link.label}</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    ))}
                                </>
                            </SheetContent>
                        </Sheet>
                    </SignedIn>

                    <SignedOut>
                        <Button
                            asChild
                            className="button bg-purple-gradient bg-cover"
                        >
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </nav>
        </header>
    );
};

export default MobileNav;
