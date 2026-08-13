import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Can I try the product for free?",
        answer:
            "Yes. You can try all core features during the free trial period. No credit card is required to get started.",
    },
    {
        question: "Is my business data secure?",
        answer:
            "Yes. We use modern security practices to protect your account and business data.",
    },
    {
        question: "Can I upgrade my plan later?",
        answer:
            "Absolutely. You can upgrade your subscription whenever your business needs more users or features.",
    },
    {
        question: "Can I cancel anytime?",
        answer:
            "Yes. There is no long-term contract. You can cancel your subscription whenever you want.",
    },
    {
        question: "Does it work on mobile?",
        answer:
            "Yes. The platform is designed to work across desktop, tablet and mobile devices.",
    },
];

export default function FAQ() {

    const [active, setActive] = useState(0);

    return (
        <section
            id="faq"
            className="py-24"
        >

            <div className="
                mx-auto
                max-w-3xl
                px-5
                lg:px-8
            ">

                <div className="text-center">

                    <p className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wider
                        text-indigo-600
                    ">
                        FAQ
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        tracking-tight
                        sm:text-4xl
                    ">
                        Frequently asked questions
                    </h2>

                    <p className="
                        mt-4
                        text-slate-500
                    ">
                        Everything you need to know before getting started.
                    </p>

                </div>


                <div className="mt-12 space-y-3">

                    {faqs.map((faq, index) => {

                        const isOpen = active === index;

                        return (
                            <div
                                key={faq.question}
                                className="
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                "
                            >

                                <button
                                    onClick={() =>
                                        setActive(
                                            isOpen
                                                ? null
                                                : index
                                        )
                                    }
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        gap-5
                                        px-5
                                        py-5
                                        text-left
                                    "
                                >

                                    <span className="
                                        text-sm
                                        font-semibold
                                        text-slate-800
                                    ">
                                        {faq.question}
                                    </span>

                                    {isOpen
                                        ? (
                                            <Minus
                                                size={18}
                                                className="shrink-0 text-indigo-600"
                                            />
                                        )
                                        : (
                                            <Plus
                                                size={18}
                                                className="shrink-0 text-slate-400"
                                            />
                                        )
                                    }

                                </button>


                                {isOpen && (

                                    <div className="
                                        px-5
                                        pb-5
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    ">
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