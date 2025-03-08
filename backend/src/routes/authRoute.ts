import express from 'express'
import { registerUser } from '../controllers/authController'

const router = express.Router()

router.post('/signin',registerUser)




export default router