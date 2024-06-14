import express from 'express'
import { serviceControllers } from './service.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()
// service creating route
router.post('/', auth(USER_ROLE.admin), serviceControllers.createService)
router.get('/:id', serviceControllers.getSingleService)
router.patch('/:id', serviceControllers.updateService)
router.get('/', serviceControllers.getAllServices)

export const ServiceRoutes = router
