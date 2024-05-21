import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";


export async function GET(request: Request) {
    try {
        
        const { searchParams } = new URL(request.url);
        console.log(searchParams);
        const args = await prisma.matContents.findMany({
            distinct: ['argument'],
            // where:{
            //     argument:{
            //         includes:
            //     }
            // }
        });
        //const
        //const {idUser} = await request.json() 
        // const addresses = await prisma.addresses.findMany({
        //     where:{
        //         idUser:idUser
        //     }
        // });
        //console.log("ADDRESSES",addresses);
        //return NextResponse.json(addresses);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again later",
        });
    }
}