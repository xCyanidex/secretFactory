import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import Secret from '../models/secretModel.js';

const checkSecret = asyncHandler(async(req,res,next)=>{
    const cookie = req.cookies;
    const token = cookie['jwt'];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = decoded.userId;
    const secretFound = await Secret.find({ user });
    if(!secretFound){
    next();
    }else {
        res.status(401);
        throw new Error('Secret Found by this user.');
    }
})
export { checkSecret };