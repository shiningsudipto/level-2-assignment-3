import { Booking } from '../booking/booking.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createUserIntoDb = async (userData: TUser) => {
  const result = await User.create(userData)
  return result
}

const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const getMyBookingsFromDb = async (email: string) => {
  // const result = await Booking.find().populate('customer')
  const user = await User.findOne({ email })
  if (user) {
    const result = await Booking.find({ customer: user._id })
      .populate('service', '_id name description price duration')
      .populate('slot', '_id service date startTime endTime isBooked')
      .select('-customer')
      .lean()
    return result
  }
}

export const userServices = {
  createUserIntoDb,
  getMyBookingsFromDb,
  updateUserIntoDB,
}
