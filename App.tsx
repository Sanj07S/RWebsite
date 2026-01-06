import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { Benefits } from "./components/Benefits";
import { Comparison } from "./components/Comparison";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";



const App: React.FC = () => {
return (
<div className="font-sans text-gray-800 antialiased selection:bg-optarix-cyan selection:text-optarix-blue">
<Navbar />
<main>
<Hero />
<Services />
<Approach />
<Benefits />
<Comparison />
<Contact />
</main>
<Footer />
</div>
);
};



export default App;