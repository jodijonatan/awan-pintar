"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");
  const [suggestion, setSuggestion] = useState("");
  const [formStatus, setFormStatus] = useState(""); // 'success' atau 'error'
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State untuk pop-up
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
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

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    if (suggestion.trim() === "") {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xgvzbaaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ saran_pengguna: suggestion }),
      });

      if (response.ok) {
        setFormStatus("success");
        setSuggestion("");
        setIsPopupVisible(true); // Tampilkan pop-up
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
      console.error("Gagal mengirim saran:", error);
    }

    // Sembunyikan pesan status setelah beberapa detik
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-l py-2 md:py-16 from-sky-500 to-sky-300">
      <div className="flex-grow flex flex-col md:flex-row md:justify-between md:items-center py-12 px-6 gap-8 relative">
        <div
          className="flex-grow flex-shrink w-full max-w-sm mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-3xl font-bold mb-2 text-center">
            Awan Pintar ☀️
          </h1>
          <p className="text-xl font-medium text-slate-600 mb-2 text-center">
            Cek cuaca terkini di kotamu
          </p>
          {/* Input untuk mencari kota lain */}
          <input
            type="text"
            placeholder="Cari kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-gray-100 w-full"
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
                className="mx-auto bg-sky-500 rounded-full mt-2"
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
        {/* Form Saran */}
        <div
          className="flex-grow flex-shrink w-full max-w-sm p-6 bg-slate-200 rounded-lg shadow-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-semibold text-center">Saran</h2>
          <h4 className="text-md font-regular mb-4 text-left">
            Website ini sedang dalam tahap pengembangan. Kami sangat menghargai
            setiap masukan kamu untuk fitur-fitur baru
          </h4>
          <form
            onSubmit={handleSuggestionSubmit}
            className="flex flex-col gap-4"
          >
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Saran kamu di sini..."
              rows="4"
              className="w-full p-3 border border-slate-400 rounded-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600 transition-colors cursor-pointer"
            >
              Kirim Saran
            </button>
          </form>
          {formStatus === "error" && (
            <p className="mt-4 text-red-600 text-center font-semibold">
              Saran tidak boleh kosong.
            </p>
          )}
        </div>
        {/* Pop-up */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-gray-800/70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center transform scale-100 transition-transform duration-300 ease-out">
              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                Terima Kasih!
              </h3>
              <p className="text-gray-700 mb-6">
                Saran kamu udah terkirim dan akan membantu kami dalam
                pengembangan website
              </p>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="bg-sky-500 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-600 transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="w-full text-slate-600 text-center pt-0 pb-14 text-md mt-auto">
        <div className="container mx-auto px-4">
          <p>&copy; Jodi Jonatan Karo karo | {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
