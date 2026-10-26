import GradientWaves from "./GradientWaves";
import { Lightbulb, Code, FileText, GraduationCap, Paperclip, Globe, ArrowUp } from "lucide-react";
import StrokeText from "./StrokeText";
const chips = [
  { label: "Brainstorm", icon: Lightbulb },
  { label: "Code", icon: Code },
  { label: "Text", icon: FileText },
  { label: "Advice", icon: GraduationCap },

];


export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-32 pt-10 text-center flex-1">
    
    <div className="absolute inset-0 -z-10">
        <GradientWaves horizonColor="#5B5CFF" waveColor="#A855F7" crestColor="#00D9FF" lightMode dpr={1.5} />
    </div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-tint"></div>
      <span className="inline-block rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-sm text-ink/70 backdrop-blur-md">
        An AI assistant built to evolve
      </span>

      <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-6xl">
          More than a chatbot.
      </h1>
      <StrokeText text="Cyphra AI." fontFamily="Orbitron, sans-serif" fontWeight="500" strokeColor="#A855F7" strokeWidth={1.4} fillColor="#5B5CFF" letterSpacing={0} fontSize={64}/>

      <p className="mx-auto mt-4 max-w-xl text-ink/60">
          An AI assistant that keeps your conversations, understands context and keeps gaining new capabilities.
      </p>
      <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
        {chips.map((chip) => (
<button key={chip.label} className="flex items-center gap-2 rounded-full border border-white/60
 bg-white/40 px-4 py-2 text-sm text-ink/70 backdrop-blur-md hover:bg-white/60 transition-colors">
          <chip.icon size={16} />
          {chip.label}
        </button>
        ))}
      </div>
      <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-white/60 bg-white/40 p-4 text-left 
      shadow-lg shadow-brand-purple/10 backdrop-blur-xl">
<textarea rows={2} placeholder="Ask Cyphra anything..." className="w-full resize-none bg-transparent text-ink/60 placeholder:text-ink/40 outline-none"></textarea>
<div className="mt-3 flex items-center justify-between">
  <div className="flex items-center gap-2">
    <button
      type="button"
      aria-label="Attach file"
      className="grid size-9 place-items-center rounded-full border border-white/60 bg-white/40 text-ink/60 transition hover:bg-white/70"
    >
      <Paperclip size={16} />
    </button>
    <button
      type="button"
      aria-label="Search the web"
      className="grid size-9 place-items-center rounded-full border border-white/60 bg-white/40 text-ink/60 transition hover:bg-white/70"
    >
      <Globe size={16} />
    </button>
  </div>

  <button
    type="button"
    aria-label="Send"
    className="grid size-9 place-items-center rounded-full bg-ink text-white"
  >
    <ArrowUp size={18} />
  </button>
</div>
      </div>
    </section>
  );
}