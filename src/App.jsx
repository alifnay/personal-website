import { useState } from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills';
import About from './components/About';

function App() {

    return (
        <>
            <div className="bg-black text-white min-h-screen py-8"> 
                {/* Navbar */}
                <Navbar />
                {/* Landing */}
                <Landing />
                {/* Skills */}
                <Skills />
                {/* About */}
                <About />
            </div>
        </>
    )
}

export default App
