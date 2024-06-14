import express from 'express'
import { slotController } from './slot.controller'

const router = express.Router()
// service creating route
router.post('/', slotController.createSlot)
router.get('/availability', slotController.getAvailableSlots)

export const SlotRoutes = router
