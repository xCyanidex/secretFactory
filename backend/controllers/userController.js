import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async (req, res) => {
    const{email,password}=req.body;

    const user=await User.findOne({email})

    if(user && (await user.matchPassword(password))){

        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
            expiresIn:'30d'
        })
        //Set JWT as HTTP-Only cookie
        res.cookie('jwt',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV!=='development',
            sameSite:'strict',
            maxAge:30*24*60*60*1000, //30 Days
        })

        res.json({
            _id:user._id,
            email:user.email,
        })
    }else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
 res.send('auth user');
})


const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
})


const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
})



const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
})



const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
})


export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }