import {
    Users,
    Receipt,
    Package,
    BarChart3,
    CreditCard,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Kelola Pelanggan",
        description:
            "Simpan dan kelola seluruh informasi pelanggan dalam satu tempat yang mudah diakses.",
    },
    {
        icon: Receipt,
        title: "Invoice Profesional",
        description:
            "Buat invoice dengan cepat dan tampil profesional tanpa harus membuatnya secara manual.",
    },
    {
        icon: Package,
        title: "Kelola Produk & Stok",
        description:
            "Pantau produk dan stok secara lebih teratur sehingga Anda selalu tahu kondisi persediaan.",
    },
    {
        icon: BarChart3,
        title: "Laporan Bisnis",
        description:
            "Lihat performa bisnis melalui laporan dan data yang mudah dipahami.",
    },
    {
        icon: CreditCard,
        title: "Pantau Pembayaran",
        description:
            "Pantau transaksi dan status pembayaran pelanggan agar tidak ada tagihan yang terlewat.",
    },
    {
        icon: ShieldCheck,
        title: "Data Lebih Aman",
        description:
            "Data bisnis Anda tersimpan secara terpusat dengan sistem keamanan yang dirancang untuk bisnis modern.",
    },
];

export default function Features() {
    return (
        <section id="fitur" className="py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                        Fitur lengkap
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Semua yang Anda butuhkan untuk mengelola bisnis
                    </h2>

                    <p className="mt-4 text-slate-500">
                        Satu platform untuk membantu Anda menghemat waktu,
                        mengurangi pekerjaan manual, dan mengembangkan bisnis.
                    </p>

                </div>


                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-200/50"
                            >

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">

                                    <Icon size={21} />

                                </div>

                                <h3 className="mt-5 font-semibold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {feature.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}