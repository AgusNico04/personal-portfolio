import React from "react";
import chatProject from '../../assets/projectsSection/real_time_chat.png';
import loginProject from '../../assets/projectsSection/login_node.png';
import ticTacToeProject from '../../assets/projectsSection/tic_tac_toe.png';
import crudProject from '../../assets/projectsSection/crud_project.png';
import './ProjectsSection.css';

export default function ProjectsSection() {
    return (
        <section id='projects'>
            <div id="projects-title">
                <p>Projects</p>
            </div>
            <div id='projects-list'>
                <ul>
                    <li><p>Real Time Chat</p><img src={chatProject} alt='Real time chat project' width={90} height={90}/><a href='https://real-time-chat-04.herokuapp.com' target='_blank' rel='noreferrer noopener'>Visit App</a></li>
                    <li><p>Login with NodeJS</p><img src={loginProject} alt='Login with nodejs project' width={90} height={90}/><a href='https://login-node-production.up.railway.app/' target='_blank' rel='noreferrer noopener'>Visit App</a></li>
                    <li><p>CRUD with NodeJS</p><img src={crudProject} alt='CRUD project' width={90} height={90}/><a href='https://crud-production-9a93.up.railway.app/' target='_blank' rel='noreferrer noopener'>Visit App</a></li>
                    <li><p>Tic Tac Toe</p><img src={ticTacToeProject} alt='Tic Tac Toe project' width={90} height={90}/><a href='https://agusnico04.github.io/Tic-Tac-Toe' target='_blank' rel='noreferrer noopener'>Visit App</a></li>
                    <li><p>Angular with C# (In progress)</p><img src="" alt='? Project' width={90} height={90}/></li>
                </ul>
            </div>
        </section>
    );
}