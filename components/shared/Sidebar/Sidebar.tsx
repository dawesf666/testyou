// "use client";
// //
// import { navLinks } from "@/constants";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "../ui/button";

// const Sidebar = () => {
//     const pathname = usePathname();

//     return (
//         <aside className="sidebar">
//             <div className="flex size-full flex-col gap-4">
//                 <Link href="/dashboard" className="sidebar-logo">
//                     <Image
//                         src="/assets/images/logo-text.svg"
//                         alt="logo"
//                         width={180}
//                         height={28}
//                     />
//                 </Link>

//                 <nav className="sidebar-nav">
//                     <SignedIn>
//                         <ul className="sidebar-nav_elements">
//                             {navLinks.slice(0, 6).map((link) => {
//                                 const isActive = link.route === pathname;

//                                 return (
//                                     <li
//                                         key={link.route}
//                                         className={`sidebar-nav_element group ${
//                                             isActive
//                                                 ? "bg-purple-gradient text-white"
//                                                 : "text-gray-700"
//                                         }`}
//                                     >
//                                         <Link
//                                             className="sidebar-link"
//                                             href={link.route}
//                                         >
//                                             <Image
//                                                 src={link.icon}
//                                                 alt="logo"
//                                                 width={24}
//                                                 height={24}
//                                                 className={`${
//                                                     isActive && "brightness-200"
//                                                 }`}
//                                             />
//                                             {link.label}
//                                         </Link>
//                                     </li>
//                                 );
//                             })}
//                         </ul>

//                         <ul className="sidebar-nav_elements">
//                             {navLinks.slice(6).map((link) => {
//                                 const isActive = link.route === pathname;

//                                 return (
//                                     <li
//                                         key={link.route}
//                                         className={`sidebar-nav_element group ${
//                                             isActive
//                                                 ? "bg-purple-gradient text-white"
//                                                 : "text-gray-700"
//                                         }`}
//                                     >
//                                         <Link
//                                             className="sidebar-link"
//                                             href={link.route}
//                                         >
//                                             <Image
//                                                 src={link.icon}
//                                                 alt="logo"
//                                                 width={24}
//                                                 height={24}
//                                                 className={`${
//                                                     isActive && "brightness-200"
//                                                 }`}
//                                             />
//                                             {link.label}
//                                         </Link>
//                                     </li>
//                                 );
//                             })}

//                             <li className="flex-center cursor-pointer gap-2 p-4">
//                                 <UserButton afterSignOutUrl="/" showName />
//                             </li>
//                         </ul>
//                     </SignedIn>

//                     <SignedOut>
//                         <Button
//                             asChild
//                             className="button bg-purple-gradient bg-cover"
//                         >
//                             <Link href="/sign-in">Login</Link>
//                         </Button>
//                     </SignedOut>
//                 </nav>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;

"use client";

import { navLinks } from "@/constants";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../../global/mode-toggle";
import SideBarItem from "./SideBarItem";
import { Separator } from "@/components/ui/separator";
// import { useTheme } from "next-themes";
// import { ThemeProvider } from "@/providers/theme-provider";

const Sidebar = () => {
    const pathname = usePathname();
    //const { setTheme } = useTheme();
    return (
        <nav className="hidden dark:bg-black bg-white shadow-md  h-screen overflow-scroll justify-between md:flex items-center flex-col gap-1 py-6 px-2">
            <SignedIn>
                {/* <div className="flex flex-col">
                    <ul className="">
                        {navLinks.slice(0, 4).map((item) => {
                            const isActive = item.route === pathname;
                            return (
                                <li key={item.label} className="">
                                    <Link
                                        href={item.route}
                                        className={clsx(
                                            //"w-full flex rounded-full cursor-pointer font-bold px-2 py-2",
                                            "flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner",
                                            {
                                                "dark:bg-[#2F006B] bg-purple-gradient ":
                                                    pathname === item.route,
                                            }
                                        )}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                        />
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="">
                        {navLinks.slice(4).map((item) => {
                            const isActive = item.route === pathname;
                            return (
                                <li key={item.label} className="">
                                    <Link
                                        href={item.route}
                                        className={clsx(
                                            "flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner",
                                            {
                                                "dark:bg-[#2F006B] bg-purple-gradient ":
                                                    pathname === item.route,
                                            }
                                        )}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                        />
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="flex-center cursor-pointer gap-2 p-3">
                            <UserButton
                                afterSignOutUrl="/"
                                showName
                                //appearance={{  }}
                            />
                        </li>
                        <li className="ml-2">
                            <ModeToggle />
                        </li>
                    </ul>
                </div> */}
                <div className="w-full">
                    {navLinks.slice(0, 6).map((item) => (
                        <SideBarItem
                            key={item.route}
                            item={item}
                            currentRoute={pathname}
                        />
                    ))}
                </div>
                <div className="w-full">
                    {navLinks.slice(6).map((item) => (
                        <SideBarItem
                            key={item.route}
                            item={item}
                            currentRoute={pathname}
                        />
                    ))}

                    <div className="">
                        <div className="flex justify-end color-white">
                            <UserButton afterSignOutUrl="/" showName />
                        </div>

                        <Separator className="my-3" />
                        <div className="mt-5 flex justify-center align-center ">
                            <ModeToggle />
                        </div>
                    </div>
                </div>

                {/* <div className="flex-center cursor-pointer gap-2  ">
                    <UserButton
                        afterSignOutUrl="/"
                        showName
                        //appearance={{  }}
                    />
                    <div className="mt-10 justify-center">
                        <ModeToggle />
                    </div>
                </div> */}
            </SignedIn>
        </nav>
    );
};

export default Sidebar;
