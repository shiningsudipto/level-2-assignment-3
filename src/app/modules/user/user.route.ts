import express from 'express'
import { userControllers } from './user.controller'

const router = express.Router()
// user creating route
router.post('/signup', userControllers.createUser)

export const UserRoutes = router
