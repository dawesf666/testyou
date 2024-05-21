import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn("w-full caption-bottom text-sm", className)}
            {...props}
        />
    </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
    />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
            className
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            className
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <>
        {props?.children?.props?.column?.id === "result" ? (
            (Number(props?.children?.props?.cell.getValue().split("/")[0]) *
                100) /
                Number(props?.children?.props?.cell.getValue().split("/")[1]) >=
            70 ? (
                <td
                    ref={ref}
                    className={cn(
                        "text-lime-600  p-4 align-middle [&:has([role=checkbox])]:pr-0 ",
                        className
                    )}
                    {...props}
                />
            ) : (
                <td
                    ref={ref}
                    className={cn(
                        "text-red-600  p-4 align-middle [&:has([role=checkbox])]:pr-0 ",
                        className
                    )}
                    {...props}
                />
            )
        ) : props?.children?.props?.column?.id === "state" ? (
            Number(props?.children?.props?.cell.getValue().slice(0, -1)) >=
            70 ? (
                // <td
                //     ref={ref}
                //     className={cn(
                //         "border-lime-700 bg-lime-600 font-bold text-white rounded-full h-1/3 p-4 align-middle [&:has([role=checkbox])]:pr-0 ",
                //         className
                //     )}
                //     {...props}
                // />
                <td
                    ref={ref}
                    className={cn(
                        " p-4 align-middle [&:has([role=checkbox])]:pr-0 ",
                        className
                    )}
                    {...props}
                >
                    <Badge
                        className="border-lime-700 bg-lime-600 font-bold text-white rounded-full"
                        {...props}
                    />
                </td>
            ) : (
                <td
                    ref={ref}
                    className={cn(
                        " p-4 align-middle [&:has([role=checkbox])]:pr-0 ",
                        className
                    )}
                    {...props}
                >
                    <Badge
                        className="border-red-700 bg-red-600 font-bold bordered  text-white rounded-full"
                        {...props}
                    />
                </td>
            )
        ) : (
            <td
                ref={ref}
                className={cn(
                    "p-4 align-middle [&:has([role=checkbox])]:pr-0",
                    className
                )}
                {...props}
            />
        )}
    </>
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-sm text-muted-foreground", className)}
        {...props}
    />
));

TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};
