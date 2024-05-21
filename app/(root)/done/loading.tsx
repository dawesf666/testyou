import Image from "next/image";
import React from "react";

type Props = {};

export default async function LoadingDone() {
    return (
        <div>
            <h1 className="flex justify-center align-center p-10 text-black font-black text-xl my-6">
                Attività svolte
            </h1>
            <div className="flex justify-center align-center p-10">
                <div className="flex p-5 justify-center align-center bg-transparent">
                    <Image
                        src="/loader.gif"
                        alt="loader"
                        width={100}
                        height={100}
                        className="bg-transparent"
                    />
                </div>
            </div>
        </div>
    );
}
