"use client";

import { getWeather } from "@/services/weather";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <main className="flex flex-col items-center justify-center gap-16 p-4 text-white">
      <div className="flex w-1/3 justify-center bg-opacity-50">
        <div className="relative w-full">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setCity("");
              await getWeather({ location: city }).then((w) => setWeather(w));
            }}
          >
            <input
              type="text"
              placeholder="Search a city"
              className="h-11 w-full rounded-xl border bg-transparent p-2 placeholder-white caret-white"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {weather.weather && (
        <div className="flex gap-44">
          <div className="flex flex-col items-center justify-center gap-5 text-lg">
            {/* <Image src="/" width={20} height={20} alt="Hello" /> */}
            {weather.weather[0].main}
          </div>
          <span className="text-9xl text-white">
            {Math.round(weather.main.temp)}°C
          </span>
        </div>
      )}
    </main>
  );
}
