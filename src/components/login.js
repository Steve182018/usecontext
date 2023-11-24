import React from "react";
import { useContext } from "react";
import { LoginInfo } from "../App";

const Login = () => {

    const backdark = "black"
    const { darkbg,chg } = useContext(LoginInfo)
    return (
        <>
            <div style={{backgroundColor:chg}}>
                {/* <label>Name:</label> */}
                <input type="text" placeholder="Enter Your Name"></input><br /><br />
                {/* <label>Email:</label> */}
                <input type="email" placeholder="Enter Your Email"></input><br /><br />
            </div>
                <button onClick={()=>darkbg(chg)}>Dark Mode</button>
        </>
    )
}

export default Login