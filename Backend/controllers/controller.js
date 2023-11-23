import dbconnect from "../Database/conn.js"
import database, { CssAnswers, CssQuestion, HtmlAnswers, HtmlQuestion, ReactQuestion, ReactAnswers, answers, JavaScriptQuestion, JavaScriptAnswers, NodeQuestion, NodeAnswers, CppQuestion, CppAnswers, CQuestion, CAnswers, JavaAnswers, JavaQuestion, MongodbQuestion, mongodbAnswers, SqlQuestion, SqlAnswers, DaaQuestions, DaaAnswers, DataSturctureQuestions, DataStructureAnswers, ComputerNetworkingQuestions, ComputerNetworkingAnswers, WebTechnologyAnswers, WebTechnologyQuestions, PythonQuestions, PythonAnswers, DataMiningQuestions, DataMiningAnswers, DataWarehouseQuestions, DataWarehouseAnswers, SoftwareEngineeringQuestions, SoftwareEngineeringAnswers, PhpQuestions, PhpAnswers, DBMSQuestions, DBMSAnswers, CompilerDesignQuestions, CompilerDesignAnswers, ComputerOrganizationQuestions, ComputerOrganizationAnswers, VueJsQuestions, VueJsAnswers, AngularJsQuestions, AngularJsAnswers, NextJsQuestions, NextJsAnswers } from "../Database/data.js"
import { resultConn } from "../Database/conn.js";





export async function getQuestions(req,resp){
     try {
         let data= await dbconnect();
          data = await data.find({}).toArray();
          resp.json(data)
     } catch (error) {
        console.log(error)
     }
}

export async function postQuestion(req,resp){
    try {
         let data = await dbconnect();
         data = await data.insertMany([{question:database,answers},
            {question:ReactQuestion,answers:ReactAnswers},
            {question:HtmlQuestion,answers:HtmlAnswers},
             {question:CssQuestion,answers:CssAnswers},
             {question:JavaScriptQuestion,answers:JavaScriptAnswers},
             {question:NodeQuestion,answers:NodeAnswers},
             {question:CppQuestion,answers:CppAnswers},
             {question:CQuestion,answers:CAnswers},
             {question:JavaQuestion,answers:JavaAnswers},
             {question:MongodbQuestion,answers:mongodbAnswers},
             {question:SqlQuestion,answers:SqlAnswers},
             {question:DaaQuestions,answers:DaaAnswers},
             {question:DataSturctureQuestions,answers:DataStructureAnswers},
             {question:ComputerNetworkingQuestions,answers:ComputerNetworkingAnswers},
             {question:WebTechnologyQuestions,answers:WebTechnologyAnswers},
             {question:PythonQuestions,answers:PythonAnswers},
             {question:DataMiningQuestions,answers:DataMiningAnswers},
             {question:DataWarehouseQuestions,answers:DataWarehouseAnswers},
             {question:SoftwareEngineeringQuestions,answers:SoftwareEngineeringAnswers},
             {question:PhpQuestions,answers:PhpAnswers},
             {question:DBMSQuestions,answers:DBMSAnswers},
             {question:CompilerDesignQuestions,answers:CompilerDesignAnswers},
             {question:ComputerOrganizationQuestions,answers:ComputerOrganizationAnswers},
             {question:VueJsQuestions,answers:VueJsAnswers},
             {question:AngularJsQuestions,answers:AngularJsAnswers},
             {question:NextJsQuestions,answers:NextJsAnswers},
         ]);
            resp.json(data)
    } catch (error) {
       console.log(error)
    }
}
export async function deleteQuestion(req,resp){
    try {
       let data = await dbconnect();
       data = await data.drop();
       resp.json("delete questions")
    } catch (error) {
       console.log(error)
    }
}
export async function getResult(req,resp){
    try {
            let data = await resultConn();
            data = await data.find({}).sort({points:-1}).toArray()
            resp.json(data)
    } catch (error) {
       console.log(error)
    }
}

export async function postResult(req,resp){
    try {
         let data= await resultConn();
            const { username,result,attempts,points,achived}=req.body;
            if(!username && !result) throw new Error('data not found');
             data = await data.insertOne({ username,result,attempts,points,achived})
            resp.json("data send")
    } catch (error) {
       console.log(error)
    }
}
export async function deleteResult(req,resp){
    try {
         let data = await resultConn();
         data = await data.drop();
         resp.json(data)
    } catch (error) {
       console.log(error)
    }
}