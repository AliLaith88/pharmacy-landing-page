import {
  Pill,
  Stethoscope,
  Heart,
  Leaf,
  MessageCircle,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: <Pill className="text-emerald-600" size={24} />,
    title: "Prescription Services",
    description:
      "Quick and accurate prescription filling with expert consultation.",
  },
  {
    icon: <Stethoscope className="text-emerald-600" size={24} />,
    title: "Health Screenings",
    description: "Regular health check-ups and vital signs monitoring.",
  },
  {
    icon: <Heart className="text-emerald-600" size={24} />,
    title: "Wellness Products",
    description:
      "Curated selection of vitamins, supplements, and wellness items.",
  },
  {
    icon: <Leaf className="text-emerald-600" size={24} />,
    title: "Natural Remedies",
    description: "Traditional and holistic healthcare solutions.",
  },
  {
    icon: <MessageCircle className="text-emerald-600" size={24} />,
    title: "Expert Consultation",
    description: "Personal health advice from our experienced pharmacists.",
  },
  {
    icon: <Clock className="text-emerald-600" size={24} />,
    title: "Extended Hours",
    description: "Convenient operating hours to serve you better.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive healthcare services tailored to your needs,
            combining modern medicine with traditional wellness practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition group"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
