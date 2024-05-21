import React from "react";

type Props = {
    total: number;
    rest: number;
};

const ExerciseNav = ({ total, rest }: Props) => {
    return (
        <div className="flex justify-between md:lg:justify-evenly w-full mx-auto bg-slate-500 rounded-lg py-5 px-2 text-white mt-6">
            <div className="flex flex-wrap flex-col items-center justify-center">
                <p className="">Domande Totali</p>
                <p className="text-2xl">{total}</p>
            </div>
            <div className="flex flex-wrap flex-col items-center justify-center">
                <p>Domande Completate</p>
                <p className="text-2xl">{rest}</p>
            </div>
        </div>
    );
};

export default ExerciseNav;
