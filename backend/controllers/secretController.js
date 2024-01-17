import asyncHandler from '../middleware/asyncHandler.js';
import Secret from  "../models/secretModel.js";

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


export {getSecretById,getSecrets};