import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-blue-500 text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center px-10 lg:px-32 py-28"
      >
        {/* Text Content */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl leading-11 lg:text-6xl font-extrabold md:leading-16 drop-shadow-lg">
            Pantau Cuaca <span className="text-yellow-300">Real-Time</span> di
            Lokasi Kamu
          </h1>
          <p className="text-lg text-white/90">
            Dapatkan informasi cuaca terkini dengan tampilan yang simple,
            interaktif, dan cepat. Tidak perlu bingung lagi untuk persiapan
            aktivitas harianmu!
          </p>
          <div className="flex gap-4">
            <a
              href="/weather"
              className="px-6 py-3 rounded-full bg-yellow-400 text-sky-900 font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-300/50 transition-transform duration-300"
            >
              🌤️ Coba Sekarang
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-sky-700 transition-colors duration-300"
            >
              Tentang
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="assets/home.png"
            alt="Weather Illustration"
            className="w-[350px] lg:w-[450px] animate-bounce-slow drop-shadow-2xl"
          />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen px-10 lg:px-32 py-20 bg-white text-sky-900"
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-center mb-12">
          Tentang <span className="text-sky-500">Awan Pintar</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-xl font-bold mb-2">⚡ Real-Time Data</h2>
            <p className="text-sky-700">
              Data cuaca selalu diperbarui secara langsung sesuai lokasi kamu.
            </p>
          </div>
          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-xl font-bold mb-2">📍 Lokasi Akurat</h2>
            <p className="text-sky-700">Deteksi lokasi dengan akurast.</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-xl font-bold mb-2">🎨 UI Modern</h2>
            <p className="text-sky-700">
              Tampilan elegan, simpel, dan responsif untuk semua device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
