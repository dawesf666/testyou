"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";

const ArgumentListCard = (props: {
    key: number;
    id: number;
    argument: {
        argument: string;
        total: number;
        done: any;
    };
    index: number;
}) => {
    const router = useRouter();
    const [isSelected, setIsSelected] = useState(false);
    const [done, setDone] = useState(0);
    const [questNum, setQuestNum] = useState(0);
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
    useEffect(() => {
        if (props) {
            let count = 0;
            props?.argument?.done?.forEach((el: any) => {
                if (el) {
                    let fly = JSON.parse(el.questions);
                    if (fly) count = count + fly.length;
                    //count = count + JSON.parse(el.questions).length;
                }
            });
            setDone((count * 100) / props.argument?.total);
        }
    }, [props]);
    //console.log("Doe", done);
    const startTest = () => {
        if (questNum > 0) {
            router.push(`/exercise/${props.argument.argument}/${questNum}`);
        }
    };

    return (
        <>
            {/* <motion.div
                key={props.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                custom={props.index}
                className="mb-5 hover:cursor-pointer"
            >
                <Card
                    onClick={() =>
                        //router.push(`/exercise/${props.argument.argument}`)
                        setIsSelected(!isSelected)
                    }
                    className=" hover:bg-black hover:text-white"
                >
                    <CardHeader>
                        <CardTitle className="flex justify-center text-center">
                            {props.argument.argument}
                        </CardTitle>
                        <CardContent className="flex justify-center">
                            <CardDescription className="font-bold mt-10 hover:text-white">
                                {props.argument.total} quesiti
                            </CardDescription>
                        </CardContent>
                    </CardHeader>
                </Card>
            </motion.div> */}

            <Dialog>
                <DialogTrigger asChild>
                    <motion.div
                        key={props.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        custom={props.index}
                        className="mb-5 hover:cursor-pointer"
                    >
                        <Card
                            // onClick={() =>
                            //     router.push(
                            //         `/exercise/${props.argument.argument}`
                            //     )
                            //     setIsSelected(!isSelected)
                            // }
                            className=" hover:bg-black hover:text-white"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-center text-center">
                                    {props.argument.argument}
                                </CardTitle>
                                <CardContent className="flex justify-center">
                                    <CardDescription className="font-bold mt-10 hover:text-white">
                                        {props.argument.total} quesiti
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex">
                                    <ProgressBar value={done} />
                                    <p
                                        className={cn(
                                            `${
                                                done > 70
                                                    ? "text-lime-600"
                                                    : `${
                                                          done < 35
                                                              ? "text-red-500"
                                                              : "text-yellow-500"
                                                      }`
                                            }`,
                                            "ml-2"
                                        )}
                                    >
                                        {done.toFixed(2)}%
                                    </p>
                                </CardFooter>
                            </CardHeader>
                        </Card>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className="w-11/12">
                    <DialogHeader>
                        <DialogTitle>Scegli domande</DialogTitle>
                        <DialogDescription>
                            Scegli il numero di domande su cui esercitarti.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex justify-center items-center">
                        <Input
                            id="questions"
                            required={true}
                            value={questNum}
                            onChange={(e: any) =>
                                setQuestNum(
                                    Number(e.target.value) >
                                        props.argument.total
                                        ? props.argument.total
                                        : Number(e.target.value)
                                )
                            }
                            //value="10"
                            //className="col-span-1"
                        />
                        <Label htmlFor="questions" className="ml-2 text-2xl">
                            /{props.argument.total}
                        </Label>
                    </div>

                    <DialogFooter>
                        <Button
                            type="submit"
                            onClick={() => {
                                //console.log("CIAOAOAOAO");
                                startTest();
                            }}
                        >
                            Inizia test
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ArgumentListCard;
