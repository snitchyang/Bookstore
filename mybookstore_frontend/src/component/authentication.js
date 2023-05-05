import React from "react";
import {Navigate} from "react-router-dom";

export default function Authentication({user, children}){
    console.log(user)
    if(user !== 'null'){
        return children
    }
    else{
        return <Navigate to='/login'/>
    }
}