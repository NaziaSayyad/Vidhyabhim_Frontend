import { GET_MARKSHEET } from "./actiontypes"

const intialstate = {
    marksheet : []
}

export const MarksheetReducer = (state = intialstate, {type, payload}) =>{
        switch(type){
            case GET_MARKSHEET : {
             return  {  ...state,
               marksheet: payload
              }
            }
            default :{
                return state;
            }
        }
       
}