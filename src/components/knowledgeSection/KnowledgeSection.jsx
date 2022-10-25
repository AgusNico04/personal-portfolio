import React from "react";
import javascriptLogo from '../../assets/knowledgesSection/js.png';
import typescriptLogo from '../../assets/knowledgesSection/ts.png';
import htmlLogo from '../../assets/knowledgesSection/html5.png';
import cssLogo from '../../assets/knowledgesSection/css3.png';
import nodeLogo from '../../assets/knowledgesSection/nodejs.png';
import nestLogo from '../../assets/knowledgesSection/nestjs.png';
import expressLogo from '../../assets/knowledgesSection/expressjs.png';
import angularLogo from '../../assets/knowledgesSection/angular.png';
import reactLogo from '../../assets/knowledgesSection/react.png';
import javaLogo from '../../assets/knowledgesSection/java.png';
import pythonLogo from '../../assets/knowledgesSection/python.png';
import cppLogo from '../../assets/knowledgesSection/cpp.png';
import csharpLogo from '../../assets/knowledgesSection/csharp.png';
import gitLogo from '../../assets/knowledgesSection/git.png';
import githubLogo from '../../assets/knowledgesSection/github.png';
import dockerLogo from '../../assets/knowledgesSection/docker.png';
import './KnowledgeSection.css';

export default function KnowledgeSection() {
    return (
        <section id="knowledge">
            <div id="knowledge-title">
                <p>Knowledge (Techonologies and programming languages)</p>
            </div>

            <div id="knowledge-list">
                <ul>
                    <li><img src={javascriptLogo} alt="Javascript logo" width={40} height={40} /><p>Javascipt</p></li>
                    <li><img src={htmlLogo} alt="HTML logo" width={45} height={45} /><p>HTML5</p></li>
                    <li><img src={cssLogo} alt="CSS logo" width={45} height={45} /><p>CSS3</p></li>
                    <li><img src={nodeLogo} alt="NodeJS logo" width={45} height={45} /><p>NodeJS</p></li>
                    <li><img src={nestLogo} alt="NestJS logo" width={45} height={45} /><p>NestJS</p></li>
                    <li><img src={expressLogo} alt="ExpressJS logo" width={45} height={45} /><p>ExpressJS</p></li>
                    <li><img src={angularLogo} alt="Angular logo" width={45} height={45} /><p>Angular</p></li>
                    <li><img src={reactLogo} alt="React logo" width={45} height={45} /><p>React</p></li>
                    
                </ul>
                
                <ul>
                    <li><img src={typescriptLogo} alt="Typescript logo" width={42} height={42} /><p>Typescript</p></li>
                    <li><img src={javaLogo} alt="Java logo" width={45} height={45} /><p>Java</p></li>
                    <li><img src={pythonLogo} alt="Python logo" width={45} height={45} /><p>Python</p></li>
                    <li><img src={cppLogo} alt="C++ logo" width={45} height={45} /><p>C++</p></li>
                    <li><img src={csharpLogo} alt="C# logo" width={45} height={45} /><p>C#</p></li>
                    <li><img src={gitLogo} alt="Git logo" width={45} height={45} /><p>Git</p></li>
                    <li><img src={githubLogo} alt="Github logo" width={45} height={45} /><p>GitHub</p></li>
                    <li><img src={dockerLogo} alt="Docker logo" width={45} height={45} /><p>Docker</p></li>
                </ul>
            </div>
        </section>
    );
}