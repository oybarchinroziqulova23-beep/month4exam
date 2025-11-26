import Schema from "express";
import { title } from "process";
import { type } from "os";
import { timeStamp } from "console";

const Movie = new Schema({
    title:{
        type:String,
        trim: true,
        require: true
    },
    description:{
        type: String,
        default: ""
    },
    language :{
        type: String,
        enum:["Russian","English","Uzbek"],
        trim: true,
        require: true
    },
    genre : {
        type: String,
        enum:["commedy","horror","documentary","cartoon"],
        trim: true,
        require: true
        
    },
    },
    {
        timeStamp: true
    }
);

export default Movie;