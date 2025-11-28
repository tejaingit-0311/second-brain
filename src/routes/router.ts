import brcypt from "bcrypt";
import { Router } from "express";
import { UserModel } from "../db/db.js";
export const router = Router();

//signup:
router.post('/api/v1/signup', async(req, res)=>{
    try{
        const { username, password } = req.body;
        //zod validation:

        //check for empty values:
        if (username === "" || password === "")
        return res.status(400).json({
            success: false,
            code: "EMPTY_FIELDS",
            message: "Please provide username or password",
        });
        try{
            //hash the password:
            const hashedPassword = await brcypt.hash(password, 8);
            // console.log(hashedPassword);
            //create in DB:
            await UserModel.create({
                username: username,
                password: hashedPassword
            })
            res.status(201).send({success: true, code: "USER_REGISTERED", message: "User Registered Successfully"})
        }catch(error){
            res.status(404).send({sucess: false, code: "USER_NOT_FOUND", message: "User Not Found"});
        }
    }catch(error){
        console.error(error);
        res.status(411).send({success: false, code: "BAD_REQUEST", message: "Invalid request"})
    }
    
    
})

//signin:
router.post('/api/v1/signin',(req,res)=>{

})

//add new content:
router.post('/api/v1/content',(req,res)=>{

})

//get content:
router.get('/api/v1/content',(req,res)=>{

})

//delete content:
router.delete('/api/v1/content',(req,res)=>{

})

//create shareable link: -> share:true | false
router.post('/api/v1/brain/share',(req,res)=>{

})

//fetch another user's shared brain content:
router.get('/api/v1/brain/:shareLink',(req,res)=>{

})
