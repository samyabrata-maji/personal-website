import { NextResponse } from "next/server";

export function GET() {
    const root =
        process.env.NODE_ENV === "production"
            ? "https://sammaji.vercel.app"
            : "http://localhost:3000";
    return NextResponse.redirect(root + "/pdf/resume.pdf");
}
