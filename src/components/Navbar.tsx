import { useState } from "react";
import { Phone, Clock, MapPin, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuDrop = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-emerald-600" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-emerald-600" />
              <span>Mon-Sat: 8AM-9PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-emerald-600" />
              <span>123 Wellness Street, Health City</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4 px-4 md:px-0">
          <div className="text-2xl font-semibold text-emerald-700">
            Shams Pharmacy
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-emerald-600">
              Services
            </a>

            <a href="#about" className="hover:text-emerald-600">
              About
            </a>
            <a href="#contact" className="hover:text-emerald-600">
              Contact
            </a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
              Shop Now
            </button>
          </div>

          <button className="md:hidden">
            <Menu size={24} onClick={handleMenuDrop} />
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center gap-4 text-lg py-4 md:hidden">
            <a href="#services" className="hover:text-emerald-600">
              Services
            </a>

            <a href="#about" className="hover:text-emerald-600">
              About
            </a>

            <a href="#contact" className="hover:text-emerald-600">
              Contact
            </a>

            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">
              Shop Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
