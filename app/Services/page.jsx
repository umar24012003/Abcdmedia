import Image from "next/image";

export default function MergedLayout() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-10 w-full">
      <div className="w-full lg:w-1/3 ml-3 h-full">
        <div className="bg-[#1F2937] text-white p-6 rounded-2xl shadow-lg mb-10 h-full">
          <h2 className="text-lg font-semibold mb-3">Solutions</h2>

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
              <span
                key={item}
                className="px-4 py-1 bg-gray-700 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3">Expertise</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "UX Design",
              "RPA",
              "DevOps",
              "Internet of Things",
              "Blockchain",
              "AR/VR/MR",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-1 bg-gray-700 rounded-full text-sm"
              >
                {item}
              </span>
            ))}

            <span className="px-4 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-2">
              Data Science
              <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">
                NEXT GEN
              </span>
            </span>

            <span className="px-4 py-1 bg-gray-800 border border-blue-400 rounded-full text-sm flex items-center gap-2">
              Cybersecurity
              <span className="bg-orange-500 text-xs px-2 py-0.5 rounded-full">
                TRENDING
              </span>
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold">Watch Featured Webinar</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/nerfwar.png"
              alt="Featured Webinar"
              width={800}
              height={400}
              className="rounded-b-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3 bg-white p-10 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x">

          <div className="flex flex-col gap-3 px-6">
            <h3 className="font-semibold text-lg text-purple-800">Artificial Intelligence</h3>
            <ul className="space-y-2 text-gray-700">
              <li>AI Agents</li>
              <li>AI Workshop</li>
              <li>Generative AI</li>
              <li>MLOps</li>
              <li>Conversational AI</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6">
            <h3 className="font-semibold text-lg text-purple-800">Digital Marketing</h3>
            <ul className="space-y-2 mt-5 text-gray-700">
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
            <ul className="space-y-2 text-gray-700">
              <li>Word Press</li>
              <li>Shopify</li>
              <li>Custom Code</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6 pt-10">
            <h3 className="font-semibold text-lg text-purple-800">IT Consulting</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Digital Transformation</li>
              <li>Cloud Solutions</li>
              <li>IT Strategy</li>
              <li>System Integration</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 px-6 pt-10">
            <h3 className="font-semibold text-lg text-purple-800">Graphics Design</h3>
            <ul className="space-y-2 text-gray-700">
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
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-center gap-2">
      <img src="usa.png" alt="USA" className="w-5 h-5 object-contain" />
      USA LLC
    </li>
    <li className="flex items-center gap-2">
      <img src="uae.png" alt="UAE" className="w-5 h-5 object-contain" />
      UAE LLC
    </li>
    <li className="flex items-center gap-2">
      <img src="uk.png" alt="UK" className="w-5 h-5 object-contain" />
      UK LTD
    </li>
    <li className="flex items-center gap-2">
      <img src="hongkong.png" alt="HK" className="w-5 h-5 object-contain" />
      HK LTD
    </li>
    <li className="flex items-center gap-2">
      <img src="Eu.png" alt="EU" className="w-5 h-5 object-contain" />
      EU LTD
    </li>
    <li className="flex items-center gap-2">
      <img src="australia.png" alt="AU" className="w-5 h-5 object-contain" />
      AU PTY LTD
    </li>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
}
