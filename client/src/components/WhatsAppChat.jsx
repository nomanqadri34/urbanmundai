import React, { useState } from 'react';

const WhatsAppChat = () => {
    const [selectedService, setSelectedService] = useState('');
    const [message, setMessage] = useState('');

    const services = [
        'Digital Marketing',
        'Website Design',
        'App Development',
        'Graphics Design',
        'Software Development',
        'SEO Services',
        'Other'
    ];

    const handleWhatsAppRedirect = () => {
        const phoneNumber = "9403737415";
        let defaultMessage = "Hi! I'm interested in your digital marketing services. Can you help me?";

        if (selectedService && selectedService !== 'Other') {
            defaultMessage = `Hi! I'm interested in your ${selectedService} services. Can you provide more information?`;
        } else if (message.trim()) {
            defaultMessage = message;
        }

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Chat with us on WhatsApp
                    </h1>
                    <p className="text-lg text-gray-600">
                        Get instant support and consultation for your digital needs
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-4"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Side - Chat Interface */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                WhatsApp Support
                            </h2>
                            <p className="text-gray-600">
                                Available 24/7 for instant assistance
                            </p>
                        </div>

                        {/* Service Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Select Service (Optional)
                            </label>
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                <option value="">Choose a service...</option>
                                {services.map((service) => (
                                    <option key={service} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Custom Message */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Custom Message (Optional)
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* WhatsApp Button */}
                        <button
                            onClick={handleWhatsAppRedirect}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                            <span>Start WhatsApp Chat</span>
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            You'll be redirected to WhatsApp with a pre-filled message
                        </p>
                    </div>

                    {/* Right Side - Information */}
                    <div className="space-y-6">

                        {/* Quick Contact */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Quick Contact
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <p className="text-gray-600">+9403737415</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <p className="text-gray-600">info@urbanmandaiglobal.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Response Time
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">WhatsApp</span>
                                    <span className="text-green-600 font-semibold">Instant</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Phone</span>
                                    <span className="text-blue-600 font-semibold">Within 1 hour</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Email</span>
                                    <span className="text-orange-600 font-semibold">Within 24 hours</span>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Business Hours
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Monday - Friday</span>
                                    <span className="font-medium text-gray-900">9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="font-medium text-gray-900">10:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="font-medium text-gray-900">Emergency Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Why WhatsApp */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Why WhatsApp?
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Instant messaging and file sharing</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Voice and video call options</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Group chat for team discussions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Available on all devices</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center pt-12">
                    <a
                        href="/"
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
    );
};

export default WhatsAppChat; 