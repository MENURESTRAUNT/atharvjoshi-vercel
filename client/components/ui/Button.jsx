import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary', // primary, outline, ghost
    className,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 transition-all duration-300 rounded-md font-medium tracking-wide uppercase text-sm';

    const variants = {
        primary: 'bg-gold-500 text-white hover:bg-gold-400 hover:scale-105 shadow-lg shadow-gold-500/20',
        outline: 'border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-neutral-950 hover:scale-105',
        ghost: 'text-gold-500 hover:text-gold-400 underline-offset-4 hover:underline',
    };

    const styles = twMerge(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={styles} {...props}>
            {children}
        </button>
    );
}
