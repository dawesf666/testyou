"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

type Props = {
    path: string;
};

const BackButton = ({ path }: Props) => {
    //const pathname = usePathname();
    const router = useRouter();
    //const history =

    //console.log("pathanme", pathname);
    const goBack = () => {
        router.back();
    };
    return (
        <div className="mb-2">
            <Button className="rounded-full" onClick={() => goBack()}>
                <ChevronLeftIcon />
                Indietro
            </Button>
        </div>
    );
};

export default BackButton;
