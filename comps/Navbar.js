import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePhone, HiPhone, HiOutlineMail, HiMail } from 'react-icons/hi';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickTriggered, setClickTriggered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setActiveDropdown(null);
      setClickTriggered(false);
      setMobileMenuOpen(false);
    }
  };
 useEffect(() => {
  if (mobileMenuOpen) {
    // Show immediately when opened
    setShowMobileMenu(true);
  } else {
    // Delay unmount to allow animation to finish (e.g., 300ms)
    const timeout = setTimeout(() => setShowMobileMenu(false), 300);
    return () => clearTimeout(timeout);
  }
}, [mobileMenuOpen]);

  const handleScroll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const subLinks = [
  [ // ABOUT US
    {
      label: "Company",
      sublinks: [
        { href: "/CompanyPage", label: "Our Mission" },
        { href: "/CompanyPage", label: "Our Team" },
        { href: "/CompanyPage", label: "History" },
      ],
    },
    {
      label: "Leadership",
      sublinks: [
        { href: "/AboutUsPage", label: "CEO" },
        { href: "/AboutUsPage", label: "CFO" },
        { href: "/AboutUsPage", label: "CTO" },
      ],
    },
    {
      label: "Careers",
      sublinks: [
        { href: "/CareersPage", label: "Jobs" },
        { href: "/CareersPage", label: "Internships" },
        { href: "/CareersPage", label: "Apply Now" },
      ],
    },
    {
      label: "Contact",
      sublinks: [
        { href: "/ContactUsPage", label: "Email Us" },
        { href: "/ContactUsPage", label: "Call Us" },
        { href: "/ContactUsPage", label: "Visit Us" },
      ],
    },
  ],
  [ // PRODUCTS & SERVICES
    {
      label: "Software Development",
      sublinks: [
        { href: "/ProductPageSoftwareMobileApps", label: "Mobile App Development" },
        { href: "/ProductPageSoftwareWebsites", label: "Web Development" },
        { href: "/ProductPageSoftwareDataScience", label: "Data Science and ML" },
        { href: "/AIAppsPage", label: "AI Apps" },
      ],
    },
    {
      label: "Systems Development",
      sublinks: [
        { href: "/consulting/engineering", label: "Engineering" },
        { href: "/consulting/digital", label: "Digital Transformation" },
        { href: "/consulting/energy", label: "Energy Efficiency" },
      ],
    },
    {
      label: "Security & Energy Solutions",
      sublinks: [
        { href: "/maintenance/scheduled", label: "Scheduled" },
        { href: "/maintenance/remote", label: "Remote Support" },
        { href: "/maintenance/field", label: "Field Services" },
      ],
    },
    {
      label: "Academic Projects",
      sublinks: [
        { href: "/training/onboarding", label: "Onboarding" },
        { href: "/training/safety", label: "Safety" },
        { href: "/training/specialized", label: "Specialized" },
      ],
    },
  ],
  [ // TRAINING
    {
      label: "Data Science & AI",
      sublinks: [
        { href: "/TrainingDataScience", label: "Basics" },
        { href: "/courses/advanced", label: "Advanced" },
        { href: "/courses/expert", label: "Expert" },
      ],
    },
    {
      label: "Electronics and Robotics",
      sublinks: [
        { href: "/certification/tech", label: "Tech Certs" },
        { href: "/certification/industry", label: "Industry Standards" },
        { href: "/certification/global", label: "Global Certs" },
      ],
    },
    {
      label: "Technology for Kids",
      sublinks: [
        { href: "/workshops/inperson", label: "In-Person" },
        { href: "/workshops/online", label: "Online" },
        { href: "/workshops/live", label: "Live Demos" },
      ],
    },
  ],
];

  
  

  const mainLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/products-services", label: "PRODUCTS & SERVICES" },
    { href: "/training", label: "TRAINING" },
  ];

  return (
    <div className="relative z-50">
      
      <div className="flex justify-between items-center h-[60px] px-5 bg-white w-full sticky top-0 z-50 shadow-md">
        {/* Left Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/logopure.png" alt="Left Logo" width={50} height={50} />
          </Link>
          <Link href="/">
            <Image src="/logotext.png" alt="Logo Text" height={50} width={209} className="hidden sm:block -mt-3" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-20 font-semibold relative z-50">
          {mainLinks.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown(idx);
                setClickTriggered(false);
              }}
              onMouseLeave={() => {
                if (!clickTriggered) setActiveDropdown(null);
              }}
            >
              <span
                onClick={() => {
                  if (activeDropdown === idx && clickTriggered) {
                    setActiveDropdown(null);
                    setClickTriggered(false);
                  } else {
                    setActiveDropdown(idx);
                    setClickTriggered(true);
                  }
                }}
                className={`inline-block px-6 py-2 cursor-pointer transition-all duration-300 transform origin-left
                  ${
                    activeDropdown === idx
                      ? 'text-white bg-gradient-to-r from-[#00fca8] to-[#1cdaff] -skew-x-12'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-[#00fca8] to-[#1cdaff] hover:text-white hover:bg-gradient-to-r hover:from-[#00fca8] hover:to-[#1cdaff] hover:-skew-x-12'
                  }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Contact Icons */}
        <div className="hidden sm:flex items-center space-x-8 mr-10 text-2xl">
          <div className="group cursor-pointer">
            <HiOutlinePhone className="text-[#1cdaff] group-hover:hidden" />
            <HiPhone className="text-[#1cdaff] hidden group-hover:inline" />
          </div>
          <div className="group cursor-pointer">
            <HiOutlineMail className="text-[#1cdaff] group-hover:hidden" />
            <HiMail className="text-[#1cdaff] hidden group-hover:inline" />
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src="/logotext.png" alt="Centered Logo" height={60} width={170} />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="sm:hidden z-50">
          <button
  onClick={() => {
    if (mobileMenuOpen) {
      // closing, so reset submenu
      setMobileActiveIndex(null);
      setMobileMenuOpen(false);
    } else {
      // opening
      setMobileMenuOpen(true);
    }
  }}
>

          {mobileMenuOpen ? (
            <FiX size={28} className="text-[#00fca8]" />
          ) : (
            <FiMenu size={28} className="text-[#1cdaff]" />
          )}

          </button>
        </div>
      </div>

      {/* Dropdown (Desktop) */}
      {activeDropdown !== null && (
  <div
    ref={dropdownRef}
    className="fixed top-[60px] left-0 w-screen h-[50vh] bg-white/10 backdrop-blur-md z-40 flex justify-center items-center"
  >
    <div className="flex w-[90%] justify-between space-x-6">
{subLinks[activeDropdown]?.map((linkGroup, i) => {
  const leftImgSrc = `/images/dropdowns/${activeDropdown}-${i}a.png`;
  const rightImgSrc = `/images/dropdowns/${activeDropdown}-${i}b.png`;

  return (
    <div
      key={i}
      className="skew-box group border border-gray-300 rounded-md p-3 bg-white/10 backdrop-blur-md shadow-md relative overflow-hidden"
    >
      {/* Left image slides in on hover */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-6 transition-transform duration-300 ease-in-out">
        <Image src={leftImgSrc} alt={`Left image ${activeDropdown}-${i}`} width={60} height={80} />
      </div>

      {/* Right image slides in on hover */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full group-hover:-translate-x-6 transition-transform duration-300 ease-in-out">
        <Image src={rightImgSrc} alt={`Right image ${activeDropdown}-${i}`} width={60} height={80} />
      </div>

      <div className="unskew-content h-full flex flex-col justify-start">
        <h3 className="text-lg font-semibold text-center mb-2 text-transparent bg-gradient-to-r from-[#00fca8] to-[#1cdaff] bg-clip-text">
          {linkGroup.label}
        </h3>
        <ul className="space-y-1 text-center">
          {linkGroup.sublinks?.map((sublink, j) => (
            <li key={j}>
              <Link href={sublink.href}>
                <span className="text-[#00fca8] hover:text-[#1cdaff] transition duration-200 cursor-pointer">
                  {sublink.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
})}



    </div>
  </div>
)}




      {/* Mobile Dropdown */}
{/* Mobile Dropdown */}
{showMobileMenu && (
  <div
    className={`sm:hidden fixed top-[60px] left-0 w-full z-40 px-4 py-3 flex flex-col items-center space-y-4
      transition-all duration-300 ease-in-out
      ${
        mobileMenuOpen
          ? 'opacity-100 max-h-screen scale-y-100'
          : 'opacity-0 max-h-0 scale-y-0 pointer-events-none'
      }
      origin-top
    `}
    style={{ transformOrigin: 'top' }}
  >
    {mainLinks.map((item, idx) => {
      const isActive = mobileActiveIndex === idx;

      return (
        <div key={idx} className="w-full flex flex-col items-center">
          <div
            className={`w-full rounded-2xl shadow-2xl px-5 py-3 transition-colors duration-500 ${
              isActive
                ? 'bg-white'               // Solid white when active
                : 'backdrop-blur-md bg-white/30' // Frosted glass when inactive
            }`}
          >
            <button
              onClick={() => setMobileActiveIndex(isActive ? null : idx)}
              className="block text-center text-transparent bg-gradient-to-r from-[#00fca8] to-[#1cdaff] bg-clip-text text-lg font-semibold w-full"
            >
              {item.label}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out transform origin-top w-full overflow-hidden ${
                isActive ? 'scale-y-100 opacity-100 mt-3' : 'scale-y-0 opacity-0 h-0'
              }`}
            >
              <div className="space-y-3">
                {subLinks[idx]?.map((group, gIdx) => (
                  <div key={gIdx} className="text-center">
                    <p className="text-[#00fca8] font-semibold">{group.label}</p>
                    <ul className="space-y-1 mt-1">
                      {group.sublinks.map((sublink, sIdx) => (
                        <li key={sIdx}>
                          <Link href={sublink.href}>
                            <span className="text-[#1cdaff] text-sm">
                              {sublink.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    })}

    <div className="w-[50%] mt-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg px-4 py-3 flex justify-around items-center">
  <div className="text-2xl text-[#1cdaff]">
    <HiPhone />
  </div>
  <div className="text-2xl text-[#1cdaff]">
    <HiMail />
  </div>
</div>

  </div>
)}









    </div>
  );
};

export default Navbar;
