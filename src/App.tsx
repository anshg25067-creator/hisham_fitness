import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Insights } from './components/Insights';
import { About } from './components/About';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { FAQ } from './components/FAQ';
import { ConsultationForm } from './components/ConsultationForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-bg-primary text-accent-primary selection:bg-action selection:text-white">
      <Hero />
      <SocialProof />
      <Insights />
      <About />
      <Process />
      <Results />
      <FAQ />
      <ConsultationForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}
