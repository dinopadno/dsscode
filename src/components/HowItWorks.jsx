export default function HowItWorks() {

    const steps = [
        {
            number: "01",
            title: "Create your account",
            description:
                "Sign up in less than a minute and create your business workspace."
        },
        {
            number: "02",
            title: "Set up your business",
            description:
                "Add your customers, products and business information."
        },
        {
            number: "03",
            title: "Start growing",
            description:
                "Manage your business and monitor performance from one dashboard."
        }
    ];

    return (
        <section
            id="how-it-works"
            className="bg-slate-50 py-24"
        >

            <div className="
                mx-auto
                max-w-7xl
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
                        How it works
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        sm:text-4xl
                    ">
                        Get started in minutes
                    </h2>

                </div>


                <div className="
                    mx-auto
                    mt-14
                    grid
                    max-w-5xl
                    grid-cols-1
                    gap-10
                    md:grid-cols-3
                ">

                    {steps.map((step) => (

                        <div
                            key={step.number}
                            className="text-center"
                        >

                            <div className="
                                mx-auto
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-indigo-600
                                text-lg
                                font-bold
                                text-white
                            ">
                                {step.number}
                            </div>

                            <h3 className="
                                mt-5
                                text-lg
                                font-semibold
                            ">
                                {step.title}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-500
                            ">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}