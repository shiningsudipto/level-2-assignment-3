import express from 'express'
import { slotController } from './slot.controller'

const router = express.Router()
// service creating route
router.post('/slots', slotController.createSlot)

export const SlotRoutes = router
