import express from 'express'
import { registerController } from '../controllers/users.controllers.js'

let router = express.Router()


router.post('/register', registerController)
router.post('/me', async(req, res) => {
    const token = req.cookies.token

    console.log("token from cookies",token)
})

export default router