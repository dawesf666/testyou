import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
type Props = {};

export default async function LoadingSubjects() {
    // const loadingArray = [0, 10, 20, 30, 70, 100];
    // const renderLoading = () => {
    //     const loadingArray = [0, 10, 20, 30, 70, 100];
    //     loadingArray.forEach((el) => {
    //         <Progress value={el} />;
    //     });
    // };

    return (
        <div>
            <div className="flex flex-wrap flex-col items-center justify-center mb-10 mt-5">
                <div className="">qualcosa</div>
                <div>
                    <h1 className="text-center text-4xl sm:text-6xl font-bold mt-5 mb-5">
                        Materie sulle quali prepararti
                    </h1>

                    <p className="max-w-xl text-lg text-slate-700 text-center m-auto">
                        {`Pronto a esplorare il mondo della conoscenza? Usa la barra di ricerca per trovare argomenti che ti interessano, le domande disponibili per ciascun argomento e la materia associata. Immergiti, esplora e testa la tua conoscenza!`}
                    </p>
                </div>
            </div>
            <div className="flex p-5 justify-center align-center">
                <Image
                    src="/loader.gif"
                    alt="loader"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
}
