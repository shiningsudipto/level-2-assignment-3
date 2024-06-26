import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { slotServices } from './slot.service'
import { handleNoDataResponse } from '../../errors/handleNoData'

const createSlot = catchAsync(async (req, res) => {
  const slotData = req.body
  const result = await slotServices.createSlotIntoDB(slotData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slot created successfully!',
    data: result,
  })
})
const getAvailableSlots = catchAsync(async (req, res) => {
  const result = await slotServices.getAllAvailableSlotsFromDB()
  if (result?.length === 0) {
    return handleNoDataResponse(res)
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  })
})

export const slotController = {
  createSlot,
  getAvailableSlots,
}
