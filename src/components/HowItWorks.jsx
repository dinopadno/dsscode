const steps = [
    {
        number: "01",
        title: "Buat akun",
        description:
            "Daftar dalam hitungan menit dan siapkan profil bisnis Anda.",
    },
    {
        number: "02",
        title: "Masukkan data bisnis",
        description:
            "Tambahkan pelanggan, produk, transaksi, dan informasi bisnis Anda.",
    },
    {
        number: "03",
        title: "Kelola bisnis",
        description:
            "Gunakan dashboard untuk mengelola aktivitas bisnis sehari-hari.",
    },
    {
        number: "04",
        title: "Kembangkan bisnis",
        description:
            "Gunakan data dan laporan untuk membuat keputusan bisnis yang lebih baik.",
    },
];

export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                        Cara kerja
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Mulai dalam beberapa langkah sederhana
                    </h2>

                    <p className="mt-4 text-slate-500">
                        Tidak perlu proses rumit. Anda bisa mulai menggunakan
                        platform dalam hitungan menit.
                    </p>

                </div>


                <div className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-4">

                    <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-slate-200 md:block" />

                    {steps.map((step) => (

                        <div
                            key={step.number}
                            className="relative text-center"
                        >

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-200">
                                {step.number}
                            </div>

                            <h3 className="mt-6 font-semibold text-slate-900">
                                {step.title}
                            </h3>

                            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}