import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Andi Pratama",
        role: "Founder, Maju Jaya",
        text: "Sebelumnya kami menggunakan banyak spreadsheet untuk mengelola bisnis. Setelah menggunakan SaaSify, semuanya jauh lebih terorganisir.",
        initials: "AP",
    },
    {
        name: "Rina Permata",
        role: "Business Owner",
        text: "Yang paling saya suka adalah dashboard-nya. Saya bisa langsung melihat kondisi bisnis tanpa harus membuka banyak file.",
        initials: "RP",
    },
    {
        name: "Budi Santoso",
        role: "CEO, Digital Nusantara",
        text: "Proses invoice dan monitoring pembayaran sekarang jauh lebih cepat. Tim kami juga lebih mudah bekerja sama.",
        initials: "BS",
    },
];

export default function Testimonials() {

    return (
        <section className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                        Customer stories
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Loved by business owners
                    </h2>

                    <p className="mt-4 text-slate-500">
                        See how businesses are simplifying their daily operations.
                    </p>

                </div>


                <div className="
                    mt-14
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-3
                ">

                    {testimonials.map((testimonial) => (

                        <div
                            key={testimonial.name}
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-7
                            "
                        >

                            {/* Stars */}

                            <div className="flex gap-1">

                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={16}
                                        fill="currentColor"
                                        className="text-amber-400"
                                    />
                                ))}

                            </div>


                            <p className="
                                mt-5
                                text-sm
                                leading-7
                                text-slate-600
                            ">
                                "{testimonial.text}"
                            </p>


                            <div className="
                                mt-7
                                flex
                                items-center
                                gap-3
                            ">

                                <div className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-indigo-100
                                    text-sm
                                    font-bold
                                    text-indigo-600
                                ">
                                    {testimonial.initials}
                                </div>

                                <div>

                                    <p className="
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    ">
                                        {testimonial.name}
                                    </p>

                                    <p className="
                                        text-xs
                                        text-slate-400
                                    ">
                                        {testimonial.role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}