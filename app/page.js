import Header from '../components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Check your DACH Market Readiness
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          In just 5 minutes you’ll know if your company is ready for the DACH region.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          Jetzt starten
        </button>
      </section>
    </main>
  );
}