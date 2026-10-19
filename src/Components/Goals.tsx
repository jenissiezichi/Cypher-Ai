import {Zap, Layers, Sparkles} from "lucide-react";

const goals = [
  { title: "Accelerate Development",text: "Speed up your development process with AI assistance.", icon: Zap },
  { title: "Enhance Learning", text: "Improve your learning experience with personalized AI support.", icon: Layers },
  { title: "Boost Creativity", text: "Unleash your creativity with AI-powered tools and ideas.",   icon: Sparkles },
];

export default function Goals() {
  return (
    <section className="relative overflow-hidden bg-tint px-6 py-20 md:py-16">
     <div className="pointer-events-none absolute size-72 rounded-full blur-3xl bg-brand-purple/30 top-10"/>
          <div className="pointer-events-none absolute size-72 rounded-full blur-3xl bg-brand-cyan/30 -right-20 bottom-10"/>
     <div className="mx-auto max-w-7xl relative z-10 text-center">
        
<span className="inline-block rounded-full border border-white/60 bg-white/40 font-medium px-4 py-1.5 text-sm text-ink/70 backdrop-blur-md">Our Goals</span>
    <h2 className="mx-auto mt-4 max-w-3xl font-display font-bold text-2xl md:text-4xl text-ink">Empowering to accelerate projects with AI solutions.</h2>

    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {goals.map(({title, text, icon: Icon}) => (
            <div key={title} className="rounded-3xl border border-white/60 bg-white/40 p-6 text-left shadow-lg backdrop-blur-xl">
          
          
          <div className="grid size-12 place-items-center rounded-xl text-white
           bg-linear-to-br from-brand-purple via-brand-blue to-brand-cyan">
            <Icon/>
          
            </div>
              <h3 className="mt-4 font-semibold text-lg text-ink">{title}</h3>
            <p className="mt-2 text-sm text-ink/60">{text}</p>
                </div>
        
        ))}

    </div>
     </div>
            </section>
  );
}