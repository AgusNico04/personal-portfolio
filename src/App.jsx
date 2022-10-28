import React from 'react';
import Header from './components/header/Header';
import MainSection from './components/mainSection/MainSection';
import KnowledgesSection from './components/knowledgeSection/KnowledgeSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';
import ContactSection from './components/contactSection/ContactSection';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <MainSection />
            <KnowledgesSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
