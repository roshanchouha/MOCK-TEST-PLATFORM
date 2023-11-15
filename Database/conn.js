import { MongoClient } from "mongodb";
const url = 'mongodb://0.0.0.0:27017'
const client = new MongoClient(url);

 async function dbconnect()
 {
     const  result = await client.connect();
     let db = result.db('Quiz')
     console.log('connect')
     return  db.collection('questions')  
 }
 async function resultConn()
 {
    const result = await client.connect();
    let db = result.db('Quiz')
    return  db.collection('answer')
 }
 
 export  default dbconnect;
 export {resultConn}
