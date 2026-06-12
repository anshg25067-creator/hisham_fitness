export function Footer() {
  return (
    <footer className="py-20 bg-bg-primary px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
        <div className="text-center">
          <p className="font-display font-bold uppercase tracking-tighter text-3xl mb-2">Hisham Yousri</p>
          <p className="text-accent-primary/50 text-xs uppercase tracking-widest font-bold">Body Transformation Coach</p>
        </div>
        
        <div className="text-center text-xs font-bold uppercase tracking-widest text-accent-primary/40">
          <p>&copy; {new Date().getFullYear()} Hisham Yousri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
