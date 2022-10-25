import React from 'react';
import Header from './components/header/Header';
import MainSection from './components/mainSection/MainSection';
import KnowledgesSection from './components/knowledgeSection/KnowledgeSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <KnowledgesSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
