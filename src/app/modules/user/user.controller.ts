/* eslint-disable @typescript-eslint/no-explicit-any */
import { userServices } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { getUserInfoFromToken } from '../../utils/getUserInfoFromToken'
import { handleNoDataResponse } from '../../errors/handleNoData'

const createUser = catchAsync(async (req, res) => {
  const userData = req.body
  const result = await userServices.createUserIntoDb(userData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

const getMyBookings = catchAsync(async (req, res) => {
  const token = req.headers.authorization
  const { email } = getUserInfoFromToken(token as string)

  const result = await userServices.getMyBookingsFromDb(email)

  if (!result || result?.length === 0) {
    return handleNoDataResponse(res)
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User bookings retrieved successfully',
    data: result,
  })
})

export const userControllers = {
  createUser,
  getMyBookings,
}
