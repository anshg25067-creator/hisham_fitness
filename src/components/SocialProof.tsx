export function SocialProof() {
  const stats = [
    { title: "600+ lbs Lost" },
    { title: "Personalized Coaching" },
    { title: "Toronto Based" }
  ];

  return (
    <section className="py-12 border-y border-gray-200 bg-bg-primary px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-4 md:py-2">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-accent-primary uppercase tracking-tighter">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
