import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Works from './components/Works.js';
import Footer from './components/Footer.js';

function App() {

    return (
        <>
            <div className="relative w-full text-gray-800 dark:text-gray-200 font-sans overflow-x-hidden selection:bg-[#FD6F00] selection:text-white">
                
                {/* --- GLOBAL BACKGROUND --- */}
                <div className="fixed inset-0 -z-50 min-h-screen w-full bg-white dark:bg-[#050505] transition-colors duration-300">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[#FD6F00]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#E60026]/5 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/80 dark:to-[#050505]/80 pointer-events-none" />
                </div>

                {/* --- CONTENT --- */}
                <Navbar />
                <Landing />
                <Skills />
                <About />
                <Works />
                <Footer />
            </div>
        </>
    )
}

export default App
