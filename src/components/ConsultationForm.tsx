import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="consultation" className="py-32 bg-bg-secondary px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Book Free Consultation</h2>
        </div>

        <div className="bg-bg-primary p-8 md:p-12 border border-gray-200">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-16 h-16 text-action" />
              </div>
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4">Application Received</h3>
              <p className="text-accent-primary/70 mb-8 max-w-sm mx-auto">
                I will review your information and get back to you within 24 hours to schedule our call.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-sm font-bold uppercase tracking-widest text-action hover:text-accent-primary transition-colors border-b-2 border-action hover:border-accent-primary pb-1"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-accent-primary">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-bg-secondary border-none focus:ring-2 focus:ring-action rounded-none px-5 py-4 outline-none transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-accent-primary">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-bg-secondary border-none focus:ring-2 focus:ring-action rounded-none px-5 py-4 outline-none transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-accent-primary">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full bg-bg-secondary border-none focus:ring-2 focus:ring-action rounded-none px-5 py-4 outline-none transition-all font-sans"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="goal" className="block text-xs font-bold uppercase tracking-widest text-accent-primary">Primary Fitness Goal</label>
                <select 
                  id="goal" 
                  required
                  defaultValue=""
                  className="w-full bg-bg-secondary border-none focus:ring-2 focus:ring-action rounded-none px-5 py-4 outline-none transition-all appearance-none cursor-pointer font-sans"
                >
                  <option value="" disabled>Select your goal</option>
                  <option value="fat-loss">Fat Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="recomposition">Body Recomposition</option>
                  <option value="performance">Athletic Performance</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-accent-primary hover:bg-black disabled:bg-gray-400 text-white font-bold px-8 py-6 rounded-none transition-all mt-4 text-sm uppercase tracking-widest"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
