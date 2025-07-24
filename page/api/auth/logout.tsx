// page/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Clear the token cookie
    res.setHeader('Set-Cookie', [
      'token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/'
    ])

    return res.status(200).json({ 
      message: 'Logged out successfully' 
    })
  } catch (error) {
    return res.status(500).json({ message: 'Logout failed' })
  }
}