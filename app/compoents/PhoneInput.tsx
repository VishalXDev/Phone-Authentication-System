'use client'
import { useState } from 'react'
import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function PhoneInput() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return toast.error('Enter a valid 10-digit phone number')
    }

    setLoading(true)
    try {
      await axios.post('/auth/send-otp', { phone })
      toast.success('OTP sent successfully!')
      localStorage.setItem('phone', phone)
      router.push('/verify')
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={10}
        autoFocus
      />
      <button
        onClick={handleSendOtp}
        disabled={!phone || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition w-full"
      >
        {loading ? 'Sending...' : 'Send OTP'}
      </button>
    </div>
  )
}
