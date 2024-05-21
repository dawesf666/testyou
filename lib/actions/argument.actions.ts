"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
//export const dynamic = "force-dynamic";
// import User from "../database_old/models/user.model";
// import { connectToDatabase } from "../database_old/mongoose";
import { handleError } from "../utils";
import { NextResponse } from "next/server";

// CREATE


export async function createArgument(user: CreateUserParams) {
    try {
        //console.log("AJUNGE AICI???",prisma.users)
        //await connectToDatabase();

        // const newUser = await prisma.Users.create(user);
        const newUser = await prisma.users.create({
            data: {
                clerkId: user.clerkId,
                email: user.email,
                username: user.username,
                photo: user.photo,
                firstName: user.firstName,
                lastName: user.lastName,
            },

            //planId:user.planId,
            //creditBalance:user.cred
        });

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}

// READ
export async function getArgumentById(userId: string) {
    try {
        //await connectToDatabase();

        const user = await prisma.users.findFirst({
            where: {
                clerkId: userId,
            },
        });

        if (!user) throw new Error("User not found");

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}

// READ ALL
export async function getAllArguments({ limit = 10, page = 1, searchQuery = '' }: {
    limit: number;
    page: number;
    searchQuery?: string | string[]|undefined ;
  }) {
    //export async function getAllArguments() {
    try {
        console.log(searchQuery)
        let args=[];
        if(!searchQuery){
            args = await prisma.matContents.findMany({
                distinct: ['argument'],
                take:limit
            });
            const retArgs : String[] = [];
            args.forEach((arg)=>{
                if(arg.argument!==null) retArgs.push(arg.argument)
            })
            const final : Object[] = []
            for (let i = 0; i <args.length;i++){
                let sub = await prisma.subjects.findUnique({where:{idSubjects:args[i].idSubject}})
                let cnt = await prisma.matContents.count({where:{argument:args[i].argument}})
                let obj = {
                    argument:args[i].argument,
                    subject:sub,
                    total:cnt

                }
                final.push(obj)
                obj={
                    argument:"",
                    subject:null,
                    total:0
                }
            }
            //console.log("FINAL",final.length)
            return JSON.parse(JSON.stringify(final));

        }else{
            const retArgs : String[] = [];
            args = await prisma.matContents.findMany({
                distinct: ['argument'],

                where:{
                    argument:{
                        contains:`${searchQuery}`
                    }
                }
                //take:limit
            });            
            args.forEach((arg)=>{
                if(arg.argument!==null) retArgs.push(arg.argument)
            })
            const final : Object[] = []
            for (let i = 0; i <args.length;i++){
                let sub = await prisma.subjects.findUnique({where:{idSubjects:args[i].idSubject}})
                let cnt = await prisma.matContents.count({where:{argument:args[i].argument}})
                let obj = {
                    argument:args[i].argument,
                    subject:sub,
                    total:cnt

                }
                final.push(obj)
                obj={
                    argument:"",
                    subject:null,
                    total:0
                }
            }
            //console.log("FINAL",final)
            return JSON.parse(JSON.stringify(final));
            //return JSON.parse(JSON.stringify(retArgs));
            //return NextResponse.json(retArgs);
        }
       
        //return courses
    } catch (error) {
        handleError(error);
    }
}

// // UPDATE
// export async function updateUser(clerkId: string, user: UpdateUserParams) {
//   try {
//     //await connectToDatabase();

//     const updatedUser = await prisma.users.update({
//       where:{
//         clerkId:clerkId
//       },data:{user}
//     });

//     if (!updatedUser) throw new Error("User update failed");

//     return JSON.parse(JSON.stringify(updatedUser));
//   } catch (error) {
//     handleError(error);
//   }
// }

// // DELETE
// export async function deleteUser(clerkId: string) {
//   try {
//     //await connectToDatabase();

//     // Find user to delete
//     const userToDelete = await prisma.users.findOne({ clerkId });

//     if (!userToDelete) {
//       throw new Error("User not found");
//     }

//     // Delete user
//     const deletedUser = await prisma.users.destroy(userToDelete._id);
//     revalidatePath("/");

//     return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
//   } catch (error) {
//     handleError(error);
//   }
// }

// // USE CREDITS
export async function updateCredits(userId: number, creditFee: number) {
    try {
        const user = await prisma.users.findUnique({where:{idUser:userId}});
        if(!user){
            return JSON.parse(JSON.stringify({message:"User not found!"}));
        }
        const updatedUserCredits = await prisma.users.update({
            data:{
                creditBalance:creditFee
            },where:{idUser:userId}
        })
        if(!updatedUserCredits) throw new Error("User credits update failed");
        return JSON.parse(JSON.stringify(updatedUserCredits));
       
    } catch (error) {
        handleError(error);
    }
}
