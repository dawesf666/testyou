"use client";
import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";

type Props = {
    questions: any;
    id: number;
    // rest: any;
    // setRest: any;
    //finishTheTest: any;
    setAnswer: any;
    obj: any;
    explain: any;
    setExplain: any;
};

const TestCard = ({
    questions,
    id,
    // rest,
    // setRest,
    //finishTheTest,
    setAnswer,
    obj,
    explain,
    setExplain,
}: Props) => {
    //console.log("finishTheTest", finishTheTest);
    return (
        <div className="mt-10 w-11/12 mx-auto ">
            <QuestionCard
                quests={questions}
                id={id}
                setAnswers={setAnswer}
                obj={obj}
                explain={explain}
                setExplain={setExplain}
            />
        </div>
    );
};

export default TestCard;
