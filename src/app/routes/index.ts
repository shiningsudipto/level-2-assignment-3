import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { SlotRoutes } from '../modules/slot/slot.route'
import { BookingsRoutes } from '../modules/booking/booking.route'
import { ReviewRoutes } from '../modules/review/review.route'
import { PaymentRoutes } from '../modules/payment/payment.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/bookings',
    route: BookingsRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
