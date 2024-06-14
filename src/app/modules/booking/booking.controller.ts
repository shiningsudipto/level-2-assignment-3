import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { getUserInfoFromToken } from '../../utils/getUserInfoFromToken'
import { bookingServices } from './booking.service'

const createBooking = catchAsync(async (req, res) => {
  const token = req.headers.authorization
  const bookingData = req.body

  const { email } = getUserInfoFromToken(token as string)

  const result = await bookingServices.createBookingIntoDB(email, bookingData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slot created successfully!',
    data: result,
  })
})

export const bookingController = {
  createBooking,
}
