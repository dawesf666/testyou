"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { handleError } from "../utils";
import {openai } from "../openai";
import { OpenAIStream, StreamingTextResponse } from 'ai'


export async function getAllQuestionByArgument(arg: string,num:string) {
    try {
        console.log("arg original",arg)
        console.log("arg replaced",arg.replaceAll("%20"," ").replaceAll("%2C",",").replaceAll("%C3%A0","à").replaceAll("%E2%80%93","-"))
        const questions = await prisma.matContents.findMany({
            where:{
                argument:arg.replaceAll("%20"," ").replaceAll("%2C",",").replaceAll("%C3%A0","à").replaceAll("%E2%80%93","-")
            },
            take:Number(num)
        })
        //console.log(questions)
        return JSON.parse(JSON.stringify(questions));
    } catch (error) {
        handleError(error);
    }
};


export async function callAIVerification(question:string,answers:string){
    try {
      console.log(new Date()," ","Call AI Verification Function")

        console.log("Question: ",question)
        //console.log("Answers: ",JSON.parse(answers))
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            temperature: 0,
            //stream: true,
            messages:[
                {
                    role:"system",
                    content:"Use the following pieces of context to answer the users question "+`${question}`+`choosing between these answers ${JSON.parse(answers).map((el:any)=>`${el.ans} |`)} and giving the explanations.`
                },
            
            ]
        });
        return response.choices[0].message.content;
    } catch (error) {
        handleError(error);
    }
}

export async function saveAIResponse(idQuest:number,explain:any) {
    try {
        let update = await prisma.matContents.update({
            data:{
                explanation:explain
            },where:{
                idMatContent:idQuest
            }
        });
        return
    } catch (error) {
        return
    }
}

export async function saveStudentTest(obj:any,){
    try {
      console.log(new Date(),"\n","CALL SAVE ")
        let score = 0;
        console.log("SAVE OBJECT: \n",obj);
        obj.questions.forEach((que:any,ind:number)=>{
            if(que.answerOk===obj.answers[ind].answer_picked){
                score++;
            }
        });
        const user = await prisma.users.findUnique({where:{
            clerkId:obj.user
        }})
        const save = await prisma.exercisesDone.create({
            data:{
                questions:JSON.stringify(obj.questions),
                answers:JSON.stringify(obj.answers),
                argument:obj.argument,
                score:score,
                date: new Date(),
                userId:user?.idUser,
                subjectId:obj.subject,
                courseId:obj.course
            }
        })
       
        //console.log("Answers: ",JSON.parse(answers))
       
        return score;
    } catch (error) {
        handleError(error);
    }
}