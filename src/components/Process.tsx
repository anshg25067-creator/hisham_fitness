export function Process() {
  const steps = [
    {
      number: "01",
      title: "Book Consultation",
      description: "We determine exactly what you want to achieve, assess your lifestyle, and see if you are ready for the work."
    },
    {
      number: "02",
      title: "Receive Personalized Strategy",
      description: "You get a no-BS, personalized training and nutrition protocol built specifically around your schedule and goals."
    },
    {
      number: "03",
      title: "Weekly Accountability",
      description: "Hard data check-ins every single week. We adapt, adjust, and push through the plateaus."
    },
    {
      number: "04",
      title: "Achieve Transformation",
      description: "Execute the routine, hit your numbers, and build the body you've always made excuses about."
    }
  ];

  return (
    <section className="py-32 bg-accent-primary text-bg-primary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
            The Coaching<br/>Protocol
          </h2>
          <div className="w-24 h-1 bg-action"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/20">
          {steps.map((step, i) => (
            <div key={i} className={`p-10 flex flex-col justify-start hover:bg-white/5 transition-colors group ${i !== steps.length - 1 ? 'border-b md:border-b-0 lg:border-r border-white/20' : ''} ${i === 1 ? 'md:border-b-0 md:border-r-0 lg:border-r border-white/20' : ''} ${i === 0 ? 'md:border-r border-white/20' : ''} ${i === 2 ? 'md:border-r border-white/20 lg:border-r border-t lg:border-t-0' : ''} ${i === 3 ? 'border-t md:border-t lg:border-t-0' : ''}`}>
              <span className="font-display text-6xl font-bold text-white/5 group-hover:text-action transition-colors mb-8 -ml-2">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed font-sans text-sm mt-auto max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
