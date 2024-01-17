import express from 'express';
const router = express.Router();
import { getSecrets, getSecretById } from "../controllers/secretController.js"
import { protect } from "../middleware/authMiddleware.js"

router.route('/').get(protect,getSecrets);
router.route('/:id').get(protect,getSecretById);


export default router;