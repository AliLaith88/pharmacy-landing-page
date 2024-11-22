import { Smile, ShieldCheck, Heart } from "lucide-react";

const aboutPoints = [
  {
    icon: <Smile className="text-emerald-600" size={24} />,
    title: "Patient-Centered Care",
    description:
      "Your health and well-being are at the heart of everything we do.",
  },
  {
    icon: <ShieldCheck className="text-emerald-600" size={24} />,
    title: "Trusted Expertise",
    description:
      "Our team of experienced pharmacists is dedicated to delivering safe and effective healthcare solutions.",
  },
  {
    icon: <Heart className="text-emerald-600" size={24} />,
    title: "Community Focus",
    description:
      "We are proud to serve our community, fostering wellness and promoting a healthier tomorrow.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At [Pharmacy Name], we are more than just a pharmacy. We are your
            trusted partner in health, committed to providing personalized care,
            expert advice, and innovative solutions to meet your unique
            healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition group"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
