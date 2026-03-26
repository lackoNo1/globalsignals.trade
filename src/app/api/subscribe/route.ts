import { NextRequest, NextResponse } from 'next/server'

// In production, store this in a database
const waitlist: string[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (waitlist.includes(email)) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 400 }
      )
    }

    waitlist.push(email)
    console.log(`New waitlist subscriber: ${email} (Total: ${waitlist.length})`)

    return NextResponse.json(
      { message: 'Successfully joined waitlist', count: waitlist.length },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}