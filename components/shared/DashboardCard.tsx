"use client";
import { DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardCard = (props: {
    title: string;
    icon: string;
    val: number;
    desc: string;
}) => {
    //console.log("ENTRAAAAAAA", props);
    //if (props.title) {
    return (
        <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {props.title}
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{props.val}</div>
                <p className="text-xs text-muted-foreground">{props.desc}</p>
            </CardContent>
        </Card>
    );
    // } else {
    //     return (
    //         <Card>
    //             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //                 <CardTitle className="text-sm font-medium">
    //                     Materie Approfondite
    //                 </CardTitle>
    //                 {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
    //             </CardHeader>
    //             <CardContent>
    //                 <div className="rounded-lg ">
    //                     <div className="flex flex-col space-y-2 ">
    //                         {/* <Skeleton className="h-12 w-full bg-gradient-to-r from-slate-400 to-slate-50" /> */}
    //                         <Skeleton className="h-24 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
    //                         <Skeleton className="h-6 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
    //                     </div>
    //                 </div>
    //             </CardContent>
    //         </Card>
    //     );
    // }
};

export default DashboardCard;
