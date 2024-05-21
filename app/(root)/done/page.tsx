import { getTableInformation, wait } from "@/lib/actions/dashboard.actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Header } from "@/components/global/container-scroll-animation";
import BackButton from "@/components/shared/BackButton";

// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             id: "728ed52f",
//             amount: 100,
//             status: "pending",
//             email: "m@example.com",
//         },
//         // ...
//     ];
// }

export default async function DonePage() {
    //await wait(500);

    const data = await getTableInformation();

    return (
        <div>
            <div className="mt-5 w-full px-8 mx-auto">
                <BackButton path="" />
            </div>

            <div className="mt-5 container mx-auto py-10">
                <h1 className="text-black font-black text-xl">
                    Attività svolte
                </h1>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}
