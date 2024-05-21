"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export const Search = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState("");

    console.log(query);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query) {
                const newUrl = formUrlQuery({
                    searchParams: searchParams.toString(),
                    key: "query",
                    value: query,
                });
                console.log(newUrl);
                router.push(newUrl, { scroll: false });
            } else {
                const newUrl = removeKeysFromQuery({
                    searchParams: searchParams.toString(),
                    keysToRemove: ["query"],
                });
                console.log(newUrl);
                router.push(newUrl, { scroll: false });
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [router, searchParams, query]);

    return (
        <div className="flex w-full rounded-[25px] border-2 border-purple-200/20 px-4 shadow-sm shadow-purple-200/15">
            {/* <div className="flex w-full rounded-full border-2 border-white px-3"> */}
            <Image
                src="/assets/icons/search.svg"
                alt="search"
                width={24}
                height={24}
            />

            <Input
                className="border-0 bg-transparent focus:outline-none w-full focus-visible:ring-offset-0 p-3 focus-visible:ring-transparent !important"
                // className="border-0 bg-transparent text-dark-600 w-full placeholder:text-dark-400 h-[50px] p-16-medium focus-visible:ring-offset-0 p-3 focus-visible:ring-transparent !important"
                placeholder="Cerca"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};
