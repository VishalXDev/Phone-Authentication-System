// page/api/auth/verify-otp.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { phone, otp } = req.body
  if (!phone || !otp) {
    return res.status(400).json({ message: 'Phone and OTP are required' })
  }

  // ✅ Simulate OTP verification (replace with real check if needed)
  if (otp === '123456') {
    // Generate JWT token
    const token = jwt.sign(
      { phone, userId: `user_${phone}` },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return res.status(200).json({ 
      message: 'OTP verified successfully',
      token,
      user: { phone }
    })
  } else {
    return res.status(401).json({ message: 'Invalid OTP' })
  }
}