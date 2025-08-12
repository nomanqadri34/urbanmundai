const About = () => {
  const whyChooseUs = [
    "Portfolio & Experience",
    "Reputation & Reviews",
    "Expertise & Skills",
    "Customization & Flexibility",
    "Communication",
    "Responsive Design",
    "SEO Friendly Website",
    "Cost & Value",
    "Support & Maintenance",
    "Timeline & Deadlines"
  ];

  const workingProcess = [
    {
      step: "Discovery",
      description: "We start by understanding your business goals, target audience, and specific needs. It's the first step we take together to learn about you and your business.",
      icon: "🔍"
    },
    {
      step: "Planning & Strategy",
      description: "Based on the gathered information, we create a comprehensive plan and strategy for your web design and development project.",
      icon: "📋"
    },
    {
      step: "Testing & Quality Assurance",
      description: "Rigorous testing is conducted to ensure that your website functions flawlessly across different devices and browsers.",
      icon: "✅"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[#f97316] to-[#ec4899] bg-clip-text text-transparent">
                UrbanMandaiGlobal
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
              UrbanMandaiGlobal Is One Stop Solution For All Shop Owners And SMEs. Our High Power Strategies Tools Makes You Do Increase Sales /Increases Brand Awareness / Increases Growth. We Are Into Digital Marketing , Website Design & Application, Software Development since 2015!
            </p>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Our Services:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm md:text-base">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Digital Marketing
                </li>
                <li className="flex items-center text-gray-600 text-sm md:text-base">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center text-gray-600 text-sm md:text-base">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  App Development
                </li>
                <li className="flex items-center text-gray-600 text-sm md:text-base">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Graphics Design
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 md:p-8 rounded-xl md:rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
              Why Choose UrbanMandaiGlobal
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">
              Over 1500+ happy clients
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">
              UrbanMandaiGlobal can significantly impact your brand image, user experience, and overall online success. Here are some factors to consider when choosing UrbanMandaiGlobal:
            </p>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center text-xs md:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Working Process */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Working Process
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
            Our Digital Marketing and Website development process is carefully crafted to ensure that we deliver exceptional results to businesses all over the World.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {workingProcess.map((process, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-100">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 md:mb-6">
                  {process.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  {process.step}
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}

      </div>
    </section>
  );
};

export default About; 