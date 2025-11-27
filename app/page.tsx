"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// --- DATA ---
const cards = [
  { id: 1, tag: "Webinar", title: "Reinventing Your Dealership With AI and Omnichannel Journeys", img: "Eu.png", video: "PRZDoZeqwyc" },
  { id: 2, tag: "Whitepaper", title: "Strategic Guide to Profitable Scaling in Auto Retail", img: "/images/card2.png", video: "YGa2iVPEnNs" },
  { id: 3, tag: "Podcast", title: "AI Adoption in Auto Finance", img: "/images/card3.png", video: "vN5aCQ860dk" },
  { id: 4, tag: "Blog", title: "The Future of Electric Vehicle Sales in the U.S.", img: "/images/card4.png", video: "YJ3DXLx0ZqY" },
  { id: 5, tag: "Webinar", title: "Digital Transformation Tools for Dealerships", img: "/images/card5.png", video: "9jmrqwMtJ6o" },
  { id: 6, tag: "Whitepaper", title: "Finance & Leasing Automation Guide", img: "/images/card6.png", video: "9bK3hGWhkGE" },
  { id: 7, tag: "Case Study", title: "AI Improved Dealer Revenue by 40%", img: "/images/card7.png", video: "sWuwbA" },
  { id: 8, tag: "Webinar", title: "Omnichannel Retailing Advantage", img: "/images/card8.png", video: "MPiiHoNlu2Q" },
  { id: 9, tag: "Blog", title: "Digital Automotive Retail Evolution", img: "/images/card9.png", video: "5u42PvOTjD0" },
  { id: 10, tag: "Podcast", title: "Dealer Profitability Through Analytics", img: "/images/card10.png", video: "JUjYB76Umq0" },
  { id: 11, tag: "Whitepaper", title: "Modernizing Auto Lending", img: "/images/card11.png", video: "svJ0kd4_01g" },
  { id: 12, tag: "Webinar", title: "Growth in the Mobility Market", img: "/images/card12.png", video: "ybS8MWXXGnU" },
  { id: 13, tag: "Case Study", title: "Automation Reduced Operational Costs by 70%", img: "/images/card13.png", video: "EEVj-YLBsHA" },
];

const images = ["/uae.png", "/Eu.png", "/usa.png"];
const imageTexts = ["United Arab Emirates", "European Union", "United States of America"];
const purpleWords = ["profitable", "scalable", "efficient", "intelligent"];
const logos = ["/logos/usa.png", "/logos/usa.png", "/logos/usa.png", "/logos/usa.png", "/logos/usa.png", "/logos/usa.png"];
const tabs = ["Retail", "Finance", "AI Labs", "Marketplace", "Consultancy"] as const;
type TabKeys = (typeof tabs)[number];

const testimonials = [
  {
    name: "Mike Peyton",
    title: "Chief Motorer and Vice-President of MINI of the Americas",
    quote: "At MINI, we decided it was time to create an end-to-end purchasing and finance journey for the consumer...",
    image: "/Eu.png",
  },
  {
    name: "Jane Doe",
    title: "CEO of AutoWorld",
    quote: "Working with NETSOL allowed us to transform our retail experience and streamline the finance process.",
    image: "/usa.png",
  },
  {
    name: "John Smith",
    title: "CTO of FutureCars",
    quote: "NETSOL's platform is scalable, intelligent, and efficient — exactly what we needed to grow.",
    image: "/uae.png",
  },
];

const tabContents: Record<TabKeys, {
  title: string;
  subtitle: string;
  buttons: string[];
  leftImage: string;
  rightImages: string[];
}> = {
  Retail: {
    title: "Transcend Retail",
    subtitle: "AI-powered intelligence for retail operations — boosting customer experience, sales, and efficiency.",
    buttons: ["Point of Sale", "Inventory Management", "Customer Insights"],
    leftImage: "/australia.png",
    rightImages: ["/australia.png", "/australia.png"],
  },
  Finance: {
    title: "Transcend Finance",
    subtitle: "AI-driven intelligence for the full contract lifecycle — boosting decisions, onboarding, and operations.",
    buttons: ["Fleet Finance", "Commercial Lenders", "Specialized Lenders"],
    leftImage: "/uk.png",
    rightImages: ["/uk.png", "/uk.png"],
  },
  "AI Labs": {
    title: "Transcend AI Labs",
    subtitle: "Leverage advanced AI and data science to automate, predict, and optimize business workflows.",
    buttons: ["Predictive Analytics", "Automation Tools", "ML Models"],
    leftImage: "/Eu.png",
    rightImages: ["/Eu.png", "/Eu.png"],
  },
  Marketplace: {
    title: "Transcend Marketplace",
    subtitle: "Connect buyers and sellers efficiently with a seamless AI-driven marketplace.",
    buttons: ["Product Listings", "Smart Matching", "Dynamic Pricing"],
    leftImage: "/nerfwar.png",
    rightImages: ["/nerfwar.png", "/nerfwar.png"],
  },
  Consultancy: {
    title: "Transcend Consultancy",
    subtitle: "Get expert guidance to implement AI-driven solutions and digital transformations.",
    buttons: ["Strategy Planning", "Implementation", "Performance Monitoring"],
    leftImage: "/txcel.png",
    rightImages: ["/txcel.png", "/txcel.png"],
  },
};

// --- COMPONENT ---
export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKeys>("Retail");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [position, setPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Rotating images
  useEffect(() => {
    const id = setInterval(() => setImgIndex((prev) => (prev + 1) % images.length), 2000);
    return () => clearInterval(id);
  }, []);

  // Rotating purple words
  useEffect(() => {
    const id = setInterval(() => setWordIndex((prev) => (prev + 1) % purpleWords.length), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollingLogos = [...logos, ...logos];

  const openModal = (id: string) => {
    setVideoId(id);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setVideoId("");
  };

  const slideRight = () => {
    if (!scrollRef.current || !scrollRef.current.parentElement) return;
    const containerWidth = scrollRef.current.parentElement.clientWidth;
    const contentWidth = scrollRef.current.scrollWidth;
    const newPos = Math.min(position + 350, contentWidth - containerWidth);
    setPosition(newPos);
  };
  const slideLeft = () => {
    if (!scrollRef.current) return;
    const newPos = Math.max(position - 350, 0);
    setPosition(newPos);
  };

  return (
    <div className="bg-gradient-to-b from-[#1a0538] to-[#0c0218] text-white">
      {/* HERO SECTION */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-28 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <p className="text-sm tracking-widest text-purple-400 mb-4">Shaping Smarter Finance</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI-powered ecosystems <br /> that make commerce{" "}
            <span className="text-purple-600 transition-all duration-500">{purpleWords[wordIndex]}</span>
          </h1>
          <p className="text-gray-300 mt-6 text-lg">
            We remove complexity from the asset lifecycle with a composable platform that integrates effortlessly.
          </p>
          <button className="group mt-10 px-8 py-4 bg-purple-700 hover:bg-purple-900 text-white rounded-xl flex items-center gap-3 text-lg font-semibold transition-all shadow-md">
            <span>Get in touch</span>
            <span className="text-xl group-hover:rotate-45 transition-transform">↗</span>
          </button>
        </div>
        <div className="flex flex-col items-center mt-12 md:mt-0">
          <Image src={images[imgIndex]} width={380} height={380} alt="Rotating image" className="transition-all duration-700 drop-shadow-xl" priority />
          <p className="text-center font-bold text-2xl text-purple-500 mt-4">{imageTexts[imgIndex]}</p>
        </div>
      </section>

      {/* BRAND SLIDER */}
      <section className="w-full py-20 px-6 flex justify-center relative overflow-hidden">
        <div className="relative bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 rounded-3xl shadow-lg border border-purple-900 max-w-7xl w-full py-14 px-6 md:px-12 z-10">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
            The world’s leading brands are powered by NETSOL
          </h2>
          <div className="overflow-hidden relative">
            <div className="flex items-center gap-16 animate-scroll-left whitespace-nowrap">
              {scrollingLogos.map((src, i) => (
                <Image key={i} src={src} alt="Brand Logo" width={140} height={80} className="opacity-90 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left 15s linear infinite;
          }
        `}</style>
      </section>

      {/* TRANSCEND PLATFORM (TABS) */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-semibold tracking-tight mb-4 flex items-center justify-center gap-3">
          <Image src="/usa.png" alt="Transcend" width={40} height={40} /> Transcend Platform
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
          An AI-driven, composable platform uniting digital retail, asset finance, and loan servicing.
        </p>
        <nav className="flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-6 py-3 font-semibold text-sm transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                  : "border border-purple-600 text-purple-400 hover:bg-purple-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </section>

      {/* TRANSCEND LAYOUT */}
      <section className="w-full min-h-screen py-16 px-6 md:px-16">
        <div className="flex flex-row gap-10">
          {/* LEFT CARD */}
          <div className="w-[420px] rounded-3xl bg-[#1f0f3b] border border-purple-700 p-10 shadow-lg relative overflow-hidden h-[520px]">
            <div className="absolute top-0 left-0 w-full h-24 bg-[repeating-linear-gradient(90deg,#1FB6A6_0px,#1FB6A6_2px,transparent_2px,transparent_10px)] opacity-40"></div>
            <div className="relative z-10 pt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <h2 className="text-3xl font-semibold">{tabContents[activeTab].title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">{tabContents[activeTab].subtitle}</p>
              <button className="border border-purple-500 px-6 py-3 rounded-xl text-lg hover:bg-purple-800 transition">Get in touch →</button>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-8 w-[320px]">
            <div className="rounded-3xl bg-[#2a0f4b] p-10 shadow-sm flex items-center justify-center text-center h-[250px]">
              <p className="text-gray-300 text-xl leading-relaxed">Smarter solutions start here.</p>
            </div>
            <div className="rounded-3xl bg-[#2a0f4b] p-6 shadow-sm flex flex-col gap-4">
              {tabContents[activeTab].buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`${
                    i === 1
                      ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                      : "bg-[#3b0f62] text-white"
                  } py-4 rounded-xl text-lg font-semibold shadow-sm`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 w-[260px]">
            {tabContents[activeTab].rightImages.map((img, i) => (
              <div key={i} className="rounded-2xl bg-[#3b0f62] p-6 shadow-sm h-[250px] flex items-center justify-center">
                <Image src={img.startsWith("/") ? img : `/${img}`} width={210} height={210} alt={`Right Image ${i}`} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TECH PARTNER */}
      <section className="py-16 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            <Image
              src="/Eu.png"
              alt="Tech Partner"
              width={500}
              height={300}
              className="w-full rounded-xl"
              priority
            />
          </div>
          <div className="lg:w-1/2 text-gray-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-500">
              Technology partner to the world’s leading brands
            </h2>
            <p className="mb-4">
              NETSOL Technologies builds AI-powered ecosystems that make finance,
              commerce, retail, and servicing seamless.
            </p>
            <p className="mb-6">
              With 40+ years of experience and operations in 40+ countries, we
              deliver secure, composable platforms that scale globally.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-16 bg-gradient-to-r from-[#2a0f4b] to-[#1a0538] flex items-center justify-center">
        <div className="max-w-6xl px-8 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-between bg-[#2a0f4b] p-8 rounded-xl shadow-lg"
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-semibold text-purple-500 leading-tight mb-4">
                    {t.name} partners with NETSOL
                  </h2>
                  <blockquote className="text-lg text-gray-300 italic mb-4">
                    {t.quote}
                  </blockquote>
                  <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.title}</p>
                  </div>
                </div>

                <div className="md:w-1/3 flex justify-center">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-1 rounded-full transition-all ${
                  activeTestimonial === index
                    ? "bg-purple-500"
                    : "bg-purple-400"
                } ${index === 0 ? "w-10" : index === 1 ? "w-6" : "w-4"}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* RESOURCES / VIDEO CARDS */}
<section className="py-16 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-[#1a0538] to-[#0c0218]">
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-500 mb-12">Resources & Insights</h2>
  
  {/* Slider Arrows */}
  <div className="flex justify-end gap-3 sm:gap-4 mb-6">
    <button
      onClick={slideLeft}
      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-purple-700 bg-[#2a0f4b] text-white shadow-sm hover:shadow-md transition"
    >
      ←
    </button>
    <button
      onClick={slideRight}
      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-purple-700 bg-[#2a0f4b] text-white shadow-sm hover:shadow-md transition"
    >
      →
    </button>
  </div>

  {/* Slider Cards */}
  <div className="overflow-hidden mt-6">
    <div
      ref={scrollRef}
      className="flex gap-4 sm:gap-6 md:gap-8 transition-transform duration-500"
      style={{ transform: `translateX(-${position}px)` }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => openModal(card.video)}
          className="cursor-pointer bg-[#1f0f3b] rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-700 overflow-hidden flex flex-col min-w-[250px] sm:min-w-[300px] md:min-w-[350px]"
        >
          <div className="relative h-40 sm:h-48 md:h-56 bg-gray-900">
            <img src={card.img} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-800/90 rounded-full shadow-md border border-purple-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
            <div>
              <p className="text-purple-400 font-semibold text-xs sm:text-sm uppercase">{card.tag}</p>
              <h2 className="text-white text-lg sm:text-xl font-semibold mt-1 sm:mt-2 leading-snug">{card.title}</h2>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-1 sm:gap-2 text-purple-300 font-medium text-sm sm:text-base">
              <span>Watch now</span>
              <span>↗</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Video Modal */}
{isOpen && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
    <div className="bg-[#1f0f3b] rounded-xl w-full sm:w-[95%] max-w-4xl shadow-xl relative p-4 sm:p-6 h-[70vh] sm:h-[80vh] flex flex-col border border-purple-700">
      <button
        onClick={closeModal}
        className="absolute top-3 sm:top-4 right-3 sm:right-4 text-purple-300 hover:text-white text-xl sm:text-2xl"
      >
        ✕
      </button>
      <div className="flex-1 mt-4 sm:mt-6">
        <iframe
          className="w-full h-full rounded-lg border border-purple-600"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    </div>
  </div>
)}


      {/* CTA */}
      <section className="w-full py-28 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-purple-500">
          Let’s talk about <span className="text-white">what’s next</span>
        </h1>
        <p className="text-gray-300 mt-6 text-lg max-w-2xl">
          Rethink what your company can do with the right partner by your side.
        </p>
        <button className="mt-10 px-10 py-4 bg-purple-700 hover:bg-purple-900 text-white rounded-2xl flex items-center gap-3 text-lg font-semibold shadow-md">
          Connect with us
          <span className="text-white text-xl">↗</span>
        </button>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-r from-purple-800 via-purple-900 to-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="relative flex justify-center lg:justify-start">
            <img
              src="/Eu.png"
              alt="Car"
              className="relative w-[480px] lg:w-[520px] drop-shadow-2xl"
            />
          </div>

          <div className="lg:pr-10 text-white">
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Subscribe to our newsletter to get the latest news in your inbox.
            </h2>

            <div className="flex bg-white rounded-full overflow-hidden shadow-xl mt-6 max-w-xl">
              <input
                type="email"
                placeholder="abc@example.com"
                className="flex-1 px-6 py-4 text-gray-700 text-lg outline-none"
              />
              <button className="px-10 bg-purple-700 hover:bg-purple-900 text-white font-semibold text-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
