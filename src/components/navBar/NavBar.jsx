import React from "react";
import downloadIcon from '../../assets/navbar/download.png';
import aboutIcon from '../../assets/navbar/about.png';
import homeIcon from '../../assets/navbar/home.png';
import './NavBar.css';

export default function NavBar() {
    const goToHome = () => {
        window.scrollTo(0, 0);
    }

    const goToProjects = () => {
        window.scrollTo(0, 1000);
    }

    return (
        <nav>
            <button onClick={goToHome}><img src={homeIcon} alt="Home icon" width={23} height={23} /></button>
            <button onClick={goToProjects}><img src={aboutIcon} alt="About me icon" width={23} height={23} /></button>
            <button><img src={downloadIcon} alt="Download icon" width={20} height={20} /></button>
        </nav>
    );
}