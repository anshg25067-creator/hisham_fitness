export function FAQ() {
  const faqs = [
    {
      question: "How does the coaching work?",
      answer: "Everything is managed through a customized app. You get your daily protocols, direct messaging to me, and weekly form review check-ins."
    },
    {
      question: "Do I need to be advanced?",
      answer: "No. The system is scaled to your current capability. All that is required is the willingness to execute the plan."
    },
    {
      question: "What is the commitment?",
      answer: "Real transformation takes time. The program is built around sustainable habits, and we focus on long-term execution."
    }
  ];

  return (
    <section className="py-32 bg-bg-primary px-6 border-y border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 item-start">
        
        <div className="md:w-1/3 text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">FAQ</h2>
          <div className="w-16 h-1 bg-action mb-8"></div>
        </div>

        <div className="md:w-2/3 space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="text-left">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-accent-primary mb-4">
                {faq.question}
              </h3>
              <p className="text-accent-primary/70 leading-relaxed font-sans">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
