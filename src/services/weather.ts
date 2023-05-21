import { WEATHER_API_KEY } from "@/config";
import axios from "axios";

export type WeatherInput = {
  location: string;
};

export const getWeather = async ({ location }: WeatherInput) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
  );
  return res.data;
};
