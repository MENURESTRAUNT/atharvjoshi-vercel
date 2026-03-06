import Link from 'next/link';
import { FiInstagram, FiFacebook, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-playfair text-gold-500">GAYLORD'S EXPRESS</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Serving happiness since 1995. A pure vegetarian culinary destination in the heart of Dehradun.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors text-xl"><FiInstagram /></a>
                            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors text-xl"><FiFacebook /></a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-neutral-100 uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-3 text-neutral-400">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1 text-gold-500 shrink-0" />
                                <span>Near Clock Tower, Paltan Bazaar, Dehradun, Uttarakhand 248001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-gold-500 shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-gold-400 transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="text-gold-500 shrink-0" />
                                <a href="mailto:info@gaylords.in" className="hover:text-gold-400 transition-colors">info@gaylords.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-neutral-100 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li><Link href="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
                            <li><Link href="/menu" className="hover:text-gold-500 transition-colors">Menu</Link></li>
                            <li><Link href="/reviews" className="hover:text-gold-500 transition-colors">Reviews</Link></li>
                            <li><Link href="/about-owner" className="hover:text-gold-500 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Gaylord's Express. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
