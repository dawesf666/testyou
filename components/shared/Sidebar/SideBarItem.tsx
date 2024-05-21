import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
type Props = {
    item: any;
    currentRoute: string;
};

const SideBarItem = (props: Props) => {
    return (
        <motion.li
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.5 }}
            className="list-none my-8"
        >
            <Link
                href={props.item.route}
                //className="flex flex-col-2 gap-3"
                className={clsx(
                    // "flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner",
                    "flex flex-col-2 gap-2 rounded-full w-full pl-2 pr-6 py-3 cursor-pointer bg-cover hover:bg-slate-200 font-bold text-xl",
                    //"group h-6 w-6 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer",
                    {
                        "dark:bg-[#2F006B] bg-slate-200":
                            props.currentRoute === props.item.route,
                    },
                    "dark:hover:bg-[#2F006B]"
                )}
            >
                <Image
                    src={props.item.icon}
                    alt={"icon"}
                    width={24}
                    height={24}
                />
                <p>{props.item.label}</p>
            </Link>
        </motion.li>
    );
};

export default SideBarItem;
