import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      title: "Global HQ",
      address: "260 Wellesley st east Toronto ON 260 Wellesley st east",
      phone: "+1(647)558-8048",
      color: "from-[#3b82f6] to-[#2563eb]"
    },
    {
      title: "Corporate Office",
      address: "Office No - 5 Mohan Naik Building Opposite BSNL Office Naigaon Dadar East - 400014",
      phone: "91- 90496 17865",
      color: "from-green-500 to-green-600"
    },
    {
      title: "UrbanMandai HQ",
      address: "Top Floor Bhai G Complex Near Vitthal Rukmai Mandir Mangalwari Peth Nagpur [ Umred ]",
      phone: "91- 9403737415",
      color: "from-[#f97316] to-[#ea580c]"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your digital journey? Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="+1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="graphics-design">Graphics Design</option>
                    <option value="software-development">Software Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:from-[#2563eb] hover:to-[#8b5cf6] transition-all text-sm md:text-base font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Office Locations
            </h3>

            {offices.map((office, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${office.color} p-4 md:p-6 rounded-lg md:rounded-xl text-white`}
              >
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {office.title}
                </h4>
                <p className="text-white/90 mb-2 md:mb-3 leading-relaxed text-sm md:text-base">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone}`}
                  className="inline-flex items-center text-white/90 hover:text-white transition-colors text-sm md:text-base"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: {office.phone}
                </a>
              </div>
            ))}

            {/* Quick Contact */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Quick Contact
              </h4>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="tel:+9403737415"
                  className="flex items-center text-gray-700 hover:text-[#2563eb] transition-colors text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +9403737415
                </a>
                <a
                  href="mailto:info@urbanmandaiglobal.com"
                  className="flex items-center text-gray-700 hover:text-[#2563eb] transition-colors text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@urbanmandaiglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Find Us on the Map
          </h3>
          <div className="bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden shadow-md map-container">
            <div className="relative h-64 md:h-80 lg:h-96">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UrbanMandaiGlobal Office Location"
                className="w-full h-full"
              ></iframe>

              {/* Map Overlay with Company Info */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 md:p-4 shadow-lg max-w-xs professional-hover">
                <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2">
                  UrbanMandaiGlobal
                </h4>
                <p className="text-gray-600 text-xs md:text-sm mb-2">
                  Your Digital Success Partner
                </p>
                <div className="flex items-center text-xs text-[#2563eb]">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View on Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 