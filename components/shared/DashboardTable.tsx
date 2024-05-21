import React from "react";
import {
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { wait, getTableInformation } from "@/lib/actions/dashboard.actions";
import { Table } from "lucide-react";
import clsx from "clsx";
import { renderDate } from "@/lib/utils";
type Props = {
    info: any;
};

const DashboardTable = async ({ info }: Props) => {
    let arr = [{}, {}, {}];
    //await wait(5000);
    const table = await getTableInformation();
    //console.log(table);

    return (
        <TableBody className="">
            {table.map((el: any, ind: number) => (
                <TableRow key={ind}>
                    <TableCell className="hidden md:table-cell md:text-center">
                        {el.type}
                    </TableCell>
                    <TableCell className="md:text-center">
                        {el.subject}
                    </TableCell>
                    <TableCell className="hidden md:table-cell md:text-center">
                        {el.result}
                    </TableCell>
                    <TableCell className="text-end md:text-center">
                        {Number(el.state.slice(0, -1)) >= 70 ? (
                            <Badge className="bg-lime-600">{el.state}</Badge>
                        ) : (
                            <Badge className="bg-red-600">{el.state}</Badge>
                        )}
                    </TableCell>
                    {/* <td className="text-small">{`${el.date.getDay()}/${
                        el.date.getMonth() + 1
                    }/${el.date.getFullYear()} ${el.date.getHours()}:${el.date.getMinutes()}`}</td> */}
                    <TableCell className="hidden md:table-cell md:text-center text-small">
                        {renderDate(el.date)}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default DashboardTable;
