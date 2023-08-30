import {  Request, Response, NextFunction } from "express";
const {ValidationError} = require("express-validation");

module.exports = (
    error: any, 
    request: Request, 
    response: Response, 
    next: NextFunction) =>{

        if(error instanceof ValidationError){
            return response.status(error.statusCode).json(error);
        }
        
        return response. status(500).json(error);
    };