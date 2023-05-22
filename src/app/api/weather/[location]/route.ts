import { WEATHER_API_KEY } from "@/config";
import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { location: string } }
) {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${params.location}&appid=${WEATHER_API_KEY}&units=metric`
  );
  return NextResponse.json(weather.data);
}
