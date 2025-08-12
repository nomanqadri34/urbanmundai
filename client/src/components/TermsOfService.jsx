import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the services provided by UrbanMandaiGlobal ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              UrbanMandaiGlobal provides the following digital services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Digital Marketing and SEO services</li>
              <li>Website Design and Development</li>
              <li>Mobile Application Development</li>
              <li>Graphics Design and Branding</li>
              <li>Software Development and IT Solutions</li>
              <li>Consulting and Strategy Services</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services for lawful purposes only</li>
              <li>Respect intellectual property rights</li>
              <li>Not interfere with the proper functioning of our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our services start from Rs. 12,500/- and can scale up to Rs. 2,00,000/- depending on project requirements and scope.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Payment Schedule</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Payment terms are as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>50% advance payment upon project initiation</li>
              <li>30% payment upon project milestone completion</li>
              <li>20% payment upon project delivery and approval</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Late Payments</h3>
            <p className="text-gray-700 leading-relaxed">
              Late payments may result in project delays and additional charges. We reserve the right to suspend services for overdue accounts.
            </p>
          </section>

          {/* Project Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Project Terms and Conditions</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Project Timeline</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Project timelines are estimates and may vary based on complexity, client feedback, and scope changes. We commit to regular communication and updates.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Revisions and Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We include reasonable revisions in our standard pricing. Major scope changes may require additional quotes and timeline adjustments.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Project Deliverables</h3>
            <p className="text-gray-700 leading-relaxed">
              All project deliverables will be provided in standard formats unless otherwise specified. Source files may incur additional charges.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Client Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Upon full payment, clients own the final deliverables. We retain rights to showcase work in our portfolio.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">6.2 Our Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              We retain rights to our proprietary tools, frameworks, and methodologies used in project development.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality and Non-Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We maintain strict confidentiality of all client information and project details. Non-disclosure agreements are available upon request for sensitive projects.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              UrbanMandaiGlobal's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* Warranty and Support */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Warranty and Support</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Warranty Period</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We provide a 30-day warranty period for all deliverables. During this time, we will fix any bugs or issues at no additional cost.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">9.2 Ongoing Support</h3>
            <p className="text-gray-700 leading-relaxed">
              Post-warranty support is available through maintenance packages or hourly rates. We offer 24/7 emergency support for critical issues.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Either party may terminate services with written notice:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>For breach of terms (immediate effect)</li>
              <li>For convenience (30 days written notice)</li>
              <li>Upon project completion and final payment</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              We prefer to resolve disputes through direct communication. If unresolved, disputes will be settled through mediation or arbitration in Nagpur, Maharashtra, India.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by the laws of India. Any legal proceedings shall be subject to the jurisdiction of courts in Nagpur, Maharashtra.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services constitutes acceptance of new terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@urbanmandaiglobal.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +9403737415
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Top Floor Bhai G Complex, Near Vitthal Rukmai Mandir, Mangalwari Peth, Nagpur, Maharashtra, India
              </p>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <a
              href="#home"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 