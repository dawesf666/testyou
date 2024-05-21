import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const Layuot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex overflow-hidden h-screen mx-1">
            <Sidebar />
            <MobileNav />

            <div className="w-full overflow-auto p-2">
                {children}
                {/* <div className="p-5">{children}</div> */}
                <Toaster />
            </div>
        </div>
    );
};

export default Layuot;
