import express from 'express'
import { serviceControllers } from './service.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import { ServiceValidations } from './service.validation'

const router = express.Router()
// service creating route
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.createServiceValidationSchema),
  serviceControllers.createService,
)
router.get('/:id', serviceControllers.getSingleService)
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.updateServiceValidationSchema),
  serviceControllers.updateService,
)
router.delete('/:id', auth(USER_ROLE.admin), serviceControllers.deleteService)
router.get('/', serviceControllers.getAllServices)

export const ServiceRoutes = router
