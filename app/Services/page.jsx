import Image from "next/image";

export default function MergedLayout() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full items-stretch min-h-[600px] h-full">

      {/* LEFT PANEL */}
      <div className="flex-[0.8] h-full ml-3 flex">
        <div className="bg-purple-900 text-white p-6 rounded-2xl shadow-xl h-full flex flex-col border border-purple-300">

          <h2 className="text-lg font-semibold mb-3 text-purple-200">Solutions</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Microsoft Dynamics 365",
              "Salesforce",
              "AWS",
              "Power BI",
              "SAP",
              "ServiceNow",
              "Shopify",
              "MuleSoft",
            ].map((item) => (
              <span key={item} className="px-4 py-1 bg-purple-700 rounded-full text-sm shadow">
                {item}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3 text-purple-200">Expertise</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "UX Design",
              "RPA",
              "DevOps",
              "Internet of Things",
              "Blockchain",
              "AR/VR/MR",
            ].map((item) => (
              <span key={item} className="px-4 py-1 bg-purple-700 rounded-full text-sm shadow">
                {item}
              </span>
            ))}

            <span className="px-4 py-1 bg-purple-700 rounded-full text-sm flex items-center gap-2 shadow">
              Data Science
              <span className="bg-purple-300 text-purple-900 text-xs px-2 py-0.5 rounded-full">
                NEXT GEN
              </span>
            </span>

            <span className="px-4 py-1 bg-purple-800 border border-purple-300 rounded-full text-sm flex items-center gap-2 shadow">
              Cybersecurity
              <span className="bg-purple-300 text-purple-900 text-xs px-2 py-0.5 rounded-full">
                TRENDING
              </span>
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-purple-200">Watch Featured Webinar</h3>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-85 h-54 items-center justify-center">
              <Image
                src="/nerfwar.png"
                alt="Featured Webinar"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex-grow"></div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-[1.2] bg-white p-10 rounded-2xl shadow-xl h-full flex flex-col border border-purple-200 flex">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-purple-200 flex-grow">

          <div className="flex flex-col gap-3 px-6">
            <h3 className="font-semibold text-lg text-purple-800">Artificial Intelligence</h3>
            <ul className="space-y-2 text-purple-900">
              <li>AI Agents</li>
              <li>AI Workshop</li>
              <li>Generative AI</li>
              <li>MLOps</li>
              <li>Conversational AI</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6">
            <h3 className="font-semibold text-lg text-purple-800">Digital Marketing</h3>
            <ul className="space-y-2 mt-5 text-purple-900">
              <li>Media Buying</li>
              <li>SEO</li>
              <li>SMM</li>
              <li>ORM</li>
              <li>Email Marketing</li>
              <li>Content Strategy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6">
            <h3 className="font-semibold text-lg text-purple-800">Web Development</h3>
            <ul className="space-y-2 text-purple-900">
              <li>Word Press</li>
              <li>Shopify</li>
              <li>Custom Code</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6 pt-10">
            <h3 className="font-semibold text-lg text-purple-800">IT Consulting</h3>
            <ul className="space-y-2 text-purple-900">
              <li>Digital Transformation</li>
              <li>Cloud Solutions</li>
              <li>IT Strategy</li>
              <li>System Integration</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6 pt-10">
            <h3 className="font-semibold text-lg text-purple-800">Graphics Design</h3>
            <ul className="space-y-2 text-purple-900">
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Content Design</li>
              <li>Logo Design</li>
              <li>Banners/Flyers</li>
              <li>Packaging</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6 pt-10">
            <h3 className="font-semibold text-lg text-purple-800">Company Formation</h3>
            <ul className="space-y-2 text-purple-900">
              {[
                { flag: "usa.png", label: "USA LLC" },
                { flag: "uae.png", label: "UAE LLC" },
                { flag: "uk.png", label: "UK LTD" },
                { flag: "hongkong.png", label: "HK LTD" },
                { flag: "Eu.png", label: "EU LTD" },
                { flag: "australia.png", label: "AU PTY LTD" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <img src={item.flag} alt={item.label} className="w-5 h-5 object-contain" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
