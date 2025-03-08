import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getmarksheet } from "../Redux/Marksheet/actions";

export const MarksheetPage = () =>{
    const marksheet = useSelector((store) => store.marksheet.marksheet);
    const dispatch = useDispatch();

    console.log(marksheet,"marksheet data");
    
    useEffect(() =>{
        dispatch(getmarksheet())
    }, [dispatch])

    return (
        <>
        <div> ALL marksheet DATA </div>
        </>
    )
}