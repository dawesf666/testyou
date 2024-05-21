"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ChevronRightIcon,
    ChevronLeftIcon,
    EyeOpenIcon,
    EnterIcon,
} from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
    callAIVerification,
    saveAIResponse,
} from "@/lib/actions/exercise.actions";
import Link from "next/link";
type Props = {
    id: number;
    setId: any;
    questions: any;
    rest: any;
    obj: any;
    setExplain: any;
    submitTest: any;
};

const NavButton = (props: {
    cardVariants: any;
    text: string;
    flag: string;
    onClick: any;
}) => {
    return (
        <motion.div
            variants={props.cardVariants}
            initial="hidden"
            animate="visible"
            // custom={props.index}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="flex text-black font-bold text-2xl border rounded-3xl mb-3 hover:bg-black hover:text-white"
        >
            {props.flag === "left" ? (
                <Button
                    className="flex rounded-full text-xl p-6"
                    onClick={props.onClick}
                >
                    <div className="flex justify-center align-center ">
                        <ChevronLeftIcon className="h-6 w-6 mt-1" />
                        <p>{props.text}</p>
                    </div>
                </Button>
            ) : props.flag === "right" ? (
                <Button
                    className="flex rounded-full text-xl p-6"
                    onClick={props.onClick}
                >
                    <div className="flex justify-center align-center ">
                        {props.text}
                        <ChevronRightIcon className="h-6 w-6 mt-1" />
                    </div>
                </Button>
            ) : props.flag === "end" ? (
                <Button
                    className="flex rounded-full text-xl p-6"
                    onClick={props.onClick}
                >
                    <div className="flex justify-center align-center ">
                        {props.text}
                        <EnterIcon className="ml-2 h-6 w-6 mt-1" />
                    </div>
                </Button>
            ) : (
                <Button
                    className="flex rounded-full text-xl p-6 w-full"
                    onClick={props.onClick}
                >
                    <div className="flex justify-center align-center">
                        {props.text}
                        <EyeOpenIcon className="ml-2 h-6 w-6 mt-1" />
                    </div>
                </Button>
            )}
        </motion.div>
    );
};

const FooterNav = ({
    id,
    setId,
    questions,
    rest,
    obj,
    setExplain,
    submitTest,
}: Props) => {
    const { toast } = useToast();

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (num: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: num * 0.2,
                duration: 0.5,
            },
        }),
    };
    const validateAnswer = async (question: any) => {
        if (question.explanation !== "") {
            setExplain(question.explanation);
        } else {
            //CALL AI FOR EXPLANATION
            const AIHelp = await callAIVerification(
                question.question,
                question.answers
            );
            const saveResp = await saveAIResponse(
                question.idMatContent,
                AIHelp
            );
            setExplain(AIHelp);
        }
    };
    const setToastMessage = (ok: string, picked: string) => {
        if (ok === picked) {
            toast({
                title: "Risposta esatta!",
                description: "Ottimo! La tua risposta è esatta!",
                duration: 5000,
                className: "success-toast",
                action: (
                    <ToastAction
                        altText="why"
                        onClick={() => validateAnswer(questions[id])}
                    >
                        Scopri perchè
                    </ToastAction>
                ),
            });
        } else {
            toast({
                title: "Risposta errata!",
                description: "Spiacente, ma la tua risposta è errata!",
                duration: 5000,
                className: "error-toast",
                action: (
                    <ToastAction
                        altText="why"
                        onClick={() => validateAnswer(questions[id])}
                    >
                        Scopri perchè
                    </ToastAction>
                ),
            });
        }
    };

    return (
        <div>
            <div className="block md:flex justify-center md:align-center mx-auto md:absolute md:bottom-10 w-11/12 md:w-9/12">
                <div className="flex align-center justify-evenly">
                    <NavButton
                        cardVariants={cardVariants}
                        text={"Precedente"}
                        flag={"left"}
                        onClick={() => {
                            setExplain("");
                            id >= 1 && setId(id - 1);
                        }}
                        //onClick={() => setExplain("")}
                    />

                    {id === questions.length - 1 ? (
                        <NavButton
                            cardVariants={cardVariants}
                            text={"Termina"}
                            flag={"end"}
                            onClick={() => submitTest(questions, obj)}
                        />
                    ) : (
                        <NavButton
                            cardVariants={cardVariants}
                            text={"Successiva"}
                            flag={"right"}
                            onClick={() => {
                                setExplain("");
                                id < questions.length - 1 && setId(id + 1);
                            }}
                            //onClick={() => setExplain("")}
                        />
                    )}
                </div>
                {obj[id] !== undefined && obj[id].asw && (
                    <NavButton
                        cardVariants={cardVariants}
                        text={"Verifica"}
                        flag={"verify"}
                        onClick={() =>
                            setToastMessage(
                                questions[id].answerOk,
                                obj[id].answer_picked
                            )
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default FooterNav;
