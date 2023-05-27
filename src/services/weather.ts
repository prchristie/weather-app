import { WEATHER_API_KEY } from "@/config";
import axios from "axios";

export type WeatherInput = {
  location: string;
};

export type Weather = {
  weather: [{ main: string }];
  main: { temp: number; feels_like: number; humidity: number };
  wind: { speed: number };
  name: string;
};

export const getWeather = async ({
  location,
}: WeatherInput): Promise<Weather> => {
  const res = await axios.get(`/api/weather/${location}`);
  return res.data;
};
