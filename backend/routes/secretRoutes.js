import express from 'express';
const router = express.Router();
import { getSecrets, getSecretById, createSecret, getSecretByUserId, updateSecret } from "../controllers/secretController.js"
import { protect } from "../middleware/authMiddleware.js"
import { checkSecret } from '../middleware/secretMiddleware.js';

router.route('/').get(protect,getSecrets);
router.patch('/update', protect, updateSecret)
router.get('/finduser',protect, getSecretByUserId);
router.route('/:id').get(protect,getSecretById);
router.route('/create').post(protect,checkSecret,createSecret);


export default router;