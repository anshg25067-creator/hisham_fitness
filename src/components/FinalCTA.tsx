import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-40 bg-accent-primary text-bg-primary px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-12 leading-[0.9]">
          No More<br/>Excuses.
        </h2>
        <a 
          href="#consultation" 
          className="inline-flex items-center justify-center bg-action hover:bg-orange-600 text-white font-bold px-12 py-6 rounded-none transition-all duration-200 text-sm w-full sm:w-auto uppercase tracking-widest"
        >
          Book Consultation
          <ArrowRight className="ml-3 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
