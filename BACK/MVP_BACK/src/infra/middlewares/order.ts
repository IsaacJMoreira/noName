import { Request,Response,NextFunction } from "express";
const {validate, Joi} = require ("express-validation");

const validateOrder = validate ({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        itens: Joi.string().required(),
        //orderName :Joi.string().min(3).max(20).required() "ideia para add no fluxo" 
    })
})

const validateCreate = validate({ 
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        itens: Joi.strig().required()
    })
})


const validateUpdate = validate ({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        itens: Joi.string().required()
    })
})



const middlewareOrder = {
    findall: async (req:Request,res:Response,next:NextFunction) =>{
        await validateOrder(req,res,next)
    },
    create: async (req:Request,res:Response,next:NextFunction) =>{
        await validateCreate(req,res,next)
    },
    update: async (req:Request,res:Response,next:NextFunction) =>{
        await validateUpdate(req,res,next)
    }
    
}


export default middlewareOrder; 