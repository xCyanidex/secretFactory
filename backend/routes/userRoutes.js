import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js"


router.route('/').post(registerUser);
router.post('/logout',logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);



export default router;
