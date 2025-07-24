import type { NextApiRequest, NextApiResponse } from 'next'

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
    return res.status(200).json({ message: 'OTP verified successfully' })
  } else {
    return res.status(401).json({ message: 'Invalid OTP' })
  }
}
