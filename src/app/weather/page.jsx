"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Navbar from "src/components/Navbar";

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-500 via-sky-400 to-blue-600 text-white">
      {/* <Navbar /> */}
      {/* Hero / Weather Section */}
      <div className="flex-grow flex flex-col md:flex-row md:justify-between md:items-center py-12 px-6 gap-8 relative">
        <div
          className="flex-grow flex-shrink w-full max-w-md mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-center drop-shadow-lg">
            Awan Pintar ☀️
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-100/90 mb-6 text-center">
            Cek cuaca terkini di kotamu dengan tampilan modern
          </p>

          <input
            type="text"
            placeholder="Cari kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-none p-3 rounded-xl mb-6 w-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          {weatherData ? (
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-auto border border-white/30 animate-fade-in">
              <h2 className="text-2xl font-semibold drop-shadow-md">
                {weatherData.name}
              </h2>
              <p className="text-6xl font-extrabold my-4 drop-shadow-md">
                {Math.round(weatherData.main.temp)}°C
              </p>
              <p className="text-xl capitalize mb-2">
                {weatherData.weather[0].description}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather icon"
                className="mx-auto bg-white/30 rounded-full shadow-lg p-2"
              />
              <div className="mt-4 text-white/90">
                <p>Kelembapan: {weatherData.main.humidity}%</p>
                <p>Kecepatan Angin: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
          ) : (
            <p className="text-white/80 text-center">Memuat data cuaca...</p>
          )}
        </div>

        {/* Form Saran */}
        <div
          className="flex-grow flex-shrink w-full max-w-md p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl mx-auto border border-white/30"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-bold text-center mb-4 drop-shadow-md">
            💡 Saran
          </h2>
          <p className="text-sm text-white/90 mb-6">
            Website ini sedang dalam tahap pengembangan. Kami sangat menghargai
            setiap masukan kamu ✨
          </p>
          <form
            onSubmit={handleSuggestionSubmit}
            className="flex flex-col gap-4"
          >
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Saran kamu di sini..."
              rows="4"
              className="w-full p-3 rounded-xl bg-white/30 border border-white/40 text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
            >
              🚀 Kirim Saran
            </button>
          </form>

          {formStatus === "error" && (
            <p className="mt-4 text-red-300 text-center font-semibold">
              Saran tidak boleh kosong.
            </p>
          )}
        </div>

        {/* Pop-up */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-bounce-in">
              <h3 className="text-3xl font-bold text-sky-600 mb-4">
                🎉 Terima Kasih!
              </h3>
              <p className="text-gray-700 mb-6">
                Saran kamu udah terkirim dan akan membantu kami dalam
                pengembangan website 🙏
              </p>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="bg-sky-500 text-white font-bold py-2 px-6 rounded-xl shadow hover:bg-sky-600 transition-all duration-300"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full text-slate-100/80 text-center py-6 mt-auto bg-black/20 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; Jodi Jonatan Karo karo | {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
