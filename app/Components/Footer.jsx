import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B232E] text-white mt-20 pt-12 pb-6 px-6 md:px-16">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* ADVISORY */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">ADVISORY</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Discovery Workshop</li>
            <li>Market Research</li>
            <li>Technical Feasibility Study</li>
            <li>Product Strategy</li>
            <li>UI/UX Design</li>
            <li>Digital Transformation</li>
          </ul>
        </div>

        {/* AI */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">ARTIFICIAL INTELLIGENCE</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>AI Agents</li>
            <li>AI Workshop</li>
            <li>AI PoC & MVP</li>
            <li>Generative AI</li>
            <li>Machine Learning</li>
            <li>MLOps</li>
            <li>Conversational AI</li>
          </ul>
        </div>

        {/* ENGINEERING */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">ENGINEERING</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Product Development</li>
            <li>Application Development</li>
            <li>Application Modernization</li>
            <li>POC Development</li>
            <li>AI Software Development</li>
            <li>Cloud Engineering</li>
            <li>Cloud Migration</li>
          </ul>
        </div>

        {/* BUSINESS */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">BUSINESS ENABLEMENT</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Accounts & Finance</li>
            <li>HR & Recruitment</li>
            <li>Digital Marketing & Branding</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">SOLUTIONS</h3>

          <div className="flex flex-wrap gap-2 mb-8">
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
              <span
                key={item}
                className="bg-[#2A3340] text-gray-200 px-3 py-1.5 rounded-full text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 tracking-wide">TRUSTED BY</h3>
            <div className="flex items-center gap-3">
              <Image
                src="/clutch-logo.png"
                alt="clutch"
                width={90}
                height={35}
                className="opacity-90"
              />
              <span className="text-gray-300 text-xs">4.9/5.0 ★★★★★</span>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ADDRESS */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">ADDRESS</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            ABCDMEDIA WAZIRABAD<br />
            ,<br />
            
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">SUBSCRIBE TO NEWSLETTER</h3>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="📧 Get news by email"
              className="bg-transparent border border-gray-600 text-gray-200 px-4 py-2.5 rounded-xl w-full outline-none text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-5 rounded-xl text-white font-medium text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h3 className="font-semibold text-lg mb-4 tracking-wide">FOLLOW US</h3>
          <div className="flex gap-3">
            {["linkedin", "facebook", "instagram", "soundcloud", "spotify"].map(
              (icon) => (
                <div
                  key={icon}
                  className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-lg hover:bg-gray-700 transition cursor-pointer"
                >
                  <Image
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    width={18}
                    height={18}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-3">
          <Image src="/tkxel-logo.png" alt="tkxel" width={90} height={35} />
          <Image src="/dmca.png" alt="dmca" width={80} height={25} />
          <span className="text-gray-300 text-xs">
            © 2025 tkxel | All rights reserved.
          </span>
        </div>

        <div className="flex flex-wrap gap-5 text-gray-300 text-xs">
          {[
            "Customers",
            "Podcasts",
            "Webinars",
            "News",
            "Media",
            "Press Kit",
            "Site Map",
            "Privacy Policy",
            "Terms Of Use",
          ].map((item) => (
            <span key={item} className="cursor-pointer hover:text-white">
              {item}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
