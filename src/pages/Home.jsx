import Header from "../components/Header";
import CardGrid from "../components/CardGrid";
import Hero from "../components/Hero";
import LoginDemo from "./LoginDemo";
import FeaturesData from "../data/features";
import { useState } from "react";

function Home () {
    const [features] = useState(FeaturesData);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            <Header onLoginClick={() => setShowLogin(true)} />
            <Hero />

            {/* Login Modal */}
            {showLogin && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="relative">
                        <button
                            onClick={() => setShowLogin(false)}
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 text-xl z-10"
                        >
                            ✕
                        </button>
                        <LoginDemo />
                    </div>
                </div>
            )}

            <CardGrid features={features} />
            <footer className="bg-slate-900 text-white text-center py-6 text-sm">
                <p>&copy; 2025 BrandKu. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;