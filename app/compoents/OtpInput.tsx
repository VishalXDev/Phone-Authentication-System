'use client'
import { useState, useEffect } from 'react'
import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function OtpInput() {
  const [otp, setOtp] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedPhone = localStorage.getItem('phone')
    if (storedPhone) setPhone(storedPhone)
    else router.push('/login') // if no phone, redirect back
  }, [router])

  const handleVerifyOtp = async () => {
    if (!/^\d{4,6}$/.test(otp)) {
      return toast.error('Enter a valid 4–6 digit OTP')
    }

    setLoading(true)
    try {
      const res = await axios.post('/api/auth/verify-otp', { phone, otp })
      toast.success('Logged in!')
      document.cookie = `token=${res.data.token}; path=/`
      router.push('/profile')
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'OTP verification failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        maxLength={6}
        autoFocus
      />
      <button
        onClick={handleVerifyOtp}
        disabled={!otp || loading}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 transition w-full"
      >
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>
    </div>
  )
}
