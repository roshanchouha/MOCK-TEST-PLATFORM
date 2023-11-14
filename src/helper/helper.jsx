import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'
 
 
 
export const attempt_number=(result)=>{
    return result.filter(r => r !== -1).length;
}

export const earnpoint=(result,answers,points)=>{
    return result.map((element,index)=> element === answers[index]).filter(i => i).map(index => points).reduce((prev,curr)=> prev + curr,0)
}
export const correctAnswer=(result,answers,zero)=>{
    return result.map((element,index)=> element === answers[index]).filter(i => i)
}
export const flagpoint=(totalPoint,earnpoint)=>{
    return (totalPoint*50/100 < earnpoint)

}

export const CheckUserExits=({children})=>{
   
    const auth = useSelector(state => state.result.userID)
    return auth? children : <Navigate to={'/'}></Navigate>
}
export async function getServerData(url,callback){
    const  data =  await (await axios.get(url))?.data;
    return callback ? callback(data):data

}

export async function  postServerData(url,result,callback){
    const  data =  await (await axios.post(url,result))?.data;
    return callback?callback(data):data

}
 