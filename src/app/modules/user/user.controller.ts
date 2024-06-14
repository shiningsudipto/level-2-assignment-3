/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { getUserInfoFromToken } from '../../utils/getUserInfoFromToken'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body

    const result = await userServices.createUserIntoDb(userData)

    return res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    })
  }
}

const getMyBookings = catchAsync(async (req, res) => {
  const token = req.headers.authorization
  const { email } = getUserInfoFromToken(token as string)

  const result = await userServices.getMyBookingsFromDb(email)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  })
})

export const userControllers = {
  createUser,
  getMyBookings,
}
