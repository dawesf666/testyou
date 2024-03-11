import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layuot = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            <MobileNav />
            <Sidebar />
            <div className="root-container">
                <div className="wrapper">{children}</div>
            </div>
        </main>
    );
};

export default Layuot;
