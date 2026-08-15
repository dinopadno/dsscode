import {
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

export default function CTA() {
    return (
        <section className="px-5 py-20 lg:px-8">

            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center sm:px-12 lg:px-20">

                {/* Background */}

                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />


                <div className="relative">

                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                        Mulai sekarang
                    </p>


                    <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Siap mengelola bisnis dengan cara yang lebih mudah?
                    </h2>


                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
                        Mulai gunakan platform kami dan nikmati cara yang
                        lebih sederhana untuk mengelola bisnis Anda.
                    </p>


                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">

                            Mulai Gratis

                            <ArrowRight size={17} />

                        </button>

                    </div>


                    <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">

                        <span className="flex items-center gap-1">
                            <CheckCircle2 size={14} />
                            Gratis 14 hari
                        </span>

                        <span className="flex items-center gap-1">
                            <CheckCircle2 size={14} />
                            Tanpa kartu kredit
                        </span>

                        <span className="flex items-center gap-1">
                            <CheckCircle2 size={14} />
                            Batalkan kapan saja
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}