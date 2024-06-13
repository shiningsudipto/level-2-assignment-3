import express from 'express'
import { serviceControllers } from './service.controller'

const router = express.Router()
// service creating route
router.post('/', serviceControllers.createService)

export const ServiceRoutes = router
