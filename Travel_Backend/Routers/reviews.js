
import express from 'express'
const router = express.Router()
import {createReview} from '../controllers/reviewController.js'
import { VerifyAdmin , Verifyuser } from '../Utils/verfyToken.js'

router.post('/:tourId'  , createReview)

export default router