'use client'
import { useEffect, useState } from "react";
import { fetchData } from "./actions/fetch-data";

const Test = () => {
    const [dat , setDat]  = useState<any>(null)
    useEffect(() => {
 const data =       fetchData();
 setDat(data)
    },[])
    return <>
    <p>Test Component result: {dat}</p>
    </>
}
export default Test;