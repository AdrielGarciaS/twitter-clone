import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

interface IGetTokenData {
  username: string
  id: number
}

function getTokenData(token: string): IGetTokenData | undefined {
  if (!token) return

  const data = jwt.verify(token, process.env.JWT_SECRET)

  if (!data) return

  return data as IGetTokenData
}

export default getTokenData
