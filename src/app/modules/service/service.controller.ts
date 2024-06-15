/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { serviceServices } from './service.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { Service } from './service.model'
import { handleNoDataResponse } from '../../errors/handleNoData'

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
  if (!result) {
    return handleNoDataResponse(res)
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  })
})

const getAllServices = catchAsync(async (req, res) => {
  // const result = await Service.find()
  const result = await Service.aggregate([{ $match: { isDeleted: false } }])

  if (result?.length === 0) {
    return handleNoDataResponse(res)
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  })
})

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params
  const service = req.body
  const result = await serviceServices.updateServiceIntoDB(id, service)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is updated successfully',
    data: result,
  })
})

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await serviceServices.deleteServiceFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is deleted successfully',
    data: result,
  })
})

export const serviceControllers = {
  createService,
  getSingleService,
  getAllServices,
  updateService,
  deleteService,
}
