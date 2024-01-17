import express from 'express';
const router = express.Router();
import { getSecrets, getSecretById } from "../controllers/secretController.js"


router.route('/').get(getSecrets);
router.route('/:id').get(getSecretById);


export default router;