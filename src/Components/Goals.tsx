import {MessagesSquare, ShieldCheck, Rocket} from "lucide-react";

const goals = [
  { title: "Remembers your conversations.",text: "Every chat is saved to your account, so you can pick up any conversation right where you left off.", icon: MessagesSquare },
  { title: "Secure by design.", text: "Email-verified accounts, hashed passwords and secure sign-in. Only you can read your own conversations.", icon: ShieldCheck },
  { title: "Built to evolve.", text: "Voice, image understanding and long-term memory are on the roadmap, so Cyphra keeps getting more capable.",   icon: Rocket },
];

export default function Goals() {
  return (
    <section className="relative overflow-hidden bg-tint px-6 py-20 md:py-16">
     <div className="pointer-events-none absolute size-72 rounded-full blur-3xl bg-brand-purple/30 top-10"/>
          <div className="pointer-events-none absolute size-72 rounded-full blur-3xl bg-brand-cyan/30 -right-20 bottom-10"/>
     <div className="mx-auto max-w-7xl relative z-10 text-center">
        
<span className="inline-block rounded-full border border-white/60 bg-white/40 font-medium px-4 py-1.5 text-sm text-ink/70 backdrop-blur-md">Why Cyphra?</span>
    <h2 className="mx-auto mt-4 max-w-3xl font-display font-bold text-2xl md:text-4xl text-ink">Built to understand you and keep growing.</h2>

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