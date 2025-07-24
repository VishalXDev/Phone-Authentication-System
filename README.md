📱 Phone Authentication System

This is a simple and secure **Phone OTP Authentication System** built with **Next.js 14**, **Tailwind CSS**, and **Axios**. It includes:

- Phone number login/register
- OTP verification
- Protected profile route
- Logout functionality

## 🚀 Features

- 📞 Login/Register with Phone Number
- 🔐 OTP Verification
- 👤 Protected Profile Page (only accessible after login)
- 🔓 Logout
- 🍪 Token stored securely in cookies
- ⚙️ Middleware-based route protection
- 📦 Clean and modular file structure
- 🌐 Fully responsive UI
- 🔔 Toast notifications for feedback

---

## 📂 Folder Structure

/app
├── login/page.tsx // Phone input page
├── verify/page.tsx // OTP input page
├── profile/page.tsx // Protected profile page
├── layout.tsx // App layout
├── middleware.ts // Auth middleware
/components
└── PhoneInput.tsx // Reusable phone input component
/lib
└── axios.ts // Axios instance
└── auth.ts // Cookie/token utilities
/public
└── favicon.ico
/styles
└── globals.css
.env.local // Environment variables
next.config.js // Next.js config
tailwind.config.ts // Tailwind CSS config
tsconfig.json // TypeScript config

yaml
Copy code

---

## 🧪 API Integration

This app uses 4 API endpoints (provided):

| Endpoint                 | Method | Purpose                    |
|--------------------------|--------|----------------------------|
| `/api/auth/login`       | POST   | Send phone number for OTP |
| `/api/auth/verify-otp`  | POST   | Verify OTP & login user   |
| `/api/auth/profile`     | GET    | Get user profile info     |
| `/api/auth/logout`      | POST   | Logout and clear session  |

> All APIs are consumed via `lib/axios.ts` and cookies are handled securely.

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/VishalXDev/phone-auth-app.git
cd phone-auth-app
2. Install Dependencies
bash
Copy code
npm install
# or
yarn install
3. Setup .env.local
env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:3004
Replace with your actual backend URL if hosted elsewhere.

4. Run the App
bash
Copy code
npm run dev
# or
yarn dev
✅ Usage Guide
Go to /login and enter your phone number.

Submit and receive an OTP on your phone.

Enter OTP on /verify.

On successful verification, you're redirected to /profile.

Logout anytime from profile page.

🔐 Middleware (Auth Protection)
The profile page (/profile) is protected using Next.js middleware. If the token is missing or invalid, users are redirected to /login.

📦 Tech Stack
Frontend: Next.js 14+, Tailwind CSS, TypeScript

API Integration: Axios

State & Cookies: Local state + set-cookie header + Next.js middleware

Notifications: react-hot-toast

📝 Notes
This project is built for an internship assignment.

AI assistance (ChatGPT) was used for code structuring and best practice guidance.

Fully responsive and production-ready.

📸 Screenshots
Add 2–3 screenshots here if required: login, verify, and profile page.

📬 Contact
Made with ❤️ by VishalXDev