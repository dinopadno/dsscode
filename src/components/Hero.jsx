import {
    ArrowRight,
    Play,
    CheckCircle2
} from "lucide-react";

export default function Hero() {

    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">

            {/* Background */}

            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#eef2ff,_transparent_55%)]" />

            <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

                {/* Heading */}

                <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                    Manage your business.
                    <span className="block text-indigo-600">
                        Grow without limits.
                    </span>
                </h1>

                {/* Description */}

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                    Everything you need to manage customers,
                    sales, invoices, payments and reports —
                    all in one powerful platform.
                </p>

                {/* CTA */}

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
                        Start for free
                        <ArrowRight size={18} />
                    </button>


                    <button className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-slate-700
                        hover:bg-slate-50
                    ">

                        <Play size={16} />

                        Watch demo

                    </button>

                </div>


                {/* Trust */}

                <div className="
                    mt-7
                    flex
                    flex-wrap
                    justify-center
                    gap-x-6
                    gap-y-2
                    text-sm
                    text-slate-400
                ">

                    <span className="flex items-center gap-1">
                        <CheckCircle2 size={15} />
                        No credit card required
                    </span>

                    <span className="flex items-center gap-1">
                        <CheckCircle2 size={15} />
                        14-day free trial
                    </span>

                </div>


                {/* Product Preview */}

                <div className="
                    relative
                    mx-auto
                    mt-16
                    max-w-6xl
                ">

                    <div className="
                        absolute
                        inset-x-20
                        bottom-0
                        h-32
                        rounded-full
                        bg-indigo-300/30
                        blur-3xl
                    " />

                    <div className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-2
                        shadow-2xl
                        shadow-slate-300/40
                    ">

                        <div className="
                            overflow-hidden
                            rounded-xl
                            border
                            border-slate-100
                            bg-slate-50
                        ">

                            {/* Fake browser */}

                            <div className="
                                flex
                                h-10
                                items-center
                                gap-2
                                border-b
                                bg-white
                                px-4
                            ">

                                <span className="
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-red-300"
                                />

                                <span className="
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-yellow-300"
                                />

                                <span className="
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-green-300"
                                />

                            </div>


                            {/* Dashboard preview */}

                            <div className="
                                grid
                                min-h-[360px]
                                grid-cols-12
                                gap-5
                                p-6
                            ">

                                <div className="
                                    col-span-3
                                    hidden
                                    rounded-xl
                                    bg-white
                                    p-4
                                    md:block
                                ">

                                    <div className="
                                        h-7
                                        w-24
                                        rounded
                                        bg-slate-100"
                                    />

                                    <div className="mt-8 space-y-3">

                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div
                                                key={i}
                                                className="
                                                    h-8
                                                    rounded-lg
                                                    bg-slate-100
                                                "
                                            />
                                        ))}

                                    </div>

                                </div>


                                <div className="
                                    col-span-12
                                    space-y-5
                                    md:col-span-9
                                ">

                                    <div className="
                                        grid
                                        grid-cols-2
                                        gap-4
                                        lg:grid-cols-4
                                    ">

                                        {[1, 2, 3, 4].map(i => (

                                            <div
                                                key={i}
                                                className="
                                                    h-24
                                                    rounded-xl
                                                    bg-white
                                                "
                                            />

                                        ))}

                                    </div>


                                    <div className="
                                        grid
                                        grid-cols-3
                                        gap-4
                                    ">

                                        <div className="
                                            col-span-2
                                            h-52
                                            rounded-xl
                                            bg-white"
                                        />

                                        <div className="
                                            h-52
                                            rounded-xl
                                            bg-white"
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}