import {Rocket , FileTextIcon} from "lucide-react"
export default function CallToAction () {
    return(
        <section id="call-to-action" className="relative overflow-hidden bg-white px-6 py-20 text-center md:py-28">
            <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-purple/30 via-brand-blue/15 to-transparent"/>
            <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="font-display text-3xl  font-bold text-ink md:text-5xl "> Meet the assistant that keeps growing</h2>
                <p className="mx-auto mt-4 max-w-xl text-ink/60">
                    Create your account and start a conversation. Cyphra keeps your chats and gets more capable over time
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 ">
                    <button className="flex justify-center items-center gap-1 rounded-full bg-ink/70 px-6 py-3 text-sm font-medium text-white hover:bg-transparent
                     hover:text-ink hover:border hover:border-gray-500 transition-all duration-300">
                        <Rocket size={17} />
                        Get Started</button>

                    <button className="flex justify-center items-center gap-1 rounded-full border border-white/60  bg-white/50 px-6 py-3 text-sm font-medium text-inl backdrop-blur-md
                    hover:text-white hover:bg-ink/70 transition-all duration-300">
                        <FileTextIcon size={17}/>
                        Api Docs

                    </button>
                </div>

            </div>
        </section>
    )
}