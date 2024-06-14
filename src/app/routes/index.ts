import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { SlotRoutes } from '../modules/slot/slot.route'

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
    path: '/services',
    route: SlotRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
