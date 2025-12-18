import { useState } from "react";

export default function ProductPageSoftwareWebsites() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      {/* LARGE SCREEN: visible sm and up */}
      <div className="hidden sm:block">
        <div className="relative min-h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/pagevid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto h-screen">
            <div className="flex gap-4 h-[75%]">
              {/* Main Info Box */}
              <div
                className={`bg-white p-8 rounded-[24px] flex flex-col justify-center relative transition-all duration-700 ease-in-out shadow-sm ${
                  hovered ? "shadow-2xl bg-gray-100 z-20" : ""
                }`}
                style={{
                  width: hovered ? "750%" : "66.666%",
                  boxSizing: "border-box",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <h1 className="text-4xl font-bold mb-4">
                  Powerful Websites, LMSs & ERP Solutions <br /> Built for Your Business!
                </h1>
                <p className="text-gray-600 mb-6">
                  From sleek websites to advanced learning management systems and
                  enterprise resource planning software — we deliver digital solutions
                  that are fast, scalable, and user-friendly. Perfect for businesses,
                  schools, and organisations that want to grow in the digital age.
                </p>
                <button
                  className="px-6 py-3 rounded-md font-semibold text-white
                             bg-gradient-to-r from-[#7b2ff7] to-[#f107a3]
                             transition-transform duration-300 transform hover:scale-105
                             hover:brightness-110 shadow-md hover:shadow-xl"
                >
                  Get Started
                </button>
              </div>

              {/* Image Box */}
              <div
                className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] p-8 rounded-[24px] flex justify-center items-center relative"
                style={{
                  width: "33.333%",
                  transform: hovered ? "translateX(120%)" : "translateX(0)",
                  opacity: hovered ? 0 : 1,
                  transition: "transform 700ms ease-in-out, opacity 700ms ease-in-out",
                }}
              >
                <img
                  src="/websitemockup.png"
                  alt="Web / ERP / LMS Mockup"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex gap-4 h-[25%] mt-4">
              <div
                className="rounded-[24px]"
                style={{
                  width: "66.666%",
                  background: "linear-gradient(to right, #7b2ff7, #f107a3)",
                }}
              />
              <div
                className="p-6 text-black bg-white rounded-[24px] flex flex-col justify-center"
                style={{ width: "33.333%" }}
              >
                <h2 className="text-xl font-semibold mb-2">Affordable Packages</h2>
                <p>
                  Get your professional website, LMS, or ERP system starting from just
                  R20,000!*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY: visible only below sm */}
      <div className="block sm:hidden">
        <div className="relative min-h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/pagevid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 container mx-auto p-4 h-screen flex flex-col">
            {/* Info Section */}
            <div
              className={`bg-white rounded-[24px] p-6 flex flex-col justify-center mb-4
                transition-all duration-700 ease-in-out shadow-sm ${
                  hovered ? "shadow-2xl bg-gray-100 z-20" : ""
                }`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h1 className="text-3xl font-bold mb-4">
                Websites, LMSs & ERP Solutions <br /> Tailored for You!
              </h1>
              <p className="text-gray-600 mb-6 text-sm">
                Whether you need a high-performance website, a learning management
                system, or an ERP — we design solutions that combine speed,
                scalability, and simplicity.
              </p>
              <button
                className="mx-auto px-6 py-3 rounded-md font-semibold text-white
                           bg-gradient-to-r from-[#7b2ff7] to-[#f107a3]
                           transition-transform duration-300 transform hover:scale-105 hover:brightness-110
                           shadow-md hover:shadow-xl"
              >
                Get Started
              </button>
            </div>

            {/* Mockup Image */}
            <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] rounded-[24px] flex justify-center items-center p-6">
              <img
                src="/websitemockup.png"
                alt="Web / ERP / LMS Mockup"
                className="max-h-60 max-w-full object-contain"
              />
            </div>

            {/* Pricing */}
            <div className="w-full p-6 text-black bg-white rounded-[24px] flex flex-col justify-center mt-4">
              <h2 className="text-lg font-semibold mb-2">Affordable Packages</h2>
              <p className="text-sm">
                Websites, LMSs & ERPs from as little as R20,000!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
