import { WEATHER_API_KEY } from "@/config";
import axios from "axios";

export type WeatherInput = {
  location: string;
};

export const getWeather = async ({ location }: WeatherInput) => {
  const res = await axios.get(`http://localhost:3000/api/weather/${location}`);
  return res.data;
};
