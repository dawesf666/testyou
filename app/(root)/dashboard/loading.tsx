import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoadingCard() {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Materie Approfondite
                    </CardTitle>
                    {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg ">
                        <div className="flex flex-col space-y-2 ">
                            {/* <Skeleton className="h-12 w-full bg-gradient-to-r from-slate-400 to-slate-50" /> */}
                            <Skeleton className="h-24 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                            <Skeleton className="h-6 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Argomenti Approfondite
                    </CardTitle>
                    {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg ">
                        <div className="flex flex-col space-y-2 ">
                            {/* <Skeleton className="h-12 w-full bg-gradient-to-r from-slate-400 to-slate-50" /> */}
                            <Skeleton className="h-24 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                            <Skeleton className="h-6 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Domande totali
                    </CardTitle>
                    {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg ">
                        <div className="flex flex-col space-y-2 ">
                            {/* <Skeleton className="h-12 w-full bg-gradient-to-r from-slate-400 to-slate-50" /> */}
                            <Skeleton className="h-24 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                            <Skeleton className="h-6 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Domande corrette
                    </CardTitle>
                    {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg ">
                        <div className="flex flex-col space-y-2 ">
                            {/* <Skeleton className="h-12 w-full bg-gradient-to-r from-slate-400 to-slate-50" /> */}
                            <Skeleton className="h-24 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                            <Skeleton className="h-6 w-full rounded-lg bg-gradient-to-r from-slate-400 to-slate-50" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
