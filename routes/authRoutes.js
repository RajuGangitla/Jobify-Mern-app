import express from 'express'
const router = express.Router();
import rateLimiter from 'express-rate-limit';

import { register, login, updateUser } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
import testUser from '../middleware/testUser.js';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  });

router.route('/register').post(apiLimiter,register)
router.route('/login').post(apiLimiter,login)
router.route('/updateUser').patch(authenticateUser,testUser, updateUser)


export default router