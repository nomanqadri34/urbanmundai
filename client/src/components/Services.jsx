const Services = () => {
  const services = [
    {
      title: "Digital Marketing Solution",
      description: "Having easy access to the actual lead generation form is paramount to increasing the number of viable leads through your website.",
      icon: "📈",
      color: "from-[#3b82f6] to-[#2563eb]"
    },
    {
      title: "Web Design and Application",
      description: "A professional and clean website is essential for any business to succeed in the online realm.",
      icon: "💻",
      color: "from-[#10b981] to-[#059669]"
    },
    {
      title: "Development Software / Billing Software / CRM",
      description: "Build relationships and share your company values with well-crafted content tailored to your brand",
      icon: "⚙️",
      color: "from-[#8b5cf6] to-[#7c3aed]"
    },
    {
      title: "Graphics Design",
      description: "Create creative graphics post like business post, festival post, promotion post, banners etc.",
      icon: "🎨",
      color: "from-[#ec4899] to-[#db2777]"
    },
    {
      title: "App Development",
      description: "Mobile-first solutions that engage your customers and drive business growth across all devices.",
      icon: "📱",
      color: "from-[#f97316] to-[#ea580c]"
    },
    {
      title: "SEO/SEM Services",
      description: "Improve your search engine rankings and drive organic traffic to your website with our proven strategies.",
      icon: "🔍",
      color: "from-[#ef4444] to-[#dc2626]"
    }
  ];

  const pricingInfo = {
    startingPrice: "Rs. 12,500/-",
    maxPrice: "Rs. 2,00,000/-",
    description: "We offer a range of services tailored to your budget, with fees starting at Rs. 12,500/- and scaling up to Rs. 2,00,000/-. Get in touch to discuss how we can help you achieve your goals."
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {pricingInfo.description}
          </p>

          {/* Pricing Highlight */}
          <div className="mt-6 md:mt-8 bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md md:shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              What We Provide
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">
              Take the first step to digital success promoting your business
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 text-base md:text-lg">
              <span className="text-[#059669] font-medium">Starting from {pricingInfo.startingPrice}</span>
              <span className="text-gray-400">|</span>
              <span className="text-[#2563eb] font-medium">Up to {pricingInfo.maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg md:rounded-xl p-6 md:p-8 shadow-md md:shadow-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Highlights */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563eb] mb-2">14+</div>
            <div className="text-gray-600 text-xs md:text-sm">Years Exp.</div>
            <div className="text-gray-800 font-medium text-sm md:text-base">Video Creation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ea580c] mb-2">12+</div>
            <div className="text-gray-600 text-xs md:text-sm">Years Exp.</div>
            <div className="text-gray-800 font-medium text-sm md:text-base">Marketing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#db2777] mb-2">12+</div>
            <div className="text-gray-600 text-xs md:text-sm">Years Exp.</div>
            <div className="text-gray-800 font-medium text-sm md:text-base">Theater Ads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#059669] mb-2">7+</div>
            <div className="text-gray-600 text-xs md:text-sm">Years Exp.</div>
            <div className="text-gray-800 font-medium text-sm md:text-base">Software & IT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 