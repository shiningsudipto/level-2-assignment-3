import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'
import { bookingController } from './booking.controller'

const router = express.Router()
// booking creating route
router.post('/', auth(USER_ROLE.user), bookingController.createBooking)

export const BookingsRoutes = router
