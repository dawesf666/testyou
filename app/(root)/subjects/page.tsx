import React from "react";
import { SignedIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getAllSubjects } from "@/lib/actions/subject.actions";
import SubjectCard from "@/components/shared/SubjectCard";
import { Search } from "@/components/shared/Search";
import { wait } from "@/lib/actions/dashboard.actions";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

const SubjectsPage = async ({ searchParams }: PageProps) => {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");

    const query = searchParams.query;
    console.log("QUERY", query);
    const subjects = await getAllSubjects({
        limit: 10,
        page: 1,
        searchQuery: query,
    });
    //await wait(9000);
    //const subjects = await getAllSubjects();
    //console.log("subjects", subjects);
    return (
        <div className="w-full">
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
            <Search />
            <div
                //className="mt-10 md:flex-wrap md:grid md:gap-10 md:grid-cols-3"
                className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3  py-10"
            >
                {subjects.map((subject: any, index: number) => (
                    <SubjectCard
                        key={subject.idSubjects}
                        id={subject.idSubjects}
                        subject={subject}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubjectsPage;
