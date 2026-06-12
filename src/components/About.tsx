export function About() {
  return (
    <section className="py-32 bg-bg-primary px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Content */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-10 text-accent-primary">
            Meet Hisham Yousri
          </h2>
          <div className="space-y-8 text-lg text-accent-primary/80 leading-relaxed font-sans">
            <p className="font-bold text-2xl text-accent-primary uppercase tracking-tight leading-snug">
              Transforming your body isn't about motivation. It's about routine, accountability, and ruthless consistency.
            </p>
            <p>
              I work specifically with busy professionals who understand the value of hard work but need the right system to see physical results. My philosophy avoids generic quick fixes and focuses entirely on a sustainable transformation.
            </p>
            <p>
              When you work with me, we execute a proven structure. We set the standard, remove the guesswork, and prioritize long-term success through relentless accountability.
            </p>
            
            <div className="pt-8 border-t border-gray-200">
              <span className="font-display font-bold uppercase tracking-widest text-action text-sm">No Excuses. Just Results.</span>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2">
          <div className="absolute inset-0 bg-bg-secondary w-full max-w-sm ml-auto mr-auto lg:mr-0 -translate-x-4 translate-y-4"></div>
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border border-gray-200 z-10 mx-auto lg:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
              alt="Hisham Yousri - Portrait" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-opacity"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
