const plans = [
    {
        name: "Starter",
        price: "99K",
        description: "For individuals and small businesses.",
        features: [
            "1 User",
            "500 Customers",
            "Basic Reports",
            "Email Support"
        ]
    },
    {
        name: "Professional",
        price: "249K",
        description: "For growing businesses.",
        popular: true,
        features: [
            "5 Users",
            "Unlimited Customers",
            "Advanced Reports",
            "Automation",
            "Priority Support"
        ]
    },
    {
        name: "Business",
        price: "499K",
        description: "For teams and established businesses.",
        features: [
            "Unlimited Users",
            "Unlimited Customers",
            "Advanced Analytics",
            "API Access",
            "Dedicated Support"
        ]
    }
];

export default function Pricing() {

    return (
        <section
            id="pricing"
            className="py-24"
        >

            <div className="
                mx-auto
                max-w-7xl
                px-5
                lg:px-8
            ">

                <div className="
                    mx-auto
                    max-w-2xl
                    text-center
                ">

                    <p className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wider
                        text-indigo-600
                    ">
                        Pricing
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        sm:text-4xl
                    ">
                        Simple pricing that scales
                    </h2>

                    <p className="
                        mt-4
                        text-slate-500
                    ">
                        Start small and upgrade when your
                        business grows.
                    </p>

                </div>


                <div className="
                    mx-auto
                    mt-14
                    grid
                    max-w-6xl
                    grid-cols-1
                    gap-6
                    lg:grid-cols-3
                ">

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`
                                relative
                                rounded-2xl
                                border
                                p-7
                                ${
                                    plan.popular
                                        ? "border-indigo-500 shadow-xl shadow-indigo-100"
                                        : "border-slate-200"
                                }
                            `}
                        >

                            {plan.popular && (

                                <div className="
                                    absolute
                                    -top-3
                                    left-1/2
                                    -translate-x-1/2
                                    rounded-full
                                    bg-indigo-600
                                    px-4
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-white
                                ">
                                    Most Popular
                                </div>

                            )}

                            <h3 className="
                                text-lg
                                font-semibold
                            ">
                                {plan.name}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                text-slate-500
                            ">
                                {plan.description}
                            </p>

                            <div className="mt-6">

                                <span className="
                                    text-4xl
                                    font-bold
                                ">
                                    Rp {plan.price}
                                </span>

                                <span className="
                                    text-sm
                                    text-slate-400
                                ">
                                    /month
                                </span>

                            </div>


                            <button className={`
                                mt-7
                                w-full
                                rounded-xl
                                py-3
                                text-sm
                                font-semibold
                                ${
                                    plan.popular
                                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                                }
                            `}>
                                Get Started
                            </button>


                            <div className="
                                mt-7
                                space-y-3
                            ">

                                {plan.features.map((feature) => (

                                    <div
                                        key={feature}
                                        className="
                                            flex
                                            gap-3
                                            text-sm
                                            text-slate-600
                                        "
                                    >

                                        <span className="
                                            text-indigo-600
                                        ">
                                            ✓
                                        </span>

                                        {feature}

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}