"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import ExplainCard from "./ExplainCard";
import { letters } from "@/constants";
// PACKAGES
import styled from "styled-components";
import { Button } from "@/components/ui/button";

type Props = {
    quests: any;
    id: any;
    setAnswers: any;
    obj: any;
    explain: any;
    setExplain: any;
};

const BigQuestion = (props: {
    index: number;
    cardVariants: any;
    quest: Object;
}) => {
    return (
        <motion.div
            key={props.index}
            variants={props.cardVariants}
            initial="hidden"
            animate="visible"
            custom={props.index}
            className="mb-5 text-center text-black font-bold text-2xl"
        >
            <p dangerouslySetInnerHTML={{ __html: props.quest }} />
        </motion.div>
    );
};

const Question = (props: {
    key: number;
    index: number;
    cardVariants: any;
    quest: Object;
}) => {
    return (
        <motion.div
            key={props.index}
            variants={props.cardVariants}
            initial="hidden"
            animate="visible"
            custom={props.index}
            className="mb-5 text-center text-black font-bold text-2xl"
        >
            <p dangerouslySetInnerHTML={{ __html: props.quest }} />
        </motion.div>
    );
};

const Answers = (props: {
    key: number;
    index: number;
    cardVariants: any;
    ans: Object;
    let: string;
    selected: string | boolean;
    //onClick: any;
}) => {
    const notSelect =
        "flex text-black font-bold text-2xl border rounded-3xl mb-3 hover:bg-black hover:text-white";
    const select =
        "flex text-black font-bold text-2xl border rounded-3xl mb-3 bg-slate-500 hover:bg-black hover:text-white";
    if (props.selected !== "selected") {
        return (
            <motion.div
                key={props.index}
                variants={props.cardVariants}
                initial="hidden"
                animate="visible"
                custom={props.index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                //className="flex text-black font-bold text-2xl border rounded-3xl mb-3 hover:bg-black hover:text-white"
                className={notSelect}
            >
                <div className="flex font-bold border rounded-s-3xl bg-slate-500 p-5 text-white ">
                    <p>{props.let}</p>
                </div>
                <p
                    dangerouslySetInnerHTML={{ __html: props.ans }}
                    className="mt-5 ml-2"
                />
            </motion.div>
        );
    } else {
        return (
            <motion.div
                key={props.index}
                variants={props.cardVariants}
                initial="hidden"
                animate="visible"
                custom={props.index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                //className="flex text-black font-bold text-2xl border rounded-3xl mb-3 hover:bg-black hover:text-white"
                className={select}
            >
                <div className="flex font-bold border rounded-s-3xl bg-slate-500 p-5 text-white ">
                    <p>{props.let}</p>
                </div>
                <p
                    dangerouslySetInnerHTML={{ __html: props.ans }}
                    className="mt-5 ml-2"
                />
            </motion.div>
        );
    }
};

const QuestionCard = ({
    quests,
    id,
    setAnswers,
    obj,
    explain,
    setExplain,
}: Props) => {
    const { toast } = useToast();

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 1 * 0.2,
                duration: 0.5,
            },
        }),
    };

    const dynamicVariants = (num: number) => {
        return {
            hidden: { opacity: 0, x: 50 }, // Partenza: trasparenti e spostate a destra
            visible: (num: number) => ({
                opacity: 1,
                x: 0,
                transition: {
                    delay: num * 0.2, // Delay incrementale basato sull'indice
                    duration: 0.8,
                },
            }),
        };
    };

    // console.log("quests[id]", quests[id]);
    console.log("EXPLAIN", explain);
    return (
        <div className="">
            <div>
                {quests[id].bigQuestion !== null &&
                    quests[id].bigQuestion !== undefined &&
                    quests[id].bigQuestion !== " " && (
                        <BigQuestion
                            index={quests[id]}
                            cardVariants={cardVariants}
                            quest={quests[id].bigQuestion}
                        />
                    )}
            </div>
            <Question
                key={id}
                index={id}
                cardVariants={cardVariants}
                quest={quests[id].question}
            />

            {quests[id].url_question !== undefined &&
                quests[id].url_question !== " " &&
                quests[id].url_question !== "" && (
                    <img src={quests[id].url_question} alt="img"></img>
                )}
            {JSON.parse(quests[id].answers).map((ans: any, i: number) => (
                <div
                    key={i}
                    onClick={() => {
                        setAnswers(ans, i, letters);
                        setExplain("");
                    }}
                >
                    <Answers
                        key={id}
                        index={i}
                        cardVariants={dynamicVariants(i)}
                        ans={ans.ans}
                        let={letters[i]}
                        selected={
                            obj[id] !== undefined &&
                            obj[id].aswIndex === i &&
                            "selected"
                        }
                    />
                </div>
            ))}

            {explain !== "" && (
                <ExplainCard
                    text={explain}
                    flag={
                        quests[id].answerOk === obj[id].answer_picked
                            ? true
                            : false
                    }
                />
            )}
        </div>
    );
};

export default QuestionCard;
