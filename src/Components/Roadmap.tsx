import {Mic, Image as ImageIcon, FileSearch, Brain, UserRound,Smartphone, Zap, Blocks } from "lucide-react";
import {useState, useEffect, useRef} from "react";
import clsx from "clsx"
const RoadmapItems = [
    {
        icon: Mic,
        title: "Voice Conversation",
        description: "Talk to Cyphra out loud and hear it answer back."
    },
    {
        icon: ImageIcon,
        title: "Image Understanding",
        description: "Share an image and ask Cyphra about what’s in it."
    },
    {
        icon: FileSearch,
        title: "File Analysis",
        description: "Upload documents and get summaries and answers from them."
    },
    {
        icon: Brain,
        title: "Long-Term Memory",
        description: "Remember your preferences and context across conversations."
    },
    {
        icon: UserRound,
        title: "Personalized Profiles",
        description: "Tailor Cyphra to how you work, with a profile of your own."
    },
    {
        icon: Smartphone,
        title: "Mobile App",
        description: "Take Cyphra with you, on your phone."
    },
    {
        icon: Zap,
        title: "Realtime Conversations",
        description: "Fast, live back-and-forth as you chat."
    },
    {
        icon: Blocks,
        title: "More Ai Model Integrations",
        description: "Connect more AI models, so Cyphra keeps getting more capable."
    }
];

export default function Roadmap()
{
    const [active, setActive] = useState(0);
    const current = RoadmapItems[active];
    const [paused, setPaused] = useState(false);
    const beamDeg = (active/RoadmapItems.length) * 360 - 90;
    const ringRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ringRef.current;
        if (!el) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.3}
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (paused || !visible ||reduceMotion) return undefined;

        const id = setTimeout(() => {
            setActive((i) => (i + 1) % RoadmapItems.length);
        }, 3500);

        return () => clearTimeout(id);
    }, [active, paused, visible]);
    return (
        <section id="roadmap" className="relative overflow-hidden bg-white px-6 py-20 md:py-28">
            <div
                className="pointer-events-none absolute size-72 rounded-full blur-3xl bg-brand-purple/20 top-10 left-20"/>
            <div
                className="pointer-events-none absolute size-72 rounded-full blur-3xl bg-brand-cyan/20 -right-20 bottom-10"/>
            <div className="mx-auto max-w-7xl relative z-10 text-center">
                <span
                    className="inline-block rounded-full border border-white/40 bg-white/70 font-medium px-4 py-1.5 text-sm text-ink/70 backdrop-blur-md">Roadmap</span>
                <h2 className="mx-auto mt-4 max-w-3xl font-display font-bold text-2xl md:text-4xl text-ink">What's
                    coming next</h2>
                <p className="text-ink/60 mx-auto mt-4 max-w-xl text-center">Cyphra is built to grow. Here's what's
                    planned</p>

                <div
                    ref={ringRef}
                    className="relative mx-auto mt-12 aspect-square w-full max-w-[560px]"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                >
                    <div className="absolute inset-[12%] rounded-full border border-brand-blue/20" />
                    <div className="absolute inset-[25%] rounded-full bg-linear-to-br from-brand-purple/30 via-brand-blue/25 to-brand-cyan/30 blur-3xl" />

                    <div key={active} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -mt-px h-0.5 w-[38%] origin-left"
                         style={{transform: `rotate(${beamDeg}deg)`}}>
                        <div className="h-full w-full bg-linear-to-r from-transparent via-brand-purple/40 to-brand-cyan motion-safe:animate-fade-in"/>
                    </div>

                    {RoadmapItems.map((item, index) => {
                        const angle = (index / RoadmapItems.length) * 2 * Math.PI - Math.PI / 2;
                        const left = 50 + 38 * Math.cos(angle);
                        const top = 50 + 38 * Math.sin(angle);
                        const Icon = item.icon;


                        return (
                            <button
                                key={item.title}
                                type="button"
                                aria-label={item.title}
                                style={{ left: `${left}%`, top: `${top}%` }}
                                className={clsx(
                                    "absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 shadow-lg backdrop-blur-xl transition duration-300 focus-visible:outline-2 focus-visible:outline-brand-purple md:size-16",
                                    active === index
                                        ? "scale-110 bg-white/90 ring-2 ring-brand-purple/50 shadow-brand-purple/30"
                                        : "bg-white/50", visible ? "motion-safe:animate-node-in" : "opacity-0"
                                )}
                                onClick={() => setActive(index)}
                                aria-pressed={active === index}
                            >
                                <Icon className={clsx("size-5 md:size-7", active === index ? "text-brand-purple" : "text-brand-blue")} />
                            </button>
                        );
                    })}

                    <div
                        aria-live="polite"
                        className="absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2 text-center"
                    >
                        <div key={active} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -mt-px j-0.5 w-[38%] origin-left"
                             style={{transform: `rotate(${beamDeg}deg)`}}>
                            <div className="h-full w-full bg-linear-to-r from-transparent via-brand-purple/40 to-brand-cyan motion-safe:animate-fade-in"/>
                        </div>

                        <div key={active} className="motion-safe:animate-fade-in">
      <span className="mb-2 inline-block rounded-full border border-brand-purple/30 bg-brand-purple/10 px-3 py-1 text-xs text-brand-purple">
    Planned
  </span>
     <h3 className="font-display text-sm font-bold text-ink md:text-xl">
         {current.title}
     </h3>
     <p className="mt-1 text-xs text-ink/60 md:text-sm">
         {current.description}
     </p>
 </div>
                    </div>
                </div>
            </div>
        </section>
    )
}