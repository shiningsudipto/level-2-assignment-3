import { TService } from './service.interface'
import { Service } from './service.model'

const createServiceIntoDb = async (serviceData: TService) => {
  const result = await Service.create(serviceData)
  return result
}

const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id)
  return result
}

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

export const serviceServices = {
  createServiceIntoDb,
  getSingleServiceFromDB,
  updateServiceIntoDB,
}
