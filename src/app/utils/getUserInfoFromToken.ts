import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'

export const getUserInfoFromToken = (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload

  return decoded // {email, role}=decoded
}
