import Navbar from '@/components/feature/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 relative overflow-hidden">

        {/* Giant background number */}
        <span className="absolute inset-0 flex items-center justify-center font-heading font-medium text-[40vw] text-foreground-950/[0.03] select-none pointer-events-none leading-none">
          404
        </span>

        <div className="relative z-10 text-center max-w-2xl mx-auto py-20">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-8 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-primary-600" />
            Page Not Found
            <span className="w-12 h-[1px] bg-primary-600" />
          </span>

          <h1 className="font-heading text-5xl md:text-7xl text-foreground-950 font-medium leading-[1.05] tracking-tight mb-6">
            This page seems to have{' '}
            <span className="italic font-light text-foreground-500">checked out</span>.
          </h1>

          <p className="font-sans text-lg text-foreground-500 font-light leading-relaxed mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="group inline-flex items-center justify-center gap-3 px-10 h-14 bg-foreground-950 text-background-50 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-600 hover:text-white transition-all duration-500 hover:-translate-y-0.5"
            >
              Back to Home
              <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 h-14 border border-foreground-950/20 text-foreground-700 font-sans text-sm tracking-[0.2em] uppercase hover:border-foreground-950 hover:text-foreground-950 transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
