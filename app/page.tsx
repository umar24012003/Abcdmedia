// Updated Hero component with purple & white color scheme
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/uae.png", "/Eu.png", "/usa.png"];
const imageTexts = [
  "United Arab Emirates",
  "European Union",
  "United States of America",
];
const blueWords = ["profitable", "scalable", "efficient", "intelligent"];
const logos = [
  "/logos/usa.png",
  "/logos/usa.png",
  "/logos/usa.png",
  "/logos/usa.png",
  "/logos/usa.png",
  "/logos/usa.png",
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Retail");

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % blueWords.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollingLogos = [...logos, ...logos];
  const tabs = ["Retail", "Finance", "AI Labs", "Marketplace", "Consultancy"];

  return (
    <>
      {/* HERO AREA */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-28 flex flex-col md:flex-row items-center justify-between bg-white">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-sm tracking-widest text-purple-400 mb-4">
            Shaping Smarter Finance
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight">
            AI-powered ecosystems <br /> that make commerce {" "}
            <span className="text-purple-600 transition-all duration-500">
              {blueWords[wordIndex]}
            </span>
          </h1>

          <p className="text-purple-500 mt-6 text-lg">
            We remove complexity from the asset lifecycle with a composable
            platform that integrates effortlessly.
          </p>

          <button className="group mt-10 px-8 py-4 bg-purple-700 hover:bg-purple-900 text-white rounded-xl flex items-center gap-3 text-lg font-semibold transition-all">
            <span className="transition-transform duration-300 group-hover:animate-pulse">
              Get in touch
            </span>
            <span className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE + TEXT */}
        <div className="flex flex-col items-center mt-12 md:mt-0">
          <Image
            src={images[imgIndex]}
            width={380}
            height={380}
            alt="Rotating image"
            className="transition-all duration-700 drop-shadow-xl"
          />
          <p className="text-center font-bold text-2xl text-purple-700 mt-4 transition-all duration-300">
            {imageTexts[imgIndex]}
          </p>
        </div>
      </section>

      {/* BRAND SLIDER */}
      <section className="w-full py-20 px-6 flex justify-center relative overflow-hidden bg-purple-50">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex space-x-6 opacity-20 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-purple-300 rounded"
              style={{ animation: `stripeMove 30s linear infinite`, animationDelay: `${i * 1.5}s` }}
            />
          ))}
        </div>

        {/* Background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl h-40 rounded-t-[100px] bg-purple-200 opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-6xl h-28 rounded-t-[90px] bg-purple-300 opacity-40 blur-2xl pointer-events-none" />

        {/* Outer Card */}
        <div className="relative bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 rounded-3xl shadow-md border border-purple-600 max-w-7xl w-full py-14 px-6 md:px-12 z-10">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-purple-900 mb-12">
            The world’s leading brands are powered by NETSOL
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex items-center gap-16 animate-scroll-left whitespace-nowrap">
              {scrollingLogos.map((src, i) => (
                <div key={i} className="flex-shrink-0">
                  <Image
                    src={src}
                    alt="Brand Logo"
                    width={140}
                    height={80}
                    className="opacity-90 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-left {
            animation: scroll-left 15s linear infinite;
          }

          @keyframes stripeMove {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(100%);
            }
          }
        `}</style>
      </section>

      {/* Transcend Platform Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-purple-900 mb-4 flex items-center justify-center gap-3">
          <Image src="/usa.png" alt="Transcend" width={40} height={40} />
          Transcend Platform
        </h1>

        <p className="max-w-3xl mx-auto text-purple-600 mb-10 leading-relaxed">
          An AI-driven, composable platform uniting digital retail, asset finance, and loan servicing.
        </p>

        <nav className="flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-6 py-3 font-semibold text-sm transition-colors duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                    : "border border-purple-300 text-purple-700 hover:bg-purple-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </section>

      {/* WHO WE SERVE */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="text-center text-4xl font-bold mb-4 text-purple-900">
          Who <span className="text-purple-600">we serve</span>
        </h2>

        <p className="text-center text-purple-500 max-w-3xl mx-auto leading-relaxed mb-20">
          Orchestrating commerce, intelligence and innovation across asset finance, retail and advisory ecosystems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {["Captives & Lenders", "OEMs & Dealers", "Brokers & Aggregators"].map((title, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <div className="w-20 h-20 rounded-2xl border border-purple-300 flex items-center justify-center mb-6">
                <Image src="/usa.png" width={45} height={45} alt={title} />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-purple-800">{title}</h3>

              <p className="text-purple-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo feugiat ligula.
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-8 py-4 bg-purple-700 hover:bg-purple-900 text-white font-semibold rounded-lg shadow-md transition duration-300 flex items-center gap-2">
            Connect with us <span className="text-xl">↗</span>
          </button>
        </div>
      </section>
    </>
  );
}