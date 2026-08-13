import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="
            fixed
            top-0
            z-50
            w-full
            border-b
            border-slate-200/60
            bg-white/80
            backdrop-blur-xl
        ">

            <div className="
                mx-auto
                flex
                h-16
                max-w-7xl
                items-center
                justify-between
                px-5
                lg:px-8
            ">

                {/* Logo */}

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
                    ">
                        SaaSify
                    </span>

                </a>


                {/* Desktop Menu */}

                <nav className="
                    hidden
                    items-center
                    gap-8
                    md:flex
                ">

                    <a
                        href="#features"
                        className="text-sm text-slate-600 hover:text-slate-900"
                    >
                        Features
                    </a>

                    <a
                        href="#how-it-works"
                        className="text-sm text-slate-600 hover:text-slate-900"
                    >
                        How it works
                    </a>

                    <a
                        href="#pricing"
                        className="text-sm text-slate-600 hover:text-slate-900"
                    >
                        Pricing
                    </a>

                    <a
                        href="#faq"
                        className="text-sm text-slate-600 hover:text-slate-900"
                    >
                        FAQ
                    </a>

                </nav>


                {/* Desktop CTA */}

                <div className="
                    hidden
                    items-center
                    gap-3
                    md:flex
                ">

                    <button className="
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        hover:text-slate-900
                    ">
                        Login
                    </button>

                    <button className="
                        rounded-xl
                        bg-slate-900
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-slate-800
                    ">
                        Get Started
                    </button>

                </div>


                {/* Mobile */}

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open
                        ? <X size={24} />
                        : <Menu size={24} />
                    }
                </button>

            </div>


            {open && (

                <div className="
                    border-t
                    border-slate-200
                    bg-white
                    p-5
                    md:hidden
                ">

                    <nav className="space-y-4">

                        <a
                            href="#features"
                            className="block text-sm"
                            onClick={() => setOpen(false)}
                        >
                            Features
                        </a>

                        <a
                            href="#pricing"
                            className="block text-sm"
                            onClick={() => setOpen(false)}
                        >
                            Pricing
                        </a>

                        <a
                            href="#faq"
                            className="block text-sm"
                            onClick={() => setOpen(false)}
                        >
                            FAQ
                        </a>

                        <button className="
                            w-full
                            rounded-xl
                            bg-slate-900
                            py-3
                            text-sm
                            font-semibold
                            text-white
                        ">
                            Get Started
                        </button>

                    </nav>

                </div>

            )}

        </header>
    );
}