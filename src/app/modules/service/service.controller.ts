/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { serviceServices } from './service.service'

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

export const serviceControllers = {
  createService,
}
