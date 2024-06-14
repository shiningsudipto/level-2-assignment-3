import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'
import { userControllers } from './user.controller'

const router = express.Router()
// user routes
router.get('/my-bookings', auth(USER_ROLE.user), userControllers.getMyBookings)

export const UserRoutes = router
