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

export const serviceServices = {
  createServiceIntoDb,
  getSingleServiceFromDB,
}
