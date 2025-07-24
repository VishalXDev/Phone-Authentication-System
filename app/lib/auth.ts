import { cookies } from 'next/headers'

export async function getToken() {
  const cookieStore = await cookies() // ✅ Await here
  const token = cookieStore.get('token')?.value
  return token
}
