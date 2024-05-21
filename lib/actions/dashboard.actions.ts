"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { handleError } from "../utils";
import { auth } from "@clerk/nextjs";
import { getUserById } from "./user.actions";


export async function getCardsInformation(){
    try {
        
        console.log(Date(), '\n', "CALLING GET CARDS INFORMATION", '\n');
        const { userId } = auth();
        //console.log("QUD",userId)
        if(userId){
            const user = await prisma.users.findUnique({
                where:{
                    clerkId:userId
                }
            });
            const retObj =[{}, {}, {}, {}]
            const subjs = await prisma.exercisesDone.findMany({
                where:{
                    userId:user?.idUser
                },
                include:{
                    Subjects:true
                },
                distinct:['subjectId']
            });
            const args = await prisma.exercisesDone.findMany({
                where:{
                    userId:user?.idUser
                },
                include:{
                    Subjects:true
                },
                distinct:['argument']
            });
            const allDone = await prisma.exercisesDone.findMany({
                where:{
                    userId:user?.idUser
                },
                
            });
            let totalQuests = 0;
            let correctAnswers = 0;
            for(let i = 0; i <allDone.length;i++){
                let quests = JSON.parse(allDone[i]?.questions)
                totalQuests+=quests.length
            }
            for(let i = 0; i <allDone.length;i++){
                let quests = JSON.parse(allDone[i]?.questions)
                let ans = JSON.parse(allDone[i]?.answers)
                quests.forEach((que:any,ind:number)=>{
                    if(que.answerOk === ans[ind].answer_picked) {correctAnswers++}
                })
               
            }

            

            //console.log("DONE",args)
            retObj[0].title = "Materie Approfondite";
            retObj[0].icon = "";
            retObj[0].val = subjs.length;
            retObj[0].desc = "qualcosaaas";
            retObj[1].title = "Argomenti Approcciati";
            retObj[1].icon = "";
            retObj[1].val = args.length;
            retObj[1].desc = "qualcos aaas args";
            retObj[2].title = "Domande totali";
            retObj[2].icon = "";
            retObj[2].val = totalQuests;
            retObj[2].desc = "qualcos aaas args";
            retObj[3].title = "Domande corrette";
            retObj[3].icon = "";
            retObj[3].val = correctAnswers;
            retObj[3].desc = "qualcos aaas args";

            // setTimeout(()=>
            //     {
            //         console.log("STO kAZZO")
            //     }
            // ,13000)
            revalidatePath('/dashboard')
            return JSON.parse(JSON.stringify(retObj))
            
        }
       
    } catch (error) {
        console.log(Date(), '\n', "ERROR CALLING GET CARDS INFORMATION", '\n');
        handleError(error);
    }
}



export async function getTableInformation () {
    try {
        
        console.log(Date(), '\n', "CALLING GET TABLE INFORMATION", '\n');
        const { userId } = auth();
        //console.log("QUD",userId)
        if(userId){
            const user = await prisma.users.findUnique({
                where:{
                    clerkId:userId
                }
            });
            const allDone = await prisma.exercisesDone.findMany({
                where:{
                    userId:user?.idUser
                },
                include:{
                    Subjects:true
                },
                
            });
            let retObj = [];
            for(let i = 0; i < allDone.length;i++ ){
                let score = 0;
                let quests = JSON.parse(allDone[i].questions);
                let answers = JSON.parse(allDone[i].answers)
                quests.forEach((que,ind)=>{
                    if(que.answerOk === answers[ind]?.answer_picked){score++}
                })
                let obj :any= {}
                obj.type='Quiz';
                obj.subject=allDone[i].Subjects?.name;
                obj.argument = allDone[i].argument;
                obj.state=`${(score*100)/quests.length}%`
                //(score*100)/quests.length,' %';
                obj.result=`${score}/${quests.length}`;
                obj.date=allDone[i].date;
                retObj.push(obj);
                obj={}
                score=0
                
            }
            // allDone.forEach((el)=>{
            //     let obj = {
            //         type:'Esercitazione',
            //         subject:el.Subjects?.name,
            //         state:'some',
            //         result:'ok',
            //         date:el.date
            //     }
            //     retObj.push(obj);
            //     obj={
            //         type:'',
            //         subject:"",
            //         state:'',
            //         result:'',
            //         date:null
            //     };
            // })

            await wait(3000)
            //revalidatePath('/dashboard')
            return JSON.parse(JSON.stringify(retObj))
            
        }
       
    } catch (error) {
        console.log(Date(), '\n', "ERROR CALLING GET TABLE INFORMATION", '\n');
        handleError(error);
    }
}


export async function wait (ms:number) {
    return new Promise(resolve=>setTimeout(resolve,ms))
}