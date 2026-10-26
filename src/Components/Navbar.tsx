import logoIcon from "../assets/logo-icon.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Features", "Roadmaps", "Docs"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
     <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6">
        <div className="flex items-center">
          <img src={logoIcon} alt="Cyphra icon" className="h-6 shrink-0 md:h-8" />
          <h1 className="text-lg font-display text-ink font-bold">Cyphra</h1>
        </div>

       <ul className="hidden gap-8 text-sm font-medium text-ink/70 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="justify-self-end rounded-full bg-ink px-5 py-2 text-sm font-medium text-white hidden md:block">
          Get Started
        </button>
        <button
  className="md:hidden"
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>
      </nav>
      {open && (
  <div className="mx-auto mt-2 max-w-7xl rounded-2xl p-4 md:hidden">
    <ul className="flex flex-col gap-4 text-ink/80">
      {links.map((link) => (
        <li key={link}>
          <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        </li>
      ))}
    </ul>
    <button className="mt-4 w-full rounded-full bg-ink py-2.5 text-white">
      Get Started
    </button>
  </div>
)}
    </header>
  );
}