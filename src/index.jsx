import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import MainSection from './components/mainSection/MainSection';
import KnowledgesSection from './components/knowledgeSection/KnowledgeSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';
import ContactSection from './components/contactSection/ContactSection';
import Footer from './components/footer/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <MainSection />
        <KnowledgesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
    </>
);