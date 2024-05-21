import React from "react";

const Layuot = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="fixed flex align-center justify-center min-h-screen w-full h-full mx-auto my-auto top-20 md:top-1/4">
            {children}
        </main>
    );
};

export default Layuot;
