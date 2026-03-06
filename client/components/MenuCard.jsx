import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

export default function MenuCard({ item }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-gold-500/50 transition-colors group flex flex-col md:flex-row gap-4 p-4"
        >
            {/* Image (Optional: if we have images, else placeholder or icon) */}
            <div className="w-full md:w-32 h-32 shrink-0 bg-neutral-800 rounded-md overflow-hidden relative">
                {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-600">No Image</div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-neutral-100 font-playfair group-hover:text-gold-500 transition-colors">
                            {item.name}
                        </h3>
                        <span className="text-gold-400 font-bold block whitespace-nowrap">₹ {item.price}</span>
                    </div>

                    <p className="text-neutral-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-green-500 font-medium uppercase tracking-wider">
                    {item.isVeg && (
                        <>
                            <FiCheckCircle /> Pure Veg
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
