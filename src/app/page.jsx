export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-sky-500 to-sky-300 flex justify-between items-center px-36">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold">Awan Pintar</h1>
        <h4 className="text-xl font-semibold text-slate-600">
          Jodi Jonatan | 2025
        </h4>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sequi
          aliquam, beatae, vero quos delectus cupiditate officia modi impedit
          reiciendis, culpa odit est adipisci asperiores magni qui! Incidunt,
          error eos.
        </p>
        <a
          href="/weather"
          className="bg-sky-500 outline-3 outline-sky-500 text-white px-4 py-2 rounded-full mr-4"
        >
          Coba Sekarang
        </a>
        <a
          href="#"
          className="outline-4 outline-sky-500 text-white px-4 py-2 rounded-full"
        >
          Tentang
        </a>
      </div>
      <img src="assets/home.png" alt="image" />
    </div>
  );
}
