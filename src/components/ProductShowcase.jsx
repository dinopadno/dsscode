import {
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const benefits = [
    "Dashboard bisnis secara real-time",
    "Kelola pelanggan dan produk",
    "Buat invoice profesional",
    "Pantau penjualan dan pembayaran",
    "Laporan bisnis yang mudah dipahami",
];

export default function ProductShowcase() {
    return (
        <section className="overflow-hidden py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Content */}

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                            Satu platform untuk semuanya
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Fokus menjalankan bisnis, bukan mengurus pekerjaan administratif
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                            Semua aktivitas bisnis Anda dapat dikelola dari
                            satu tempat sehingga pekerjaan menjadi lebih
                            sederhana, cepat, dan terorganisir.
                        </p>


                        <div className="mt-7 space-y-3">

                            {benefits.map((benefit) => (

                                <div
                                    key={benefit}
                                    className="flex items-center gap-3"
                                >

                                    <CheckCircle2
                                        size={19}
                                        className="shrink-0 text-indigo-600"
                                    />

                                    <span className="text-sm text-slate-600">
                                        {benefit}
                                    </span>

                                </div>

                            ))}

                        </div>


                        <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">

                            Lihat fitur selengkapnya

                            <ArrowRight size={17} />

                        </button>

                    </div>


                    {/* Mockup */}

                    <div className="relative">

                        <div className="absolute -inset-10 -z-10 rounded-full bg-indigo-100/70 blur-3xl" />

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/70">

                            <div className="overflow-hidden rounded-xl bg-slate-50">

                                <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">

                                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                                </div>


                                <div className="grid grid-cols-12 gap-4 p-5">

                                    {/* Sidebar */}

                                    <div className="col-span-3 hidden rounded-xl bg-white p-3 md:block">

                                        <div className="mb-5 h-6 w-20 rounded bg-indigo-100" />

                                        <div className="space-y-2">

                                            {[1, 2, 3, 4, 5, 6].map((item) => (

                                                <div
                                                    key={item}
                                                    className={`h-7 rounded-lg ${
                                                        item === 1
                                                            ? "bg-indigo-50"
                                                            : "bg-slate-50"
                                                    }`}
                                                />

                                            ))}

                                        </div>

                                    </div>


                                    {/* Main */}

                                    <div className="col-span-12 space-y-4 md:col-span-9">

                                        <div className="flex items-center justify-between">

                                            <div>

                                                <div className="h-5 w-28 rounded bg-slate-200" />

                                                <div className="mt-2 h-3 w-40 rounded bg-slate-100" />

                                            </div>

                                            <div className="h-8 w-20 rounded-lg bg-indigo-100" />

                                        </div>


                                        <div className="grid grid-cols-2 gap-3">

                                            {[
                                                "Pendapatan",
                                                "Pelanggan",
                                                "Invoice",
                                                "Keuntungan",
                                            ].map((item) => (

                                                <div
                                                    key={item}
                                                    className="rounded-xl bg-white p-4"
                                                >

                                                    <div className="h-3 w-16 rounded bg-slate-100" />

                                                    <div className="mt-3 h-6 w-24 rounded bg-slate-200" />

                                                </div>

                                            ))}

                                        </div>


                                        <div className="h-44 rounded-xl bg-white p-5">

                                            <div className="h-4 w-32 rounded bg-slate-200" />

                                            <div className="mt-8 flex h-24 items-end gap-2">

                                                {[30, 50, 40, 75, 60, 90, 70, 100].map(
                                                    (height, index) => (

                                                        <div
                                                            key={index}
                                                            className="flex-1 rounded-t-md bg-indigo-100"
                                                            style={{
                                                                height: `${height}%`,
                                                            }}
                                                        />

                                                    )
                                                )}

                                            </div>

                                        </div>

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