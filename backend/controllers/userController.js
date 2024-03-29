import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
    const{email,password}=req.body;

    const user=await User.findOne({email})

    if(user && (await user.matchPassword(password))){
    
        generateToken(res,user._id)


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
    const {email,password}=req.body;

    const userExists=await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const user=await User.create({
        email,
        password
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id:    user._id,
            email:user.email,
        })
    }else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})


const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0),
    })
    res.status(200).json({message:"Logged out successfully"});
})



const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
})



const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
})


export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }