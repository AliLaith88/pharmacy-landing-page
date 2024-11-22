import { Heart, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Your Health Journey,
              <span className="text-emerald-600"> Our Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience personalized care and expert guidance at Shams
              Pharmacy. We blend traditional wisdom with modern healthcare
              solutions for your wellbeing.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition">
                Get Started
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="flex items-center gap-2">
                <Heart className="text-emerald-600" />
                <div>
                  <div className="font-semibold">15k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-emerald-600" />
                <div>
                  <div className="font-semibold">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-emerald-600" />
                <div>
                  <div className="font-semibold">50+</div>
                  <div className="text-sm text-gray-600">Expert Staff</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1000"
              alt="Pharmacist helping customer"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Award className="text-emerald-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Certified Excellence</div>
                  <div className="text-sm text-gray-600">
                    Trusted Healthcare Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
