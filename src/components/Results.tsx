export function Results() {
  const results = [
    {
      story: "Lost 45 lbs and built incredible discipline over 16 weeks.",
      imageBefore: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
      imageAfter: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    },
    {
      story: "Shed 30 lbs, gained lean muscle, and completely shifted his energy levels.",
      imageBefore: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?q=80&w=2074&auto=format&fit=crop",
      imageAfter: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="results" className="py-32 bg-bg-secondary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-accent-primary">
            Client Results
          </h2>
          <div className="w-24 h-1 bg-action"></div>
        </div>

        <div className="space-y-32">
          {results.map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              
              {/* Images */}
              <div className="w-full lg:w-1/2 flex gap-4">
                <div className="relative w-1/2 aspect-[3/4] overflow-hidden border border-gray-300">
                  <div className="absolute top-4 left-4 bg-bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-primary z-10">
                    Before
                  </div>
                  <div className="absolute inset-0 bg-accent-primary/10"></div>
                  {/* <img src={item.imageBefore} alt="Before" className="w-full h-full object-cover grayscale opacity-90" /> */}
                  <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center p-6 text-center text-accent-primary/40 font-bold uppercase tracking-widest text-sm">Client Transformation Story</div>
                </div>
                <div className="relative w-1/2 aspect-[3/4] overflow-hidden">
                  <div className="absolute top-4 left-4 bg-action px-3 py-1 text-xs font-bold uppercase tracking-wider text-white z-10">
                    After
                  </div>
                  {/* <img src={item.imageAfter} alt="After" className="w-full h-full object-cover" /> */}
                   <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center p-6 text-center text-accent-primary/60 font-bold uppercase tracking-widest text-sm">Before & After Result</div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                  "{item.story}"
                </h3>
              </div>

            </div>
          ))}

          {/* Placeholder for future success */}
           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2 flex gap-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-dashed border-gray-400 bg-bg-primary flex items-center justify-center">
                  <span className="font-display font-bold uppercase tracking-widest text-gray-400">Future Success Story</span>
                </div>
              </div>
               <div className="w-full lg:w-1/2">
                <h3 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight opacity-50">
                  "Your transformation story goes here."
                </h3>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
