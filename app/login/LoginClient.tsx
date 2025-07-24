'use client'

import PhoneInput from '../compoents/PhoneInput'

export default function LoginClient() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background and floating elements omitted for brevity, keep yours here */}
      
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="backdrop-blur-lg bg-white/80 shadow-2xl rounded-2xl p-8 border border-white/20 transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">Welcome Back</h1>
            <p className="text-gray-600 text-sm font-medium">Enter your phone number to continue</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
            <div className="relative bg-white rounded-xl p-6 shadow-inner">
              <PhoneInput />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Secured with end-to-end encryption</span>
          </div>
        </div>

        {/* Your bottom features section here */}
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}
