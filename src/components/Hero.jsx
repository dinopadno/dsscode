import {
    ArrowRight,
    Play,
    CheckCircle2,
    TrendingUp,
    Users,
    MoreHorizontal,
} from "lucide-react";

import logo from "../assets/favicon.png";

const stats = [
    {
        label: "Pendapatan",
        value: "Rp 128,5 Jt",
        progress: 82,
    },
    {
        label: "Pelanggan",
        value: "1.248",
        progress: 68,
    },
    {
        label: "Invoice",
        value: "486",
        progress: 74,
    },
    {
        label: "Keuntungan",
        value: "Rp 42,8 Jt",
        progress: 88,
    },
];

const customers = [
    "PT Maju Jaya",
    "CV Digital Nusantara",
    "PT Sejahtera Abadi",
    "CV Makmur Sentosa",
];

const chartData = [
    30,
    45,
    38,
    65,
    52,
    78,
    62,
    88,
    70,
    96,
    80,
    100,
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">

            {/* Background */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        h-[600px]
                        w-[900px]
                        -translate-x-1/2
                        rounded-full
                        bg-indigo-100/70
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        right-0
                        top-40
                        h-72
                        w-72
                        rounded-full
                        bg-purple-100/60
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        left-0
                        top-96
                        h-72
                        w-72
                        rounded-full
                        bg-blue-100/50
                        blur-3xl
                    "
                />

            </div>


            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* =========================
                    HERO CONTENT
                ========================= */}

                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}

                    <div
                        className="
                            mx-auto
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-indigo-100
                            bg-white/80
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            text-indigo-600
                            shadow-sm
                            backdrop-blur
                            sm:text-sm
                        "
                    >

                        <span
                            className="
                                flex
                                h-5
                                w-5
                                items-center
                                justify-center
                                rounded-full
                                bg-indigo-100
                            "
                        >
                            <TrendingUp size={12} />
                        </span>

                        Solusi untuk bisnis yang terus berkembang

                    </div>


                    {/* Heading */}

                    <h1
                        className="
                            mt-7
                            text-4xl
                            font-bold
                            leading-[1.08]
                            tracking-tight
                            text-slate-950
                            sm:text-5xl
                            lg:text-7xl
                        "
                    >

                        Kelola bisnis lebih mudah.

                        <span
                            className="
                                block
                                bg-gradient-to-r
                                from-indigo-600
                                via-violet-600
                                to-purple-600
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Tumbuh lebih cepat.
                        </span>

                    </h1>


                    {/* Description */}

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-500
                            sm:text-lg
                        "
                    >
                       Kami spesialis Aplikasi Custom untuk Inventori, Pergudangan, dan POS. Kelola pelanggan, penjualan, invoice, pembayaran,
                        stok, dan laporan bisnis dalam satu platform yang
                        sederhana dan powerful.
                    </p>


                    {/* CTA */}

                    <div
                        className="
                            mt-8
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-3
                            sm:flex-row
                        "
                    >

                        <button
                            className="
                                group
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-indigo-600
                                px-6
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-indigo-200
                                transition
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-indigo-700
                                hover:shadow-xl
                            "
                        >

                            Mulai Gratis

                            <ArrowRight
                                size={17}
                                className="
                                    transition
                                    group-hover:translate-x-0.5
                                "
                            />

                        </button>


                        <button
                            className="
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-6
                                py-3.5
                                text-sm
                                font-semibold
                                text-slate-700
                                shadow-sm
                                transition
                                hover:-translate-y-0.5
                                hover:bg-slate-50
                            "
                        >

                            <Play
                                size={15}
                                fill="currentColor"
                            />

                            Lihat Demo

                        </button>

                    </div>


                    {/* Trust */}

                    <div
                        className="
                            mt-6
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-x-6
                            gap-y-2
                            text-xs
                            text-slate-400
                            sm:text-sm
                        "
                    >

                        <span className="flex items-center gap-1.5">

                            <CheckCircle2
                                size={15}
                                className="text-emerald-500"
                            />

                            Gratis 14 hari

                        </span>


                        <span className="flex items-center gap-1.5">

                            <CheckCircle2
                                size={15}
                                className="text-emerald-500"
                            />

                            Tanpa kartu kredit

                        </span>


                        <span className="flex items-center gap-1.5">

                            <CheckCircle2
                                size={15}
                                className="text-emerald-500"
                            />

                            Bisa dibatalkan kapan saja

                        </span>

                    </div>

                </div>


                {/* =========================
                    PRODUCT MOCKUP
                ========================= */}

                <div
                    className="
                        relative
                        mx-auto
                        mt-16
                        max-w-6xl
                        sm:mt-20
                    "
                >

                    {/* Glow */}

                    <div
                        className="
                            absolute
                            -inset-10
                            -z-10
                            rounded-[40px]
                            bg-indigo-200/50
                            blur-3xl
                        "
                    />


                    {/* Browser */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-2
                            shadow-2xl
                            shadow-slate-300/50
                        "
                    >

                        <div
                            className="
                                overflow-hidden
                                rounded-xl
                                border
                                border-slate-100
                                bg-slate-50
                            "
                        >

                            {/* Browser Header */}

                            <div
                                className="
                                    flex
                                    h-11
                                    items-center
                                    justify-between
                                    border-b
                                    border-slate-200
                                    bg-white
                                    px-4
                                "
                            >

                                <div className="flex items-center gap-2">

                                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />

                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />

                                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                                </div>


                                <div
                                    className="
                                        hidden
                                        h-6
                                        w-48
                                        rounded-md
                                        bg-slate-50
                                        sm:block
                                    "
                                />


                                <MoreHorizontal
                                    size={18}
                                    className="text-slate-300"
                                />

                            </div>


                            {/* Dashboard */}

                            <div className="grid min-h-[430px] grid-cols-12">

                                {/* SIDEBAR */}

                                <aside
                                    className="
                                        col-span-3
                                        hidden
                                        border-r
                                        border-slate-200
                                        bg-white
                                        p-4
                                        md:block
                                    "
                                >

                                    <div className="flex items-center gap-2">

                                        <div
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                items-center
                                                justify-center
                                                rounded-lg
                                                text-xs
                                                font-bold
                                                text-white
                                            "
                                        >
                                           <img src={logo} width="60" alt="logo" />
                                        </div>

                                        <div
                                            className="
                                                h-3
                                                w-16
                                                rounded
                                                bg-slate-200
                                            "
                                        />

                                    </div>


                                    <div className="mt-8 space-y-2">

                                        {[
                                            "Dashboard",
                                            "Pelanggan",
                                            "Penjualan",
                                            "Invoice",
                                            "Laporan",
                                        ].map((item, index) => (

                                            <div
                                                key={item}
                                                className={`
                                                    flex
                                                    items-center
                                                    gap-3
                                                    rounded-lg
                                                    px-3
                                                    py-2
                                                    ${
                                                        index === 0
                                                            ? "bg-indigo-50"
                                                            : ""
                                                    }
                                                `}
                                            >

                                                <div
                                                    className={`
                                                        h-3
                                                        w-3
                                                        rounded
                                                        ${
                                                            index === 0
                                                                ? "bg-indigo-400"
                                                                : "bg-slate-200"
                                                        }
                                                    `}
                                                />

                                                <span
                                                    className={`
                                                        text-[10px]
                                                        ${
                                                            index === 0
                                                                ? "font-semibold text-indigo-600"
                                                                : "text-slate-400"
                                                        }
                                                    `}
                                                >
                                                    {item}
                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    <div
                                        className="
                                            mt-10
                                            rounded-xl
                                            bg-slate-50
                                            p-3
                                        "
                                    >

                                        <div className="h-2 w-16 rounded bg-slate-200" />

                                        <div className="mt-2 h-2 w-24 rounded bg-slate-100" />

                                    </div>

                                </aside>


                                {/* MAIN */}

                                <main
                                    className="
                                        col-span-12
                                        p-4
                                        sm:p-6
                                        md:col-span-9
                                    "
                                >

                                    {/* Header */}

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <h3
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-slate-800
                                                    sm:text-base
                                                "
                                            >
                                                Dashboard
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-[10px]
                                                    text-slate-400
                                                    sm:text-xs
                                                "
                                            >
                                                Ringkasan bisnis Anda hari ini
                                            </p>

                                        </div>


                                        <div
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-indigo-100
                                            "
                                        >

                                            <Users
                                                size={14}
                                                className="text-indigo-500"
                                            />

                                        </div>

                                    </div>


                                    {/* Stats */}

                                    <div
                                        className="
                                            mt-5
                                            grid
                                            grid-cols-2
                                            gap-3
                                            lg:grid-cols-4
                                        "
                                    >

                                        {stats.map((stat) => (

                                            <div
                                                key={stat.label}
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-slate-100
                                                    bg-white
                                                    p-3
                                                    shadow-sm
                                                "
                                            >

                                                <p className="text-[10px] text-slate-400">
                                                    {stat.label}
                                                </p>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-sm
                                                        font-bold
                                                        text-slate-800
                                                        sm:text-base
                                                    "
                                                >
                                                    {stat.value}
                                                </p>


                                                <div
                                                    className="
                                                        mt-2
                                                        h-1
                                                        w-full
                                                        overflow-hidden
                                                        rounded-full
                                                        bg-slate-100
                                                    "
                                                >

                                                    <div
                                                        className="
                                                            h-full
                                                            rounded-full
                                                            bg-indigo-500
                                                        "
                                                        style={{
                                                            width: `${stat.progress}%`,
                                                        }}
                                                    />

                                                </div>

                                            </div>

                                        ))}

                                    </div>


                                    {/* Chart + Transactions */}

                                    <div
                                        className="
                                            mt-4
                                            grid
                                            grid-cols-1
                                            gap-4
                                            lg:grid-cols-5
                                        "
                                    >

                                        {/* Chart */}

                                        <div
                                            className="
                                                rounded-xl
                                                border
                                                border-slate-100
                                                bg-white
                                                p-4
                                                lg:col-span-3
                                            "
                                        >

                                            <div className="flex items-center justify-between">

                                                <div>

                                                    <p className="text-xs font-semibold text-slate-700">
                                                        Performa Penjualan
                                                    </p>

                                                    <p className="mt-1 text-[10px] text-slate-400">
                                                        12 bulan terakhir
                                                    </p>

                                                </div>

                                                <div
                                                    className="
                                                        rounded-lg
                                                        bg-indigo-50
                                                        px-2
                                                        py-1
                                                        text-[9px]
                                                        font-semibold
                                                        text-indigo-600
                                                    "
                                                >
                                                    +18,4%
                                                </div>

                                            </div>


                                            <div
                                                className="
                                                    mt-6
                                                    flex
                                                    h-32
                                                    items-end
                                                    gap-2
                                                "
                                            >

                                                {chartData.map((height, index) => (

                                                    <div
                                                        key={index}
                                                        className="
                                                            flex-1
                                                            rounded-t-md
                                                            bg-indigo-100
                                                        "
                                                        style={{
                                                            height: `${height}%`,
                                                        }}
                                                    />

                                                ))}

                                            </div>

                                        </div>


                                        {/* Transactions */}

                                        <div
                                            className="
                                                rounded-xl
                                                border
                                                border-slate-100
                                                bg-white
                                                p-4
                                                lg:col-span-2
                                            "
                                        >

                                            <div className="flex items-center justify-between">

                                                <p className="text-xs font-semibold text-slate-700">
                                                    Transaksi Terbaru
                                                </p>

                                                <span
                                                    className="
                                                        text-[9px]
                                                        font-medium
                                                        text-indigo-600
                                                    "
                                                >
                                                    Lihat semua
                                                </span>

                                            </div>


                                            <div className="mt-5 space-y-4">

                                                {customers.map((customer, index) => (

                                                    <div
                                                        key={customer}
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                        "
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            <div
                                                                className="
                                                                    flex
                                                                    h-7
                                                                    w-7
                                                                    items-center
                                                                    justify-center
                                                                    rounded-full
                                                                    bg-indigo-50
                                                                "
                                                            >
                                                                <Users
                                                                    size={12}
                                                                    className="text-indigo-400"
                                                                />
                                                            </div>


                                                            <div>

                                                                <p
                                                                    className="
                                                                        max-w-[100px]
                                                                        truncate
                                                                        text-[9px]
                                                                        font-medium
                                                                        text-slate-700
                                                                    "
                                                                >
                                                                    {customer}
                                                                </p>

                                                                <p className="mt-1 text-[8px] text-slate-400">
                                                                    Invoice #{1024 + index}
                                                                </p>

                                                            </div>

                                                        </div>


                                                        <span
                                                            className="
                                                                text-[9px]
                                                                font-semibold
                                                                text-emerald-500
                                                            "
                                                        >
                                                            Lunas
                                                        </span>

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

                                    </div>


                                    {/* Bottom */}

                                    <div
                                        className="
                                            mt-4
                                            hidden
                                            rounded-xl
                                            border
                                            border-slate-100
                                            bg-white
                                            p-4
                                            sm:block
                                        "
                                    >

                                        <div className="grid grid-cols-4 gap-4">

                                            {[
                                                "Nama Pelanggan",
                                                "Invoice",
                                                "Tanggal",
                                                "Status",
                                            ].map((item) => (

                                                <p
                                                    key={item}
                                                    className="
                                                        text-[9px]
                                                        font-semibold
                                                        text-slate-400
                                                    "
                                                >
                                                    {item}
                                                </p>

                                            ))}

                                        </div>

                                    </div>

                                </main>

                            </div>

                        </div>

                    </div>


                    {/* FLOATING REVENUE */}

                    <div
                        className="
                            absolute
                            -left-5
                            bottom-16
                            hidden
                            w-48
                            rounded-2xl
                            border
                            border-slate-100
                            bg-white
                            p-4
                            shadow-xl
                            sm:block
                            lg:-left-10
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-[11px] text-slate-400">
                                    Pendapatan
                                </p>

                                <p className="mt-1 text-lg font-bold text-slate-900">
                                    Rp 128,5 Jt
                                </p>

                            </div>


                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-emerald-50
                                    text-emerald-500
                                "
                            >

                                <TrendingUp size={17} />

                            </div>

                        </div>


                        <p className="mt-3 text-[11px] font-medium text-emerald-500">
                            ↑ 18,4% bulan ini
                        </p>

                    </div>


                    {/* FLOATING CUSTOMERS */}

                    <div
                        className="
                            absolute
                            -right-5
                            top-20
                            hidden
                            w-48
                            rounded-2xl
                            border
                            border-slate-100
                            bg-white
                            p-4
                            shadow-xl
                            sm:block
                            lg:-right-10
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-indigo-50
                                    text-indigo-600
                                "
                            >

                                <Users size={18} />

                            </div>


                            <div>

                                <p className="text-[11px] text-slate-400">
                                    Pelanggan baru
                                </p>

                                <p className="mt-1 text-lg font-bold">
                                    +128
                                </p>

                            </div>

                        </div>


                        <div
                            className="
                                mt-3
                                h-1.5
                                overflow-hidden
                                rounded-full
                                bg-slate-100
                            "
                        >

                            <div
                                className="
                                    h-full
                                    w-4/5
                                    rounded-full
                                    bg-indigo-500
                                "
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}