//"use client";
import React from "react";
import { SignedIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getAllArguments } from "@/lib/actions/argument.actions";
import ArgumentCard from "@/components/shared/ArgumentCard";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "@/components/shared/Search";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

const ArgumentsPage = async ({ searchParams }: PageProps) => {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");

    //let args : String[] = [];
    const query = searchParams.query;
    console.log("QUERY", query);
    const args = await getAllArguments({
        limit: 10,
        page: 1,
        searchQuery: query,
    });

    // if (!query) {
    //     const args = await getAllArguments({
    //         limit: 10,
    //         page: 1,
    //         searchQuery: "",
    //     });
    // }else{
    //     args = await getAllArguments({
    //         limit: 10,
    //         page: 1,
    //         searchQuery: query,
    //     });
    // }

    //return redirect('/')

    //const args = await getAllArguments();
    //console.log("courses", args);
    //const

    return (
        <div className="w-full">
            <div className="flex flex-wrap flex-col items-center justify-center mb-10 mt-5">
                <div className="">qualcosa</div>
                <div>
                    <h1 className="text-center text-4xl sm:text-6xl font-bold mt-5 mb-5">
                        {`Testati sugli argomenti`}
                    </h1>

                    <p className="max-w-2xl text-center text-lg text-slate-700">
                        {`Pronto a esplorare il mondo della conoscenza? Usa la barra di ricerca per trovare argomenti che ti interessano, le domande disponibili per ciascun argomento e la materia associata. Immergiti, esplora e testa la tua conoscenza!`}
                    </p>
                </div>
            </div>
            <Search />
            {/* <SearchComponent arr={args} type="args" query="" /> */}
            <div className="mt-10">
                {args.map((argument: any, index: number) => (
                    <ArgumentCard
                        key={index}
                        id={index}
                        argument={argument}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArgumentsPage;
