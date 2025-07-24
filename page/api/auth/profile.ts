import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Get token from cookies
    const token = req.cookies.token
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as any
    
    return res.status(200).json({
      phone: decoded.phone,
      userId: decoded.userId,
      name: `User ${decoded.phone.slice(-4)}` // Mock name
    })
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

