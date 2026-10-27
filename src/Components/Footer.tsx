import logoIcon from "../assets/logo-icon.png";
const linkGroups = [
    {
        title: "Product",
        links: [
            {
                label:"Features", href:"#features"
            },
            {  label:"Roadmap", href:"#roadmap",}
        ],
    },
    {
        title:"Developers",
        links: [
            {label:"Api Docs", href:"#docs"},
            {label:"Github", href:"#github"},
        ]
    }
];
export default function Footer() {

    return (
        <footer className="border-t border-ink/5 bg-tint px-6 py-12 relative overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-purple/30 via-brand-blue/15 to-transparent"/>
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-1">
<img src={logoIcon} alt = "" className="h-6 shrink-0 md:h-8"/>
                        <h1 className="text-lg font-display text-ink font-bold">Cyphra</h1>
                    </div>
                    <p className="mt-3 max-w-xs text-sm text-ink/60">An Ai assistant built to evolve</p>
                </div>
                {linkGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
                        <ul className="mt-3 space-y-2">
                            {group.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
                <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink/50">

                    &copy; {new Date().getFullYear()} Cyphra. All rights reserved.
                </div>
            </div>
        </footer>
    )
}