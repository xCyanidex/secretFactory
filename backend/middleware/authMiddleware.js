import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from "../models/userModel.js";

//Protect Routes
const protect=asyncHandler(async(req,res,next)=>{
    let token;

    token=req.cookies.jwt;

    if(token){
     
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
    }

    }else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
})


export {protect};