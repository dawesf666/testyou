import { headers } from "next/headers";
import { NextResponse } from "next/server";
import User from "../../../lib/database_old/models/user.model";
import { connectToDatabase } from "../../../lib/database_old/mongoose";


export async function GET(rep:Request) {
    try {
        console.log("ARRIVAAAAAA")
        await connectToDatabase();
        const users = await User.find({});
        console.log("ALL USERS",users)
        return NextResponse.json({ message: "OK", users: users });
    } catch (error) {
        return NextResponse.json({ message: "KO", users: error });
    }
    


}