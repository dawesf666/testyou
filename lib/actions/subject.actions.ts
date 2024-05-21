"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
//export const dynamic = "force-dynamic";
// import User from "../database_old/models/user.model";
// import { connectToDatabase } from "../database_old/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createSubject(user: CreateUserParams) {
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
export async function getSubjectById(sub: number) {
    try {
        //await connectToDatabase();
        console.log("@@@@@@@@@@@@@@",sub)
        const subject = await prisma.subjects.findUnique({
            where: {
                idSubjects: Number(sub),
            },
            include:{
                MatContents:{
                    distinct: ['argument'],
                }
            }
        });
        let retObj ={
            subject:{}||null,
            arguments:[]||null,
        };
        retObj.subject=subject;
        for(let i =0;i < subject?.MatContents?.length;i++){
            
            let total = await prisma.matContents.count({
                where:{
                    argument:subject?.MatContents[i].argument
                }
            })
            let done = await prisma.exercisesDone.findMany({
                where:{
                    subjectId:Number(sub),
                    argument:subject?.MatContents[i].argument
                }
            });

            
            //console.log("DONE",done)
            let arg ={
                argument:subject?.MatContents[i].argument,
                total:total,
                done:done
            }
           
            retObj.arguments.push(arg);
            arg={
                argument:'',
                total:0,
                done:[],
            }
        }
        //console.log("QUESTOOOO",retObj)
        //if (!sub) throw new Error("User not found");
        //console.log("SUBJECT IN ACTIONS",subject)
        return JSON.parse(JSON.stringify(retObj));
    } catch (error) {
        handleError(error);
    }
}

// READ ALL
export async function getAllSubjects({ limit = 10, page = 1, searchQuery = '' }: {
    limit: number;
    page: number;
    searchQuery?: string | string[]|undefined ;
  }) {
    try {
        //await connectToDatabase();
        let subjects:Subject[] = [];
        if(!searchQuery){
            subjects = await prisma.subjects.findMany({
                orderBy: [
                    {
                        name:'asc'
                    }
                ],
                include:{
                    MatContents:{
                        distinct: ['argument'],
                    },
                    ExercisesDone:true
                }
            });
            for(let i = 0; i <subjects.length;i++){
                //console.log("entra",el)
                let all = await prisma.matContents.findMany({
                    where:{
                        idSubject:subjects[i].idSubjects
                    }
                });
                subjects[i].allQuestions = all.length;
                console.log("MAT: ",subjects[i].name,"       num: ",all.length)
            }
            return JSON.parse(JSON.stringify(subjects));
        }else{
            subjects = await prisma.subjects.findMany({
                orderBy: [
                    {
                        name:'asc'
                    }
                ],
                where:{
                    name:{
                        contains:`${searchQuery}`
                    }
                },
                include:{
                    MatContents:{
                        distinct: ['argument'],
                    },
                    ExercisesDone:true
                }
            });
            //subjects.forEach(async(el)=>{
            for(let i = 0; i <subjects.length;i++){
                //console.log("entra",el)
                let all = await prisma.matContents.findMany({
                    where:{
                        idSubject:subjects[i].idSubjects
                    }
                });
                subjects[i].allQuestions = all.length;
            }
            
            //let done = await prisma.exercisesDone.findMany()
            return JSON.parse(JSON.stringify(subjects));
        }
        // const subjects = await prisma.subjects.findMany({
        //     orderBy: [
        //         {
        //             name:'asc'
        //         }
        //     ],
        // });

        //if (!subjects) throw new Error("Subjects not found");

        //console.log("subjects", subjects);
        // return JSON.parse(JSON.stringify(subjects));
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
        //await connectToDatabase();
        // const updatedUserCredits = await User.findOneAndUpdate(
        //   { _id: userId },
        //   { $inc: { creditBalance: creditFee }},
        //   { new: true }
        // )
        // if(!updatedUserCredits) throw new Error("User credits update failed");
        //return JSON.parse(JSON.stringify(updatedUserCredits));
    } catch (error) {
        handleError(error);
    }
}
