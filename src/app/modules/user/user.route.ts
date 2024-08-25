import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'
import { userControllers } from './user.controller'

const router = express.Router()
// user routes
router.get('/my-bookings', auth(USER_ROLE.user), userControllers.getMyBookings)
router.get('/users', auth(USER_ROLE.admin), userControllers.getAllUser)
router.put(
  '/update-user/:id',
  auth(USER_ROLE.admin),
  userControllers.updateUser,
)

export const UserRoutes = router
