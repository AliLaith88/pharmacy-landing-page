import { Star } from "lucide-react";
import placeholderImg from "../images/placeholder.png";
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content:
      "The staff at Value shams Pharmacy always goes above and beyond. Their personalized advice has made a real difference in my health journey.",
  },
  {
    name: "Michael Chen",
    role: "Wellness Enthusiast",
    content:
      "I appreciate their holistic approach to healthcare. They offer both traditional and natural remedies, helping me make informed decisions.",
  },
  {
    name: "Emma Davis",
    role: "Health Coach",
    content:
      "As a health professional, I highly recommend shams Pharmacy. Their knowledge and commitment to customer care is outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experiences with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={placeholderImg}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
