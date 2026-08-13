import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

export default function Footer() {

    const productLinks = [
        "Features",
        "Pricing",
        "Integrations",
        "Changelog",
    ];

    const companyLinks = [
        "About",
        "Blog",
        "Careers",
        "Contact",
    ];

    const resourceLinks = [
        "Help Center",
        "Documentation",
        "API",
        "Community",
    ];

    return (
        <footer className="border-t border-slate-200 bg-white">

            <div className="
                mx-auto
                max-w-7xl
                px-5
                py-14
                lg:px-8
            ">

                <div className="
                    grid
                    grid-cols-1
                    gap-10
                    md:grid-cols-2
                    lg:grid-cols-5
                ">

                    {/* Brand */}

                    <div className="lg:col-span-2">

                        <a
                            href="#"
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <div className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                bg-indigo-600
                                font-bold
                                text-white
                            ">
                                S
                            </div>

                            <span className="
                                text-lg
                                font-bold
                                text-slate-900
                            ">
                                SaaSify
                            </span>

                        </a>


                        <p className="
                            mt-5
                            max-w-sm
                            text-sm
                            leading-6
                            text-slate-500
                        ">
                            A simple and powerful platform to help
                            growing businesses manage their operations
                            and grow faster.
                        </p>


                        {/* Contact */}

                        <div className="
                            mt-6
                            space-y-3
                            text-sm
                            text-slate-500
                        ">

                            <div className="flex items-center gap-3">
                                <Mail size={17} />
                                hello@saasify.com
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={17} />
                                +62 812 3456 7890
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={17} />
                                Bandung, Indonesia
                            </div>

                        </div>

                    </div>


                    {/* Product */}

                    <div>

                        <h3 className="
                            text-sm
                            font-semibold
                            text-slate-900
                        ">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3">

                            {productLinks.map((link) => (
                                <li key={link}>

                                    <a
                                        href="#"
                                        className="
                                            text-sm
                                            text-slate-500
                                            hover:text-slate-900
                                        "
                                    >
                                        {link}
                                    </a>

                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* Company */}

                    <div>

                        <h3 className="
                            text-sm
                            font-semibold
                            text-slate-900
                        ">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">

                            {companyLinks.map((link) => (
                                <li key={link}>

                                    <a
                                        href="#"
                                        className="
                                            text-sm
                                            text-slate-500
                                            hover:text-slate-900
                                        "
                                    >
                                        {link}
                                    </a>

                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* Resources */}

                    <div>

                        <h3 className="
                            text-sm
                            font-semibold
                            text-slate-900
                        ">
                            Resources
                        </h3>

                        <ul className="mt-5 space-y-3">

                            {resourceLinks.map((link) => (
                                <li key={link}>

                                    <a
                                        href="#"
                                        className="
                                            text-sm
                                            text-slate-500
                                            hover:text-slate-900
                                        "
                                    >
                                        {link}
                                    </a>

                                </li>
                            ))}

                        </ul>

                    </div>

                </div>


                {/* Bottom */}

                <div className="
                    mt-12
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-slate-200
                    pt-7
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                ">

                    <p className="
                        text-xs
                        text-slate-400
                    ">
                        © 2026 dsscode. All rights reserved.
                    </p>


                    <div className="
                        flex
                        gap-5
                    ">

                        <a
                            href="#"
                            className="
                                text-xs
                                text-slate-400
                                hover:text-slate-700
                            "
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="
                                text-xs
                                text-slate-400
                                hover:text-slate-700
                            "
                        >
                            Terms of Service
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}