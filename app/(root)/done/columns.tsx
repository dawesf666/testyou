"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// export type Payment = {
//     id: string;
//     amount: number;
//     status: "pending" | "processing" | "success" | "failed";
//     email: string;
// };
//export const columns: ColumnDef<Payment>[] = [
//     {
//         accessorKey: "status",
//         header: "Status",
//     },
//     {
//         accessorKey: "email",
//         header: "Email",
//     },
//     {
//         accessorKey: "amount",
//         header: "Amount",
//     },
// ];

export type TestDone = {
    id: number;
    type: string;
    subject: string;
    state: string;
    result: string;
    date: string;
    // status: "pending" | "processing" | "success" | "failed";
    // email: string;
};
export const columns: ColumnDef<TestDone>[] = [
    {
        accessorKey: "type",
        header: "Tipologia",
    },
    {
        accessorKey: "subject",
        header: "Materia",
    },
    {
        accessorKey: "argument",
        header: "Argomento",
    },
    {
        accessorKey: "state",
        header: "Stato",
    },
    {
        accessorKey: "result",
        header: "Risultato",
    },
    {
        accessorKey: "date",
        //header: "Data",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="font-bold"
                >
                    Data
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        header: "Azioni",
        id: "actions",
        cell: ({ row }) => {
            //console.log(row);
            const test = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Apri menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Azioni</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={
                                () => console.log("HI")
                                //navigator.clipboard.writeText(test.id)
                            }
                        >
                            Apri
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Stampa</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
    // {
    //     accessorKey: "actions",
    //     header: "Azioni",
    // },
];
