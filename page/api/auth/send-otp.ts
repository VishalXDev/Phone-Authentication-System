import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { phone } = req.body
  if (!phone) return res.status(400).json({ message: 'Phone number required' })

  // TODO: Replace this with actual OTP send logic (e.g. Twilio)
  console.log(`Simulating OTP sent to ${phone}`)

  return res.status(200).json({ message: 'OTP sent (simulated)' })
}
