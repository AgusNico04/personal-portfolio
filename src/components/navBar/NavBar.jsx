import React from "react";
import downloadIcon from '../../assets/navbar/download.png';
import aboutIcon from '../../assets/navbar/about.png';
import contactIcon from '../../assets/navbar/contact.png';
import knowledgeIcon from '../../assets/navbar/knowledge.png';
import projectsIcon from '../../assets/navbar/projects.png';
import './NavBar.css';

export default function NavBar() {
    const goToAboutMe = () => {
        window.scrollTo(0, 300);
    }

    const goToKnowledge = () => {
        window.scrollTo(0, 500);
    }

    const goToProjects = () => {
        window.scrollTo(0, 900);
    }

    const goToContact = () => {
        window.scrollTo(0, 1250);
    }

    return (
        <nav>
            <button onClick={goToAboutMe}><img src={aboutIcon} alt="About me icon" width={23} height={23} /></button>
            <button onClick={goToKnowledge}><img src={knowledgeIcon} alt="Knowledge icon" width={23} height={23} /></button>
            <button onClick={goToProjects}><img src={projectsIcon} alt="Projects icon" width={26} height={26} /></button>
            <button onClick={goToContact}><img src={contactIcon} alt="Contact icon" width={23} height={25} /></button>
            <button><img src={downloadIcon} alt="Download icon" width={20} height={20} /></button>
        </nav>
    );
}