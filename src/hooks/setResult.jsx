import * as Action from "../Redux/result_reducer"
import { postServerData } from "../helper/helper"



export const pushAnswer =(index) => async(dispatch)=>{
    try {
          await  dispatch(Action.pushResultAction(index))
    } catch (error) {
        console.log(error)
    }
} 

export const updateAnswer=(index)=> async(dispatch)=>{
    try {
         dispatch(Action.updateResult(index));
        
    } catch (error) {
        console.log(error)
    }
}

export const usePublicResult = (resultData)=>{
    const {result,username}=resultData;
    
    (async()=>{
        try {
            if(!username) throw new Error("could not get result and name");    
            await postServerData('http://localhost:5000/api/result',resultData,data => data)
          
        } catch (error) {
            console.log(error);
            
        }
    })();

}