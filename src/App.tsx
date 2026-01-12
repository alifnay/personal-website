import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Works from './components/Works.js';
import Footer from './components/Footer.js';

function App() {

    return (
        <>
            <div className="min-h-screen pt-8"> 
                {/* Navbar */}
                <Navbar />
                {/* Landing */}
                <Landing />
                {/* Skills */}
                <Skills />
                {/* About */}
                <About />
                {/* About */}
                <Works />
                {/* About */}
                <Footer />
            </div>
        </>
    )
}

export default App
