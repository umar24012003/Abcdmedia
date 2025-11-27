import Image from "next/image";

export default function CustomersSection() {
  const cards = [
    {
      name: "lumatax",
      tag: "Software",
      title: "Revolutionized Tax Filing Efficiency",
      desc: "We contacted tkxel to accelerate technology development. Initially we were worried that outsourci…",
      image: "/australia.png",
    },
    {
      name: "SOUTHERN Biokupal",
      tag: "Healthcare",
      title: "Developed Custom CRM and Smart Solutions for Data Management",
      desc: "Our smart CRM and automation solutions improved data integrity, reporting, and workflow efficiency.",
      image: "/australia.png",
    },
    {
      name: "NovaTech",
      tag: "Fintech",
      title: "AI-Driven Payment Optimization Platform",
      desc: "Improved transaction accuracy and introduced automated fraud-detection workflows.",
      image: "/australia.png",
    },
    {
      name: "GreenEdge Labs",
      tag: "Sustainability",
      title: "IoT-Based Environmental Monitoring Dashboard",
      desc: "Real-time analytics drastically improved monitoring and regulatory reporting.",
      image: "/australia.png",
    },
    {
      name: "EduPrime",
      tag: "EdTech",
      title: "Smart Learning Management System",
      desc: "A personalized learning engine improved student engagement by 40%.",
      image: "/australia.png",
    },
    {
      name: "MediconX",
      tag: "Medical",
      title: "Automated Lab Report & Analytics Suite",
      desc: "Enabled secure digital lab workflows and improved turnaround time.",
      image: "/australia.png",
    },
    {
      name: "AutoPulse",
      tag: "Automotive",
      title: "Connected Car Telematics Platform",
      desc: "Real-time diagnostics and tracking for enhanced fleet performance.",
      image: "/australia.png",
    },
    {
      name: "RetailMesh",
      tag: "Retail",
      title: "Smart Inventory & POS Automation",
      desc: "Reduced supply-chain delays using predictive ordering algorithms.",
      image: "/australia.png",
    },
    {
      name: "AgroSphere",
      tag: "Agritech",
      title: "Crop Health & Yield Prediction System",
      desc: "AI-powered insights improved crop planning and minimized losses.",
      image: "/australia.png",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center text-center py-24 px-4">

      <h4 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
        Our Customers
      </h4>

      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
        Bringing Vision To Life
      </h2>

      <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
        We are committed to offer tailor-made solutions well-aligned with your goals.
      </p>

      <div className="h-40"></div>

      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10">
        We’ve collaborated with
      </h3>

      //logos
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 opacity-90 mb-24">
        <img src="/australia.png" className="h-12 mx-auto" />
        <img src="/Eu.png" className="h-12 mx-auto" />
        <img src="/uae.png" className="h-12 mx-auto" />
        <img src="/uk.png" className="h-12 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              relative rounded-2xl overflow-hidden shadow-lg bg-white
              ${index % 2 === 1 ? "md:translate-y-6" : "md:-translate-y-4"}
            `}
          >

            <div className="relative group">
              <Image
                src={card.image}
                alt={card.name}
                width={1200}
                height={800}
                className="w-full h-[360px] object-cover transition-all duration-300"
              />

              <div
                className="
                  absolute bottom-4 right-4
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                <Image
                  src="/arrowupright.png" 
                  alt="open icon"
                  width={48}
                  height={48}
                  className="drop-shadow-xl"
                />
              </div>
            </div>


            <div className="p-6">


              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-xl">
                    {card.name}
                  </span>
                </div>

                <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-xl">
                  {card.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600">{card.desc}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
