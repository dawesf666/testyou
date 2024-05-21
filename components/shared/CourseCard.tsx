"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CourseCard = (params: { key: number; course: Course }) => {
    const cardVariants = {
        hidden: { opacity: 0, x: 50 }, // Partenza: trasparenti e spostate a destra
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3, // Delay incrementale basato sull'indice
                duration: 0.6,
            },
        }),
    };

    return (
        <motion.div
            key={params.course.idCourses} // Assicurati che ogni course abbia un id univoco
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={params.key} // Passa l'indice come prop personalizzata per il delay
            className="mb-5 w-min-[300px] w-max-[500px] h-max-[500px]"
        >
            <Card className="">
                <CardHeader>
                    <CardTitle>{params.course.title}</CardTitle>
                    <CardDescription className="font-bold">
                        {params.course.desc}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default CourseCard;
