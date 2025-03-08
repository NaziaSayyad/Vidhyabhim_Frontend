import axios from "axios"
import { GET_MARKSHEET } from "./actiontypes";

export const getmarksheet = () => async(dispatch) =>{
    try{
        let res = await axios.get(`https://vidhyabhim-backend.onrender.com/marksheet`);
        return dispatch({type : GET_MARKSHEET,  payload : res.data});
    }
    catch(err){
        console.log("error",err);
    }
}