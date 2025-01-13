import { useState } from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {

    return (
        <>
            <div className="bg-black text-white min-h-screen py-8"> 
                {/* Navbar */}
                <Navbar />
                {/* Landing */}
                <Landing />
            </div>
        </>
    )
}

export default App
