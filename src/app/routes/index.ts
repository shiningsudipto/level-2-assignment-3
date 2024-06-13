import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { AuthRoutes } from '../modules/auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
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
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
