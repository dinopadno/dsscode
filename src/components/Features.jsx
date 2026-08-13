import {
    Users,
    Receipt,
    BarChart3,
    Zap,
    ShieldCheck,
    Smartphone
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Customer Management",
        description:
            "Keep all customer information organized and accessible from one place."
    },
    {
        icon: Receipt,
        title: "Smart Invoicing",
        description:
            "Create professional invoices and track payment status effortlessly."
    },
    {
        icon: BarChart3,
        title: "Powerful Reports",
        description:
            "Understand your business with real-time analytics and reports."
    },
    {
        icon: Zap,
        title: "Automation",
        description:
            "Automate repetitive tasks and spend more time growing your business."
    },
    {
        icon: ShieldCheck,
        title: "Secure",
        description:
            "Your business data is protected with enterprise-grade security."
    },
    {
        icon: Smartphone,
        title: "Anywhere Access",
        description:
            "Access your business from your laptop, tablet or smartphone."
    }
];

export default function Features() {

    return (
        <section
            id="features"
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
                        Powerful features
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        font-bold
                        tracking-tight
                        sm:text-4xl
                    ">
                        Everything your business needs
                    </h2>

                    <p className="
                        mt-4
                        text-slate-500
                    ">
                        Simple tools designed to help you
                        manage your business more efficiently.
                    </p>

                </div>


                <div className="
                    mt-14
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                ">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-7
                                    transition
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    hover:shadow-slate-200/50
                                "
                            >

                                <div className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-indigo-50
                                    text-indigo-600
                                ">
                                    <Icon size={21} />
                                </div>

                                <h3 className="
                                    mt-5
                                    text-lg
                                    font-semibold
                                ">
                                    {feature.title}
                                </h3>

                                <p className="
                                    mt-2
                                    text-sm
                                    leading-6
                                    text-slate-500
                                ">
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