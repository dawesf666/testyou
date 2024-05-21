import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

import  arr from "./argomenti.json"
//import { MatContents } from "@prisma/client";

type PrevQuestStruct = {
    idMatCotents:number
    bigQuestion:string,
    question:string,
    url_question:string,
    answers:string,
    answerOk:string,
    explanation:string,
    which_file:string,
    argument:string,
    Courses_has_Subjects_Courses_idCourse:number,
    Courses_has_Subjects_Subjects_idSubject:number
}





export async function GET(rep:Request) {
    try {
        console.log("ARRIVAAAAAA")
        let fake = [
            {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            },
            {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            },
            {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            },
            {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            },
            {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            },
            {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }, {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }, {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }, {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }, {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }, {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }, {
                //idMatContent:1,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:1
            },
            {
                //idMatContent:2,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:2
            },
            {
                //idMatContent:3,
                bigQuestion:'aaaa',
                question:'aaaa',
                urlQuestion:'aaaa',
                answers:'aaaa',
                answerOk:'aaaa',
                explanation:'aaaa',
                difficult:'aaaa',
                argument:'aaaa',
                idCourse:63,
                idSubject:3
            }
        ]
        const arrayDiPrevQuestStruct: PrevQuestStruct[] =arr;
        const finalArr = [];
        for(let i = 0; i < arrayDiPrevQuestStruct.length;i++){
            let obj = {
                bigQuestion:'',
                question:'',
                urlQuestion:'',
                answers:'',
                answerOk:'',
                explanation:'',
                difficult:'',
                argument:'',
                idCourse:0,
                idSubject:0
            }
            obj.bigQuestion = arrayDiPrevQuestStruct[i].bigQuestion;
            obj.question=arrayDiPrevQuestStruct[i].question;
            obj.urlQuestion=arrayDiPrevQuestStruct[i].url_question;
            obj.answers=arrayDiPrevQuestStruct[i].answers;
            obj.answerOk=arrayDiPrevQuestStruct[i].answerOk;
            obj.explanation="";
            obj.difficult=arrayDiPrevQuestStruct[i].which_file;
            obj.argument=arrayDiPrevQuestStruct[i].argument;
            obj.idCourse=Number(arrayDiPrevQuestStruct[i].Courses_has_Subjects_Courses_idCourse);
            obj.idSubject=Number(arrayDiPrevQuestStruct[i].Courses_has_Subjects_Subjects_idSubject);
            finalArr.push(obj)
            obj = {
                bigQuestion:'',
                question:'',
                urlQuestion:'',
                answers:'',
                answerOk:'',
                explanation:'',
                difficult:'',
                argument:'',
                idCourse:0,
                idSubject:0
            }
        }

        //let uno = finalArr.filter(el=>el.idSubject===1)
        let uno = finalArr.filter(el=>el.idSubject===13)
        //console.log(uno.length)
        let add = await prisma.matContents.createMany({data:uno})
        // uno.forEach(async (el)=>{
        //     let add = await prisma.matContents.create({
        //         data:el
        //     })
        //     //prisma.$disconnect()
        // })
        //console.log("PRISMA RESULT",add)
        // await prisma.matContents.create({data:{
        //     idMatContent:1,
        //         bigQuestion:'aaaa',
        //         question:'aaaa',
        //         urlQuestion:'aaaa',
        //         answers:'aaaa',
        //         answerOk:'aaaa',
        //         explanation:'aaaa',
        //         difficult:'aaaa',
        //         argument:'aaaa',
        //         idCourse:63,
        //         idSubject:1
        // }})
        
        return NextResponse.json({ message: "OK", done:13 });
    } catch (error) {
        return NextResponse.json({ message: "KO", error: error });
    }
    


}