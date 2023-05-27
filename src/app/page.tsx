"use client";

import InformationNugget from "@/components/InformationNugget";
import LoadingAnimation from "@/components/LoadingAnimation";
import SearchBar from "@/components/SearchBar";
import WeatherDisplay from "@/components/WeatherDisplay";
import { Weather, getWeather } from "@/services/weather";
import Image from "next/image";
import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [weather, setWeather] = useState<Weather | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCitySearch = async (content: string) => {
    setWeather(undefined);
    setLoading(true);
    try {
      const w = await getWeather({ location: content });
      setWeather(w);
    } catch (e) {
      toast.error(`Couldn't find ${content}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setLoading(false);
  };

  return (
    <main>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center gap-16 p-4 text-white">
        <div className="flex w-1/3 justify-center bg-opacity-50">
          <div className="relative w-full">
            <SearchBar onSubmit={handleCitySearch} isLoading={loading} />
          </div>
        </div>
        {weather && (
          <>
            <div className="mx-auto rounded-lg ">
              <WeatherDisplay weather={weather} />
            </div>
            <div className="fixed bottom-0 mb-5 rounded-md bg-black bg-opacity-50 p-6">
              <div className="flex flex-col justify-center gap-4">
                <h2 className="text-center">Weather in {weather.name}</h2>
                <div className="flex gap-20">
                  <InformationNugget
                    topLine={`${Math.round(weather.main.feels_like)}°`}
                    bottomLine="Feels like"
                  />
                  <InformationNugget
                    topLine={`${Math.round(weather.main.humidity)}%`}
                    bottomLine="Humidity"
                  />
                  <InformationNugget
                    topLine={`${Math.round(weather.wind.speed)} KPH`}
                    bottomLine="Winds"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
