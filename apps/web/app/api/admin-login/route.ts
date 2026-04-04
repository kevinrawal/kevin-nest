import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try{
    const { password } = await req.json()

  console.log('Received password:', password)
  console.log('Expected:', process.env.ADMIN_PASSWORD)
  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true })

    response.cookies.set('admin-auth', 'verified', {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: 'lax',
        maxAge: 60 * 60,
    })

    return response
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }
  catch (error) {
    console.error('Error processing admin login:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}