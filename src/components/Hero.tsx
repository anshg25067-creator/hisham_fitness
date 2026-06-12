export function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 lg:px-12 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-left w-full z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center rounded-sm bg-bg-secondary px-4 py-2 text-sm font-semibold text-accent-primary uppercase tracking-wider">
              📍 Toronto, Canada
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-accent-primary mb-8 leading-[1.05] uppercase">
            Built Through<br/>Routine.<br/>Not Excuses.
          </h1>
          
          <p className="text-lg md:text-xl text-accent-primary/70 mb-12 max-w-xl leading-relaxed">
            Helping busy professionals lose fat, build confidence, and create sustainable habits through personalized coaching and accountability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a 
              href="#consultation" 
              className="inline-flex items-center justify-center bg-accent-primary hover:bg-black text-white font-bold px-10 py-5 rounded-none transition-all duration-200 w-full sm:w-auto uppercase tracking-widest text-sm"
            >
              Book Free Consultation
            </a>
            <a 
              href="#results" 
              className="inline-flex items-center justify-center border-2 border-accent-primary text-accent-primary hover:bg-bg-secondary font-bold px-10 py-5 rounded-none transition-all duration-200 w-full sm:w-auto uppercase tracking-widest text-sm"
            >
              View Results
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-gray-200 pt-8">
            <div>
              <p className="font-display font-bold text-3xl uppercase tracking-tighter">600+ lbs Lost</p>
              <p className="text-xs text-accent-primary/50 mt-1 uppercase tracking-widest font-bold">Track Record</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div>
              <p className="font-display font-bold text-3xl uppercase tracking-tighter">1-on-1</p>
              <p className="text-xs text-accent-primary/50 mt-1 uppercase tracking-widest font-bold">Coaching</p>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-bg-secondary relative">
            <img 
              src="/hero-image-enhanced.png" 
              alt="Hisham Yousri Coaching" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
