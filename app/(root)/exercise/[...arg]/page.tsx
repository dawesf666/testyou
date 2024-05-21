import ExerciseBody from "@/components/shared/Exercise/ExerciseBody";
import ExerciseNav from "@/components/shared/Exercise/ExerciseNav";
import QuestionCard from "@/components/shared/Exercise/QuestionCard";
import { getAllQuestionByArgument } from "@/lib/actions/exercise.actions";
import React from "react";

type Props = {
    params: {
        arg: string[];
    };
};

const ExercisePage = async ({ params }: Props) => {
    console.log("PARAMS IN ExercisePage ", params);
    const questions = await getAllQuestionByArgument(
        params.arg[0],
        params.arg[1]
    );

    //console.log("QUESTIONS", questions);
    return (
        <div>
            <ExerciseBody questions={questions} />
            {/* <ExerciseNav total={questions.length} rest={} /> */}
            {/* {questions.map((question: any, index: number) => (
                <QuestionCard
                    key={index}
                    id={index}
                    question={question}
                    index={index}
                />
            ))} */}
        </div>
    );
};

export default ExercisePage;
