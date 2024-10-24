import React,{useState} from "react"

const userDb = [];

export const updateUserDataBase = (method,userData) => {
    if(method === "add"){
        userDb.append(userData)
    }
}


