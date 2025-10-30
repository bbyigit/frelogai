"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "16px",
};

const center = {
  lat: 41.0082,
  lng: 28.9784,
};

// Haritayı dinamik (lazy) yükle
const GoogleMap = dynamic(
  () =>
    import("@react-google-maps/api").then((mod) => {
      const { GoogleMap, LoadScript } = mod;
      return function LazyMap() {
        return (
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              options={{
                disableDefaultUI: false,
                zoomControl: true,
                mapTypeControl: true,
                streetViewControl: false,
              }}
            />
          </LoadScript>
        );
      };
    }),
  { ssr: false }
);

export default function Home() {
  const [showMap, setShowMap] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center mb-10">
        <img src="/logo.png" alt="FRELOG AI" className="mx-auto mb-6 h-16 w-auto" />
        <h1 className="text-5xl font-bold mb-4 tracking-wide">FREELOG AI</h1>
        <p className="opacity-80 mb-8 text-lg">
          Akıllı Taşıma Sistemleri • Rail &amp; Road • Canlı Takip • Saha IoT • Harita Entegrasyonu
        </p>
        <a
          href="mailto:info@freelogai.com"
          className="inline-block rounded-xl px-8 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
        >
          Bize Ulaşın
        </a>
      </div>

      {!showMap ? (
        <button
          onClick={() => setShowMap(true)}
          className="rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-3 font-medium"
        >
          Haritayı Görüntüle
        </button>
      ) : (
        <div className="w-full max-w-3xl shadow-2xl border border-gray-700 rounded-2xl overflow-hidden mt-8">
          <GoogleMap />
        </div>
      )}
    </main>
  );
}
