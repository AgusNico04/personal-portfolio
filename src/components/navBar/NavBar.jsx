import React from "react";
import aboutIcon from '../../assets/navbar/about.png';
import contactIcon from '../../assets/navbar/contact.png';
import knowledgeIcon from '../../assets/navbar/knowledge.png';
import projectsIcon from '../../assets/navbar/projects.png';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav id='nav'>
            <a href='#presentation'><img src={aboutIcon} alt="About me icon" width={23} height={23} /></a>
            <a href='#knowledge' ><img src={knowledgeIcon} alt="Knowledge icon" width={23} height={23} /></a>
            <a href='#projects'><img src={projectsIcon} alt="Projects icon" width={26} height={26} /></a>
            <a href='#contact'><img src={contactIcon} alt="Contact icon" width={23} height={25} /></a>
        </nav>
    );
}