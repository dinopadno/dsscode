import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import ProductShowcase from "../components/ProductShowcase";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <Navbar />

            <main>

                <Hero />

                <TrustedCompanies />

                <Features />

                <HowItWorks />

                <ProductShowcase />

                <Testimonials />

                <Pricing />

                <FAQ />

                <CTA />

            </main>

            <Footer />

        </div>
    );
}