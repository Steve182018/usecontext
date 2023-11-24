import React from "react";
import { useContext } from "react";
import { GlobalInfo } from "../App";
import Super_Child from "./super_child";
const Child = () =>{

    const {AppColor,bgcol} = useContext(GlobalInfo)
    console.log(AppColor)

    return(
        <>
            <h1 style={{color:AppColor}}>Child Component</h1>
            <Super_Child/>
        </>
    )
}

export default Child;