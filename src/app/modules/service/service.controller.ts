/* eslint-disable @typescript-eslint/no-explicit-any */
import { serviceServices } from './service.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { Service } from './service.model'
import { handleNoDataResponse } from '../../errors/handleNoData'

const createService = catchAsync(async (req, res) => {
  const ServiceData = req.body
  const result = await serviceServices.createServiceIntoDb(ServiceData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result,
  })
})

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await serviceServices.getSingleServiceFromDB(id)
  if (!result) {
    return handleNoDataResponse(res)
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully',
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
    message: 'Services retrieved successfully',
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
    message: 'Service updated successfully',
    data: result,
  })
})

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await serviceServices.deleteServiceFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
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
