const Footer = () => {
    return (
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
            {/* About Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">About TEEM SHE</h3>
              <p className="text-lg text-center">
              At Teemshe, we are a dynamic hub of innovation and creativity — where YOUR cutting-edge ideas come to life. From designing intuitive mobile applications to exploring the transformative power of data science and artificial intelligence, we push boundaries to shape the future. Our passion also extends to sustainable solutions, as we actively engage in renewable energy technologies that drive positive change for our communities and the planet.
              </p>
            </div>
  
            {/* Hours of Operation Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
              <ul className="text-lg space-y-2 text-center">
                <li>Mon-Wed: 10:30am – 10:30pm</li>
                <li>Thurs-Fri: 10:30am – 10:30pm</li>
                <li>Sat: 10:30am – 10:30pm</li>
                <li>Sun: 10:30am – 10:30pm</li>
              </ul>
            </div>
  
            {/* Contact Info Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="text-lg space-y-2 text-center">
                <li>Email: <a href="mailto:info@teemshe.co.za" className="hover:underline">info@teemshe.co.za</a></li>
                <li>Phone: <a href="tel:+2782000510" className="hover:underline">+263782000510</a></li>
                <li>Address: South Africa</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2025 TEEM SHE. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  