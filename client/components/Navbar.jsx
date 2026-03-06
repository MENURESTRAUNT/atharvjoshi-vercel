'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './ui/Button';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 shadow-lg border-b border-neutral-800' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-playfair text-gold-500 tracking-wider">
                    GAYLORD'S <span className="text-neutral-100">EXPRESS</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm tracking-widest uppercase transition-colors hover:text-gold-500 ${pathname === link.href ? 'text-gold-500' : 'text-neutral-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="https://www.zomato.com/dehradun/gaylord-xpress-paltan-bazaar" target="_blank" variant="primary" className="px-5 py-2 text-xs">
                        Order Online
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-neutral-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-950 border-b border-neutral-800 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium tracking-wider hover:text-gold-500 ${pathname === link.href ? 'text-gold-500' : 'text-neutral-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href="https://www.zomato.com/dehradun/gaylord-xpress-paltan-bazaar" target="_blank" onClick={() => setIsOpen(false)}>
                                Order Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
