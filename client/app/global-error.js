'use client'; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white gap-4">
          <h2 className="text-2xl font-bold font-playfair">Something went wrong!</h2>
          <p className="text-neutral-400 max-w-lg text-center">{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-gold-500 text-neutral-900 rounded-full font-medium mt-4"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
