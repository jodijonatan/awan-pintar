"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Data cuaca tidak ditemukan");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchWeather();
  }, [city, apiKey]); // Jalankan ulang saat kota berubah

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Aplikasi Cuaca ☀️</h1>

      {/* Input untuk mencari kota lain */}
      <input
        type="text"
        placeholder="Cari kota..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded-md mb-4"
      />

      {weatherData ? (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm">
          <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
          <p className="text-6xl font-extrabold my-4">
            {Math.round(weatherData.main.temp)}°C
          </p>
          <p className="text-xl capitalize">
            {weatherData.weather[0].description}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="mx-auto"
          />
          <div className="mt-4 text-gray-600">
            <p>Kelembapan: {weatherData.main.humidity}%</p>
            <p>Kecepatan Angin: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p>Memuat data cuaca...</p>
      )}
    </div>
  );
}
