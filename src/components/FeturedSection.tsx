import {
  FileText,
  CircleDollarSign,
  Cloud,
  Users,
  Shield,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FileText size={60} />,
      title: "Digital Will Creation",
      desc: "Create a comprehensive digital will with detailed asset allocation and inheritance instructions.",
      path: "/features/digital-will",
    },
    {
      icon: <CircleDollarSign size={60} />,
      title: "Asset Management",
      desc: "Document all your assets property, investments, bank accounts, digital assets, and more.",
      path: "/features/asset-management",
    },
    {
      icon: <Cloud size={60} />,
      title: "Funeral Wishes",
      desc: "Record detailed funeral and memorial service preferences so your wishes are honored.",
      path: "/features/funeral-wishes",
    },
    {
      icon: <Users size={60} />,
      title: "Executor Management",
      desc: "Designate trusted executors who will carry out your wishes and manage your estate.",
      path: "/features/executor-management",
    },
    {
      icon: <Shield size={60} />,
      title: "Secure Access",
      desc: "After verification of death, authorized executors gain secure access to all necessary information.",
      path: "/features/secure-access",
    },
    {
      icon: <Smartphone size={60} />,
      title: "Device-Only Storage",
      desc: "Your data never leaves your device. No cloud. No servers. Complete privacy guaranteed.",
      path: "/features/device-storage",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-[#f5f8ff] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#1e2332]">
            Everything You Need to{" "}
            <span className="gradient-text">Protect What Matters</span>
          </h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Comprehensive tools to document your legacy, wishes, and ensure your
            loved ones are taken care of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="feature-card-premium group p-8 bg-white border border-[#e2e8f0] rounded-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-glow cursor-pointer block"
            >
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-[#1e2332] group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                {feature.desc}
              </p>
              <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
