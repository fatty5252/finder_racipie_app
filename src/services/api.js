import axios from "axios";
import { API_URL} from "../constant/constant.js"



export const getRacipes = async(searchQuery)=>{
    try{ 
        let response = await axios.get(`${API_URL}/search?q=${searchQuery}`)
        return response.data;
        console.log("response.data==>", response.data);
        
    }
    catch(err){
       console.log("err while calling==>", err);
       return err.response;
    }
}

export const getRacipe = async(searchQuery)=>{
    try{ 
        let response = await axios.get(`${API_URL}/get?rId=${searchQuery}`)
        return response.data;
        console.log("response.data==>", response.data);
        
    }
    catch(err){
       console.log("err while calling==>", err);
       return err.response;
    }
}