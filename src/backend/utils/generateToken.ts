import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

function generateToken(user: User): string {
  const token = jwt.sign(
    { username: user.username, id: user.id, time: new Date() },
    process.env.JWT_SECRET,
    {
      expiresIn: '6h',
    },
  )

  return token
}

export default generateToken
