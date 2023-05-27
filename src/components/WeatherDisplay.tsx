import { Weather } from "@/services/weather";

export default function WeatherDisplay({ weather }: { weather: Weather }) {
  return (
    <div className="flex gap-44">
      <div className="flex flex-col items-center justify-center gap-5 text-lg">
        {weather.weather[0].main}
      </div>
      <span className="text-8xl text-white">
        {Math.round(weather.main.temp)}°
      </span>
    </div>
  );
}
