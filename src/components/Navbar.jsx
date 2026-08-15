import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100/80 bg-white/80 backdrop-blur-xl">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}

                    <a href="#" className="flex items-center gap-2">

                        <img src={logo} width="190" alt="logo" />

                    </a>


                    {/* Desktop Navigation */}

                    <nav className="hidden items-center gap-8 md:flex">

                        <a
                            href="#fitur"
                            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                        >
                            Fitur
                        </a>

                        <a
                            href="#cara-kerja"
                            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                        >
                            Cara Kerja
                        </a>

                        <a
                            href="#harga"
                            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                        >
                            Harga
                        </a>

                        <a
                            href="#faq"
                            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                        >
                            FAQ
                        </a>

                    </nav>


                    {/* Desktop CTA */}

                    <div className="hidden items-center gap-3 md:flex">

                        <button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
                            Login
                        </button>

                        <button className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                            Mulai Gratis
                        </button>

                    </div>


                    {/* Mobile Button */}

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>

                </div>


                {/* Mobile Menu */}

                {open && (
                    <div className="border-t border-slate-100 py-4 md:hidden">

                        <nav className="flex flex-col">

                            {[
                                ["Fitur", "#fitur"],
                                ["Cara Kerja", "#cara-kerja"],
                                ["Harga", "#harga"],
                                ["FAQ", "#faq"],
                            ].map(([label, href]) => (

                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                                >
                                    {label}
                                </a>

                            ))}

                            <div className="mt-3 flex gap-2 border-t border-slate-100 pt-4">

                                <button className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">
                                    Login
                                </button>

                                <button className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">
                                    Mulai Gratis
                                </button>

                            </div>

                        </nav>

                    </div>
                )}

            </div>

        </header>
    );
}