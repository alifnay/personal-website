import { useState } from "react";
import Navbar from './components/Navbar.tsx';
import Landing from './components/Landing.tsx';
import Skills from './components/Skills.tsx';
import About from './components/About.tsx';
import Works from './components/Works.tsx';
import Footer from './components/Footer.tsx';
import Journey from "./components/Journey.tsx";
import CompactView from "./components/CompactView";

function App() {
    // State untuk mengatur mode tampilan
    const [isCompact, setIsCompact] = useState(false);

    // Fungsi untuk mengganti mode (dikirim ke Navbar)
    const toggleView = () => setIsCompact(!isCompact);

    return (
        <>
            <div className={`relative w-full text-gray-800 dark:text-gray-200 font-sans overflow-x-hidden selection:bg-[#FD6F00] selection:text-white transition-colors duration-300 ${isCompact ? 'bg-gray-100 dark:bg-[#111]' : 'bg-gray-50/50 dark:bg-[#0a0a0a]'}`}>
                
                {/* --- GLOBAL BACKGROUND (Hanya muncul di Creative Mode) --- */}
                {/* Kita sembunyikan background artistik saat mode Resume agar bersih */}
                {!isCompact && (
                    <div className="fixed inset-0 -z-50 min-h-screen w-full bg-white dark:bg-[#050505] transition-colors duration-300">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        
                        {/* Orbs / Blur Effects */}
                        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[#FD6F00]/10 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#E60026]/5 rounded-full blur-[120px]" />
                        
                        {/* Radial Mask */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/80 dark:to-[#050505]/80 pointer-events-none" />
                    </div>
                )}

                {/* --- NAVBAR --- */}
                {/* Kita kirim props isCompact dan toggleView ke Navbar */}
                <Navbar isCompact={isCompact} toggleView={toggleView} />

                {/* --- CONTENT SWITCHER --- */}
                <main className="relative z-10">
                    {isCompact ? (
                        // 1. MODE RESUME / COMPACT
                        <CompactView />
                    ) : (
                        // 2. MODE CREATIVE (Website Asli)
                        // Bungkus dalam Fragment atau div agar rapi
                        <>
                            <Landing />
                            <About />
                            <Skills />
                            <Journey />
                            <Works />
                            <Footer />
                        </>
                    )}
                </main>
            </div>
        </>
    )
}

export default App