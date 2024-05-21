import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query", "info"] });

export async function GET(request: Request) {
    try {
        //console.log(prisma);
        const { searchParams } = new URL(request.url);
        const id = Number(searchParams.get("sub"));
        console.log("PARAMS IN SUBJECT ROUTE", searchParams);
        const subject = await prisma.subjects.findUnique({
            where: {
                idSubjects: id,
            },
            include:{
                MatContents:{
                    distinct: ['argument'],
                }
            }
        });
        console.log("SUBJECT", subject);
        return NextResponse.json(subject);

        // const { searchParams } = new URL(request.url);
        // const name = searchParams.get("name");
        // const prods = await prisma.products.findMany();
        // const prodsData = prods.filter((p) =>
        //     p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
        // );
        // return NextResponse.json(prodsData.slice(0, 10));
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again later",
        });
    }
}
