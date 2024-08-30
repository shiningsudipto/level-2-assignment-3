import express from 'express'
import { slotController } from './slot.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import { SlotValidations } from './slot.validation'

const router = express.Router()

router.get('/availability', slotController.getAvailableSlots)
router.get('/all-slots', slotController.getAllSlots)
router.put(
  '/update-slot/:id',
  auth(USER_ROLE.admin),
  validateRequest(SlotValidations.updateSlotValidationSchema),
  slotController.updateSlot,
)

export const SlotRoutes = router
