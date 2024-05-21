import Image from "next/image";
import React from "react";

type Props = {};

export default async function LoadingArguments() {
    return (
        <div>
            <h1 className="flex justify-center align-center p-10 text-black font-black text-xl my-6">
                Argomenti
            </h1>
            <div className="flex justify-center align-center p-10">
                <div className="flex p-5 justify-center align-center">
                    <Image
                        src="/loader.gif"
                        alt="loader"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
}
