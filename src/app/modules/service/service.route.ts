import express from 'express'
import { serviceControllers } from './service.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()
// service creating route
router.post('/', auth(USER_ROLE.admin), serviceControllers.createService)

export const ServiceRoutes = router
