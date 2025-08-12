const Hero = () => {
    return (
        <section
            id="home"
            className="bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 md:pt-20 pb-12 md:pb-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                        Welcome To{" "}
                        <span className="bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#2563eb] bg-clip-text text-transparent">
                            UrbanMandaiGlobal
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-snug">
                        Our Digital Marketing and Website development process is carefully crafted to ensure that{" "}
                        <span className="font-medium text-[#2563eb]">
                            we deliver exceptional results to businesses all over the World.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                        <a
                            href="#services"
                            className="bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-md hover:from-[#ea580c] hover:to-[#db2777] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto min-w-[140px] text-center"
                        >
                            Explore Our Services
                        </a>
                        <a
                            href="#contact"
                            className="border-2 border-[#2563eb] text-[#2563eb] px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-md hover:bg-[#2563eb] hover:text-white transition-all w-full sm:w-auto min-w-[140px] text-center"
                        >
                            Get Started Today
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#2563eb]">1500+</div>
                            <div className="text-gray-600 text-sm">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#ea580c]">250+</div>
                            <div className="text-gray-600 text-sm">Recent Services</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#db2777]">14+</div>
                            <div className="text-gray-600 text-sm">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
