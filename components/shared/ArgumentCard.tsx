"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ArgumentCard = (props: {
    key: number;
    id: number;
    argument: {
        argument: string;
        total: number;
        subject: {
            name: string;
        };
    };
    index: number;
}) => {
    const cardVariants = {
        hidden: { opacity: 0, x: 50 }, // Partenza: trasparenti e spostate a destra
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2, // Delay incrementale basato sull'indice
                duration: 0.5,
            },
        }),
    };
    return (
        <>
            <motion.div
                key={props.id} // Assicurati che ogni argomento abbia un id univoco
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={props.index} // Passa l'indice come prop personalizzata per il delay
                className="mb-5"
            >
                <Card onClick={() => console.log(props.argument)}>
                    <CardHeader>
                        <CardTitle className="flex justify-center text-center">
                            {props.argument.argument}
                        </CardTitle>
                        <CardContent className="flex justify-between">
                            <CardDescription className="font-bold mt-10">
                                Materia: {props.argument.subject.name}
                            </CardDescription>
                            <CardDescription className="font-bold mt-10">
                                {props.argument.total} quesiti
                            </CardDescription>
                        </CardContent>
                    </CardHeader>
                </Card>
            </motion.div>
        </>
    );
};

export default ArgumentCard;
