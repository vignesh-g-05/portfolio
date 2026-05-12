import { NextResponse } from "next/server";

export const POST = () => {
  return NextResponse.json({
    success: true,
    message: "message sent successfully",
    data: null,
  });
};
