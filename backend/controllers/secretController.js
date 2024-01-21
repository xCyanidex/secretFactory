import asyncHandler from '../middleware/asyncHandler.js';
import Secret from  "../models/secretModel.js";
import jwt from 'jsonwebtoken';

const getSecrets= asyncHandler(async (req,res)=>{ 
    const secrets = await Secret.find();
    res.json(secrets);
})


const getSecretById = asyncHandler(async (req, res) => {
    const secret = await Secret.findById(req.params.id);
    if (secret) {
        return res.json(secret);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
})

const createSecret=asyncHandler(async (req,res)=>{
    const cookie=req.cookies;
    const token=cookie['jwt'];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = decoded.userId;
    const {title,description}=req.body;
    const secret = await Secret.create({
        title,
        description,
        user
    })
    if (secret) {
        res.status(201).json({
            title: secret.title,
            description: secret.description,
            user: secret.user,
        })
    } else {
        res.status(400);
        throw new Error('Invalid secret data');
    }
})

const getSecretByUserId=asyncHandler( async(req,res)=>{
    const cookie = req.cookies;
    const token = cookie['jwt'];
    const decoded =await jwt.verify(token, process.env.JWT_SECRET);
    const user = decoded.userId;
    const secretFound = await Secret.findOne({ user });
    if (secretFound) {
     res.status(200).json({
         title: secretFound.title,
         description: secretFound.description,
     })
    }else {
        res.status(404);
        throw new Error('Resource not found');
    }
})

const updateSecret=asyncHandler( async(req,res)=>{
    const {title,description}=req.body;
    const updateData={
        title,
        description
    }
    const cookie = req.cookies;
    const token = cookie['jwt'];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = decoded.userId;

    const secret = await Secret.updateOne({ user: user }, { $set: updateData })
    console.log(secret)
    if (secret) {
        res.status(201).json({
            message:"Update successful."
        })
    } else {
        res.status(400);
        throw new Error('Invalid secret data');
    }
})




export { getSecretById, getSecrets, createSecret, getSecretByUserId, updateSecret };