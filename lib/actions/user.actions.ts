"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

// import User from "../database_old/models/user.model";
// import { connectToDatabase } from "../database_old/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    console.log("AJUNGE AICI???")
    //await connectToDatabase();

    // const newUser = await prisma.Users.create(user);
    const newUser = await prisma.users.create({
      clerkId:user.clerkId,
      email:user.email,
      username:user.username,
      photo:user.photo,
      firstName:user.firstName,
      lastName:user.lastName,
      //planId:user.planId,
      //creditBalance:user.cred
    })

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    //await connectToDatabase();

    const user = await prisma.users.findFirst({
      where:{ 
        clerkId: userId 
      }
    });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
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
// export async function updateCredits(userId: string, creditFee: number) {
//   try {
//     //await connectToDatabase();

//     // const updatedUserCredits = await User.findOneAndUpdate(
//     //   { _id: userId },
//     //   { $inc: { creditBalance: creditFee }},
//     //   { new: true }
//     // )

//     // if(!updatedUserCredits) throw new Error("User credits update failed");

//     //return JSON.parse(JSON.stringify(updatedUserCredits));
//   } catch (error) {
//     handleError(error);
//   }
// }