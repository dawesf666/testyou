"use client";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";

type Props = {};

const SubjectCard = (props: {
    key: number;
    id: number;
    subject: Subject;
    index: number;
    // ExercisesDone: any;
    // allQuestions: any;
}) => {
    // const [isSelected, setIsSelected] = useState(false);
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [done, setDone] = useState(0);
    const router = useRouter();
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
            props?.subject?.ExercisesDone.forEach((el: any) => {
                if (el) {
                    //console.log("DAAAAAAA", el);
                    let fly = JSON.parse(el.questions);
                    if (fly) count = count + fly.length;
                    //count = count + JSON.parse(el.questions).length;
                }
            });
            setDone((count * 100) / props.subject.allQuestions);
        }
        //setDone(0);
    }, [props]);
    //console.log("PROPS", props);
    return (
        <>
            <motion.div
                key={props.id} // Assicurati che ogni argomento abbia un id univoco
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                custom={props.index} // Passa l'indice come prop personalizzata per il delay
                className="mb-5 hover:cursor-pointer"
            >
                <Link
                    href={`/subjects/${props.subject.idSubjects}`}
                    key={`/subjects/${props.subject.idSubjects}`}
                    className="lg:relative lg:group  lg:block lg:p-2"
                    onMouseEnter={() => setHoveredIndex(props.key)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === props.key && (
                            <motion.span
                                className="lg:absolute lg:inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card
                        onClick={() =>
                            router.push(`/subjects/${props.subject.idSubjects}`)
                        }
                        className="rounded-2xl  p-4 overflow-hidden border  dark:border-white/[0.2] group-hover:border-slate-700 lg:relative lg:z-20"
                        //className=" hover:bg-black hover:text-white"
                    >
                        <CardHeader>
                            <div className="w-full p-0">
                                <Image
                                    src={props.subject.img}
                                    alt={"img"}
                                    width={300}
                                    height={100}
                                    className="w-full m-auto object-fill h-[155px] rounded-md"
                                />
                            </div>

                            <CardTitle className="flex justify-center">
                                {props.subject.title}
                            </CardTitle>
                            <CardContent>
                                <CardDescription className="font-bold">
                                    {props.subject.desc}
                                </CardDescription>
                            </CardContent>
                            <CardContent>
                                <ul>
                                    {props.subject.MatContents !== null &&
                                    props.subject.MatContents.length &&
                                    props.subject.MatContents.length > 5
                                        ? props.subject.MatContents?.slice(
                                              0,
                                              4
                                          ).map((el, ind) => (
                                              <li key={ind}>
                                                  <CardDescription>
                                                      {el?.argument?.length > 20
                                                          ? `${el.argument?.slice(
                                                                0,
                                                                20
                                                            )}...`
                                                          : el.argument}
                                                  </CardDescription>
                                              </li>
                                          ))
                                        : props.subject.MatContents?.map(
                                              (el, ind) => (
                                                  <li key={ind}>
                                                      <CardDescription>
                                                          {el?.argument.length >
                                                          20
                                                              ? `${el.argument?.slice(
                                                                    0,
                                                                    20
                                                                )}...`
                                                              : el.argument}
                                                      </CardDescription>
                                                  </li>
                                              )
                                          )}
                                </ul>
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
                </Link>
            </motion.div>
        </>
    );
};

export default SubjectCard;
