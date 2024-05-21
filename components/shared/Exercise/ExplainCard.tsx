"use client";

import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
type Props = {
    text: string;
    flag: boolean;
};

const CorrectAnswer =
    "bg-lime-600 text-white text-xl p-10 mt-10 flex justify-center align-center rounded-xl";
const WrongAnswer =
    "bg-red-600 text-white text-xl p-10 mt-10 flex justify-center align-center rounded-xl";
const ExplainCard = ({ text, flag }: Props) => {
    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };
    const [scope, animate] = useAnimate();
    let wordsArray = text.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };
    //console.log("flag:", flag);
    //return <div className={flag === true ? "bg-green" : "bg-red"}>{text}</div>;
    return (
        <motion.div
            key={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            //className="flex text-black font-bold text-2xl border rounded-3xl mb-3 hover:bg-black hover:text-white"
            className={flag === true ? CorrectAnswer : WrongAnswer}
        >
            <div className={cn("font-bold")}>
                <div className="mt-4">
                    <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
                        {renderWords()}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ExplainCard;
