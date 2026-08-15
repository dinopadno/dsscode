export default function TrustedCompanies() {

    const companies = [
        "CV MAR JAYA SENTOSA",
        "KEDAI RAZ 334",
        "DIGITAL.CO",
        "TB. KARYA MAKMUR",
    ];

    return (
        <section className="border-y border-slate-100 bg-white py-10">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Dipercaya oleh bisnis dan UMKM yang terus berkembang
                </p>


                <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">

                    {companies.map((company) => (

                        <div
                            key={company}
                            className="flex items-center justify-center text-sm font-bold tracking-wider text-slate-300"
                        >
                            {company}
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}