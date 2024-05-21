import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

const FinishTest = ({
    number,
    className,
    setFinishTheTest,
    subject,
    ansOk,
    quests,
}: {
    number?: number;
    className?: string;
    setFinishTheTest: any;
    subject: number;
    ansOk: number | undefined;
    quests: number;
}) => {
    const router = useRouter();
    const meteors = new Array(number || 20).fill(true);
    setTimeout(() => {
        // router.back();
        router.push(`/subjects/${subject}`);
        setFinishTheTest(false);
    }, 5000);
    return (
        <div className="fixed justify-center align-center md:lg:left-1/2 w-11/12 mx-auto">
            {meteors.map((el, idx) => (
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                        className
                    )}
                    style={{
                        top: 100,
                        left:
                            Math.floor(Math.random() * (400 - -400) + -400) +
                            "px",
                        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                        animationDuration:
                            Math.floor(Math.random() * (10 - 2) + 2) + "s",
                    }}
                ></span>
            ))}
            <div>
                <p>Salvataggio avvenuto con successo!</p>
                <p>
                    Hai risposto correttamente a {ansOk} domande su {quests}
                </p>
            </div>
        </div>
        // <div className="flex justify-center align-center md:lg:mt-20">

        // </div>
    );
};

export default FinishTest;
