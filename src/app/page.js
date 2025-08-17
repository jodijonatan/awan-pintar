"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");
  const [suggestion, setSuggestion] = useState("");
  const [formStatus, setFormStatus] = useState(""); // 'success' atau 'error'
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
  }, [city, apiKey]);

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    if (suggestion.trim() === "") {
      setFormStatus("error");
      return;
    }

    // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
    // Misalnya menggunakan fetch(), axios, atau API Route di Next.js
    // Untuk contoh ini, kita hanya akan menampilkan pesan sukses.

    console.log("Saran dari pengguna:", suggestion);
    setFormStatus("success");
    setSuggestion(""); // Reset input setelah dikirim

    // Sembunyikan pesan status setelah beberapa detik
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center min-h-screen bg-sky-300 py-12 px-6 gap-8">
      <div className="flex-grow flex-shrink w-full max-w-sm mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Aplikasi Cuaca ☀️
        </h1>
        {/* Input untuk mencari kota lain */}
        <input
          type="text"
          placeholder="Cari kota..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded-md mb-4 bg-gray-100 w-full"
        />
        {weatherData ? (
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center max-w-sm mb-8">
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
      {/* Formulir Saran */}
      <div className="flex-grow flex-shrink w-full max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center">Saran</h2>
        <h4 className="text-md font-regular mb-4 text-center">
          Saran untuk perkembangan website ini dong
        </h4>
        <form onSubmit={handleSuggestionSubmit} className="flex flex-col gap-4">
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Saran kamu di sini..."
            rows="4"
            className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600 transition-colors"
          >
            Kirim Saran
          </button>
        </form>
        {formStatus === "success" && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            Terima kasih atas saran Anda!
          </p>
        )}
        {formStatus === "error" && (
          <p className="mt-4 text-red-600 text-center font-semibold">
            Saran tidak boleh kosong.
          </p>
        )}
      </div>
    </div>
  );
}
