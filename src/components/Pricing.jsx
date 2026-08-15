import { Check } from "lucide-react";

const plans = [
    {
        name: "Gratis",
        description: "Untuk mencoba dan memulai bisnis Anda.",
        price: "Rp 0",
        period: "selamanya",
        features: [
            "1 pengguna",
            "10 pelanggan",
            "50 transaksi",
            "Dashboard dasar",
        ],
        button: "Mulai Gratis",
    },
    {
        name: "Profesional",
        description: "Untuk bisnis yang sedang berkembang.",
        price: "Rp 249.000",
        period: "/bulan",
        popular: true,
        features: [
            "5 pengguna",
            "Pelanggan tanpa batas",
            "Transaksi tanpa batas",
            "Invoice profesional",
            "Laporan bisnis",
            "Dukungan prioritas",
        ],
        button: "Mulai 14 Hari Gratis",
    },
    {
        name: "Bisnis",
        description: "Untuk bisnis dengan kebutuhan lebih besar.",
        price: "Rp 399.000",
        period: "/bulan",
        features: [
            "Pengguna tanpa batas",
            "Pelanggan tanpa batas",
            "Transaksi tanpa batas",
            "Semua fitur Profesional",
            "Laporan lanjutan",
            "Dukungan prioritas",
        ],
        button: "Pilih Paket Bisnis",
    },
];

export default function Pricing() {
    return (
        <section id="harga" className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                        Harga sederhana
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Pilih paket yang sesuai dengan bisnis Anda
                    </h2>

                    <p className="mt-4 text-slate-500">
                        Mulai gratis dan upgrade ketika bisnis Anda berkembang.
                    </p>

                </div>


                <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`relative rounded-2xl border bg-white p-7 ${
                                plan.popular
                                    ? "border-indigo-500 shadow-xl shadow-indigo-100"
                                    : "border-slate-200"
                            }`}
                        >

                            {plan.popular && (

                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                                    Paling Populer
                                </div>

                            )}


                            <h3 className="text-lg font-bold text-slate-900">
                                {plan.name}
                            </h3>

                            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                                {plan.description}
                            </p>


                            <div className="mt-6">

                                <span className="text-3xl font-bold text-slate-900">
                                    {plan.price}
                                </span>

                                <span className="ml-1 text-sm text-slate-400">
                                    {plan.period}
                                </span>

                            </div>


                            <button
                                className={`mt-6 w-full rounded-xl px-5 py-3 text-sm font-semibold ${
                                    plan.popular
                                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                            >
                                {plan.button}
                            </button>


                            <div className="mt-7 border-t border-slate-100 pt-6">

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Termasuk:
                                </p>

                                <ul className="mt-4 space-y-3">

                                    {plan.features.map((feature) => (

                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm text-slate-600"
                                        >

                                            <Check
                                                size={16}
                                                className="shrink-0 text-indigo-600"
                                            />

                                            {feature}

                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}