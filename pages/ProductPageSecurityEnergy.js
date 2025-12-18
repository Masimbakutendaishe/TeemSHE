import { useState } from "react";

export default function ProductPageSoftware() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      {/* LARGE SCREEN: visible sm and up */}
      <div className="hidden sm:block">
        {/* Paste your entire original large screen code here unchanged */}
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
                  Innovative Mobile App Development <br /> Tailored to your needs!
                </h1>
                <p className="text-gray-600 mb-6">
                  We craft stunning mobile experiences with cutting-edge technology.
                  Our solutions are designed to deliver seamless performance and
                  exceptional user engagement across all platforms.
                </p>
                <button
                  className="px-6 py-3 rounded-md font-semibold text-white
                             bg-gradient-to-r from-[#00fca8] to-[#1cdaff]
                             transition-transform duration-300 transform hover:scale-105
                             hover:brightness-110 shadow-md hover:shadow-xl"
                >
                  Get Started
                </button>
              </div>

              <div
                className="bg-gradient-to-r from-[#00fca8] to-[#1cdaff] p-8 rounded-[24px] flex justify-center items-center relative"
                style={{
                  width: "33.333%",
                  transform: hovered ? "translateX(120%)" : "translateX(0)",
                  opacity: hovered ? 0 : 1,
                  transition: "transform 700ms ease-in-out, opacity 700ms ease-in-out",
                }}
              >
                <img
                  src="/appmockup.png"
                  alt="App Mockup"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="flex gap-4 h-[25%] mt-4">
              <div
                className="rounded-[24px]"
                style={{
                  width: "66.666%",
                  background: "linear-gradient(to right,  #00fca8, #1cdaff)",
                }}
              />
              <div
                className="p-6 text-black bg-white rounded-[24px] flex flex-col justify-center"
                style={{
                  width: "33.333%",
                }}
              >
                <h2 className="text-xl font-semibold mb-2">Flexible Pricing Options</h2>
                <p>Get fast, beautiful apps from as litle as 15000 R! * .</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY: visible only below sm */}
      <div className="block sm:hidden">
        {/* Your mobile optimized code goes here, for example: */}
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
            <div
              className={`bg-white rounded-[24px] p-6 flex flex-col justify-center mb-4
                transition-all duration-700 ease-in-out shadow-sm ${
                  hovered ? "shadow-2xl bg-gray-100 z-20" : ""
                }`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h1 className="text-3xl font-bold mb-4">
                Innovative Mobile App Development <br /> Tailored to your needs!
              </h1>
              <p className="text-gray-600 mb-6 text-sm">
                We craft stunning mobile experiences with cutting-edge technology.
                Our solutions ensure seamless performance and exceptional user engagement across all platforms.
              </p>
              <button
                className="mx-auto px-6 py-3 rounded-md font-semibold text-white
                           bg-gradient-to-r from-[#00fca8] to-[#1cdaff]
                           transition-transform duration-300 transform hover:scale-105 hover:brightness-110
                           shadow-md hover:shadow-xl"
              >
                Get Started
              </button>
            </div>

            <div
              className="bg-gradient-to-r from-[#00fca8] to-[#1cdaff] rounded-[24px] flex justify-center items-center p-6"
            >
              <img
                src="/appmockup.png"
                alt="App Mockup"
                className="max-h-60 max-w-full object-contain"
              />
            </div>

            <div className="w-full p-6 text-black bg-white rounded-[24px] flex flex-col justify-center mt-4">
              <h2 className="text-lg font-semibold mb-2">Flexible Pricing Options</h2>
              <p className="text-sm">Get fast, beautiful apps from as little as 15000 R!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
