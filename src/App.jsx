import { useState } from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';

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
