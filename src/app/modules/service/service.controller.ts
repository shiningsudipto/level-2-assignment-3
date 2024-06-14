/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { serviceServices } from './service.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { Service } from './service.model'

const createService = async (req: Request, res: Response) => {
  try {
    const serviceData = req.body

    const result = await serviceServices.createServiceIntoDb(serviceData)

    return res.status(200).json({
      success: true,
      message: 'Service created successfully!',
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

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await serviceServices.getSingleServiceFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  })
})

const getAllServices = catchAsync(async (req, res) => {
  const result = await Service.find()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  })
})

export const serviceControllers = {
  createService,
  getSingleService,
  getAllServices,
}