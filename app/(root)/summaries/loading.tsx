import Image from "next/image";
import React from "react";
//import { Loader } from "@/components/shared/Loader";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/loader.gif" alt="loader" width={100} height={100} />
        </div>
    );
};

export default Loading;
