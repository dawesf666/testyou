import Link from "next/link";
import { Suspense } from "react";

import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react";

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
//import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    getCardsInformation,
    getTableInformation,
} from "@/lib/actions/dashboard.actions";
import DashboardCard from "@/components/shared/DashboardCard";
import DashboardTable from "@/components/shared/DashboardTable";

interface Info {
    title: string;
    icon: string;
    val: number;
    desc: string;
}

const Dashboard = async () => {
    //let ret: Array<Info> = [{}, {}, {}, {}];
    const ret = await getCardsInformation();

    //const table = await getTableInformation();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex mt-12 md:lg:mt-0 flex-1 flex-col  gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {ret !== undefined &&
                        ret.map((ca: any, ind: number) => (
                            <DashboardCard
                                key={ind}
                                title={ca.title}
                                icon={ca.icon}
                                val={ca.val}
                                desc={ca.desc}
                            />
                        ))}
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card
                        className="xl:col-span-2"
                        x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Attività</CardTitle>
                                <CardDescription>
                                    Attività svolte recentemente.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1">
                                <Link href="/done">
                                    Vedit tutto
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow className="bg-slate-200 text-sm md:text-xl md:font-bold md:text-center">
                                        <TableCell className="hidden md:table-cell rounded-t-xl">
                                            Tipologia
                                        </TableCell>
                                        <TableCell className="rounded-t-xl">
                                            Materia
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell rounded-t-xl ">
                                            Risultato
                                        </TableCell>
                                        <TableCell className=" rounded-t-xl text-end ">
                                            Stato
                                        </TableCell>

                                        <TableCell className="hidden md:table-cell rounded-t-xl">
                                            Data
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                <Suspense
                                    fallback={
                                        <TableBody>
                                            <tr className="">
                                                <td>Loading results.....</td>
                                            </tr>
                                        </TableBody>
                                    }
                                >
                                    <DashboardTable info={[]} />
                                </Suspense>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card x-chunk="dashboard-01-chunk-5">
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {/* <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/01.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Olivia Martin
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        olivia.martin@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$1,999.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/02.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>JL</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Jackson Lee
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        jackson.lee@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$39.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/03.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>IN</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Isabella Nguyen
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        isabella.nguyen@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$299.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/04.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>WK</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        William Kim
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        will@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$99.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/05.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>SD</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Sofia Davis
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        sofia.davis@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$39.00
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
