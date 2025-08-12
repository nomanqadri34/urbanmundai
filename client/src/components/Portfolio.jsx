const Portfolio = () => {
    const portfolioItems = [
        {
            title: "Digital Marketing",
            category: "Marketing",
            description: "A social media marketing strategy is a summary of everything you plan to do and hope to achieve on social media.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
            color: "from-[#3b82f6] to-[#2563eb]"
        },
        {
            title: "Website Design",
            category: "Creative Design",
            description: "A professional and clean website is essential for any business to succeed in the online realm.",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&crop=center",
            color: "from-[#10b981] to-[#059669]"
        },
        {
            title: "Graphics Design",
            category: "Post Maker",
            description: "Create creative graphics post like business post, festival post, promotion post, banners etc.",
            image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JhcGhpY3MlMjBEZXNpZ258ZW58MHx8MHx8fDA%3D",
            color: "from-[#ec4899] to-[#db2777]"
        }
    ];

    return (
        <section id="portfolio" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                        Browse our most demanded web services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover Our Services
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-48 md:h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6">
                                <div className="text-xs md:text-sm text-[#2563eb] font-medium mb-2">
                                    {item.category}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <button className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white py-2 px-3 text-sm font-medium rounded-md hover:from-[#2563eb] hover:to-[#7c3aed] transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}

            </div>
        </section>
    );
};

export default Portfolio; 