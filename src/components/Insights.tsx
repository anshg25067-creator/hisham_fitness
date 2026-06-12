export function Insights() {
  const insights = [
    { title: "No Days Off", type: "Mindset" },
    { title: "Competition Is Motivation", type: "Discipline" },
    { title: "Fat Loss Tips", type: "Nutrition" },
    { title: "Consistency Wins", type: "Habit" }
  ];

  return (
    <section className="py-32 bg-bg-secondary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-accent-primary">
              Recent Coaching<br/>Insights
            </h2>
            <p className="text-lg text-accent-primary/70 max-w-lg">
              Notes on discipline, routine, and achieving results without excuses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, i) => (
            <div key={i} className="group relative aspect-[4/5] bg-bg-primary overflow-hidden border border-gray-200 flex flex-col justify-end p-6 hover:border-accent-primary transition-colors cursor-pointer">
              <div className="absolute top-4 left-4 bg-bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-primary">
                {insight.type}
              </div>
              
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-accent-primary leading-tight mt-auto">
                {insight.title}
              </h3>
              
              <div className="h-1 w-8 bg-action mt-6 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
