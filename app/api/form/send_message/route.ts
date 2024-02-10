import { NextRequest, NextResponse } from "next/server";
import React from "react";
import {z} from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
})

export async function POST(req: NextRequest) {
  const data = await req.json()
  const result = schema.safeParse(data)
  if (!result.success) return NextResponse.json({message: "Please provide name, email and message"}, {status: 422})

  const res = await fetch(
    `https://budibase.app/api/public/v1/tables/ta_5c80430c9b2a435988529fc842604277/rows`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-budibase-api-key": process.env.BUDIBASE_API_KEY as string,
        "x-budibase-app-id": process.env.BUDIBASE_APP_ID as string,
      },
      body: JSON.stringify({
        name: result.data.name,
        email: result.data.email,
        message: result.data.message
      }),
    },
  )

  const body = await res.json()
  return NextResponse.json({ message: "success", data: body }, { status: 200 });
}
