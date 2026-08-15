import {
    FileSpreadsheet,
    Clock3,
    CircleAlert,
} from "lucide-react";

const problems = [
    {
        icon: FileSpreadsheet,
        title: "Data masih tersebar",
        description:
            "Data pelanggan, transaksi, produk, dan laporan masih tersebar di berbagai file dan aplikasi.",
    },
    {
        icon: Clock3,
        title: "Banyak pekerjaan manual",
        description:
            "Tim menghabiskan banyak waktu untuk pekerjaan administratif yang sebenarnya bisa dilakukan secara otomatis.",
    },
    {
        icon: CircleAlert,
        title: "Sulit memantau bisnis",
        description:
            "Anda membutuhkan waktu untuk mencari data sebelum mengetahui kondisi bisnis dan mengambil keputusan.",
    },
];

export default function Problem() {
    return (
        <section className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
                        Masih mengelola bisnis secara manual?
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Mengelola bisnis tidak seharusnya serumit ini.
                    </h2>

                    <p className="mt-4 text-slate-500">
                        Banyak bisnis berkembang menghadapi masalah yang sama.
                    </p>

                </div>


                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">

                    {problems.map((problem) => {

                        const Icon = problem.icon;

                        return (
                            <div
                                key={problem.title}
                                className="rounded-2xl border border-slate-200 bg-white p-7"
                            >

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                    <Icon size={21} />
                                </div>

                                <h3 className="mt-5 font-semibold text-slate-900">
                                    {problem.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {problem.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}