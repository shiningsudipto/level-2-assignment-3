import { TService } from './service.interface'
import { Service } from './service.model'

const createServiceIntoDb = async (serviceData: TService) => {
  const result = await Service.create(serviceData)
  return result
}

export const serviceServices = {
  createServiceIntoDb,
}
