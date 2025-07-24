'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from '@/app/lib/axios'
import { toast } from 'react-hot-toast'

export default function OtpPage() {
  const [otp, setOtp] = useState('')
  const [phone, setPhone] = useState('')
  const router = useRouter()

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post('/api/auth/verify-otp', { otp, phone })
      document.cookie = `token=${res.data.token}; path=/`
      toast.success('OTP verified!')
      router.push('/profile')
    } catch (err) {
      toast.error('Invalid OTP')
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
      <input
        type="text"
        placeholder="Phone"
        className="w-full mb-2 border p-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter OTP"
        className="w-full mb-4 border p-2"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        onClick={handleVerifyOtp}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Verify
      </button>
    </div>
  )
}
