import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Apakah saya bisa mencoba secara gratis?",
        answer:
            "Ya. Anda dapat mencoba fitur utama secara gratis selama 14 hari. Anda tidak perlu memasukkan kartu kredit untuk memulai.",
    },
    {
        question: "Apakah data bisnis saya aman?",
        answer:
            "Ya. Kami menggunakan berbagai praktik keamanan untuk membantu melindungi akun dan data bisnis Anda.",
    },
    {
        question: "Apakah saya bisa mengganti paket?",
        answer:
            "Tentu. Anda dapat melakukan upgrade atau menyesuaikan paket sesuai dengan kebutuhan bisnis Anda.",
    },
    {
        question: "Apakah saya bisa berhenti kapan saja?",
        answer:
            "Ya. Tidak ada kontrak jangka panjang. Anda dapat membatalkan langganan kapan saja.",
    },
    {
        question: "Apakah bisa digunakan melalui HP?",
        answer:
            "Ya. Platform dirancang agar dapat digunakan melalui komputer, tablet, maupun smartphone.",
    },
];

export default function FAQ() {

    const [active, setActive] = useState(0);

    return (
        <section id="faq" className="py-24">

            <div className="mx-auto max-w-3xl px-5 lg:px-8">

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                        Pertanyaan umum
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Pertanyaan yang sering ditanyakan
                    </h2>

                    <p className="mt-4 text-slate-500">
                        Temukan jawaban atas pertanyaan umum mengenai platform kami.
                    </p>

                </div>


                <div className="mt-12 space-y-3">

                    {faqs.map((faq, index) => {

                        const isOpen = active === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                            >

                                <button
                                    onClick={() =>
                                        setActive(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                                >

                                    <span className="text-sm font-semibold text-slate-800">
                                        {faq.question}
                                    </span>

                                    {isOpen ? (
                                        <Minus
                                            size={18}
                                            className="shrink-0 text-indigo-600"
                                        />
                                    ) : (
                                        <Plus
                                            size={18}
                                            className="shrink-0 text-slate-400"
                                        />
                                    )}

                                </button>


                                {isOpen && (

                                    <div className="px-5 pb-5 text-sm leading-6 text-slate-500">
                                        {faq.answer}
                                    </div>

                                )}

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}