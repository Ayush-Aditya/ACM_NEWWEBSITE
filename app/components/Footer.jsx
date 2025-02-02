export default function Footer() {
    return (
        <footer className="w-full bg-[#292929] mt-24">
            <div className="container mx-auto px-4 md:px-16 lg:px-36 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4 hover:-translate-y-1 transition-transform duration-300">
                        <img src="/acm.png" alt="ACM Logo" className="h-12" />
                        <p className="text-gray-300 text-sm">
                            ACM BIT Mesra Student Chapter fostering knowledge and innovation in computing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 hover:scale-105 transition-transform duration-300">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#events" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Events</a></li>
                            <li><a href="#team" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Team</a></li>
                            <li><a href="#testimonials" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Testimonials</a></li>
                            <li><a href="#contact-us" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>BIT Mesra, Ranchi</li>
                            <li>Jharkhand, India</li>
                            <li>Email: acm@bitmesra.ac.in</li>
                            <li>Phone: +91 XXXXXXXXXX</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:scale-125 transition-transform duration-300">
                                <img src="/instagram.png" alt="Instagram" className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:scale-125 transition-transform duration-300">
                                <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 hover:text-white transition-colors duration-300">
                    <p>&copy; 2025 ACM BIT Mesra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}