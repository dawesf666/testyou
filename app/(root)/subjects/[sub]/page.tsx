//"use client";
import Image from "next/image";
//import React, { useState, useEffect } from "react";
import ArgumentListCard from "@/components/shared/ArgumentListCard";
import { getSubjectById } from "@/lib/actions/subject.actions";
import BackButton from "@/components/shared/BackButton";

//import { usePathname, useRouter } from "next/navigation";
type Props = {
    params: {
        sub: number;
    };
};

const SubjectPage = async ({ params }: Props) => {
    //const path = usePathname();
    const subject = await getSubjectById(params.sub);

    console.log("SUBJECT IN PAGE", params);

    return (
        <div className="mt-10 md:mt-0 p-5 md:p-12">
            <BackButton path={""} />
            <div>
                <Image
                    src={subject?.subject.img}
                    alt="img"
                    width={100}
                    height={100}
                    className="w-full m-auto object-fill h-[250px] md:h-[500px]  rounded-md"
                />
            </div>
            <div className="my-5 text-center text-3xl font-bold">
                {subject?.subject.name}
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora autem tenetur tempore, temporibus inventore ratione
                iusto dolores fugiat aspernatur, incidunt quidem doloribus vitae
                soluta nihil dolorum repellendus adipisci pariatur nisi!
            </div>
            <div className="mt-10">
                {subject.arguments.map((argument: any, index: number) => (
                    <ArgumentListCard
                        key={index}
                        id={index}
                        argument={argument}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubjectPage;
