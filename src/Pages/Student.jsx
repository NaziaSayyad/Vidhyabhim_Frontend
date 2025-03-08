import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getstudents } from "../Redux/Student/actions";

export const Student = () =>{
    const st = useSelector((store) => store.student);
    const dispatch = useDispatch();

console.log(st,"data")
    useEffect(() =>{
        dispatch(getstudents());
    }, [])
    return (
        <>
        <div> 
            <h1> Students page </h1>
        </div>
        </>
    )
}