import { FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp */}
            <a
                href="https://wa.me/919999999999"
                target="_blank"
                aria-label="Chat on WhatsApp"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            >
                <FiMessageCircle className="w-6 h-6" />
            </a>

            {/* Click to Call (Mobile only usually, but good to have) */}
            <a
                href="tel:+919999999999"
                className="bg-gold-500 text-neutral-950 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 md:hidden"
            >
                <FiPhone className="w-6 h-6" />
            </a>
        </div>
    );
}
