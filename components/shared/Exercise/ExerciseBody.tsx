"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import ExerciseNav from "./ExerciseNav";
import TestCard from "./TestCard";
import FooterNav from "./FooterNav";
import FinishTest from "./FinishTest";
import { saveStudentTest } from "@/lib/actions/exercise.actions";
type Props = {
    questions: any;
};

const ExerciseBody = ({ questions }: Props) => {
    const { isSignedIn, user, isLoaded } = useUser();
    const [rest, setRest] = useState(0);
    const [finishTheTest, setFinishTheTest] = useState(false);
    const [id, setId] = useState(0);
    const [obj, setObj] = useState([]);
    const [explain, setExplain] = useState("");
    const [result, setResult] = useState();
    useEffect(() => {
        let createObj: any = [];
        for (let i = 0; i < questions.length; i++) {
            createObj.push({
                // asw: "",
                // answer_picked: "",
                // aswIndex: 0,
            });
        }
        setObj(createObj);
    }, [questions]);

    //console.log("OBJ", obj);
    const setAnswer = (e: any, i: number, letters: String[]) => {
        // console.log(i)
        const value = [...obj];
        //console.log("VALUE", value);
        value[id].asw = JSON.parse(questions[id].answers)[i].ans;
        value[id].answer_picked = letters[i];
        value[id].aswIndex = i;
        setObj(value);

        let res = 0;
        for (let j = 0; j < value.length; j++) {
            if (Object.keys(value[j]).length > 0) {
                res += 1;
            }
        }
        setRest(res);
        // console.log(res);
    };
    console.log("USER", user);
    const submitTest = async (questions: any, answers: any, subject: any) => {
        const testObj = {
            questions: questions,
            answers: answers,
            subject: questions[0].idSubject,
            course: questions[0].idCourse,
            argument: questions[0].argument,
            user: user?.id,
        };
        setFinishTheTest(true);
        let save = await saveStudentTest(testObj);
        setResult(save);
        // if (save) {
        //     setFinishTheTest(false);
        // }
    };
    return (
        <div>
            {finishTheTest === true ? (
                <>
                    <FinishTest
                        number={50}
                        className=""
                        setFinishTheTest={setFinishTheTest}
                        subject={questions[0].idSubject}
                        ansOk={result}
                        quests={questions.length}
                    />
                </>
            ) : (
                <>
                    <ExerciseNav total={questions.length} rest={rest} />
                    <TestCard
                        questions={questions}
                        id={id}
                        // rest={rest}
                        // setRest={setRest}
                        //finishTheTest={finishTheTest}
                        setAnswer={setAnswer}
                        obj={obj}
                        explain={explain}
                        setExplain={setExplain}
                    />
                    <div className="mt-20">
                        <FooterNav
                            id={id}
                            setId={setId}
                            questions={questions}
                            rest={rest}
                            obj={obj}
                            setExplain={setExplain}
                            submitTest={submitTest}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ExerciseBody;
