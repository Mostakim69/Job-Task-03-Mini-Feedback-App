import { NextResponse } from "next/server";

let feedbacks = []; // in-memory storage

export async function GET() {
  return NextResponse.json(feedbacks);
}

export async function POST(req) {
  const { name, email, feedback } = await req.json();
  if (!name || !email || !feedback) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }
  feedbacks.push({ name, email, feedback });
  return NextResponse.json({ message: "Feedback submitted successfully" });
}
