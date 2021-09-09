import React from 'react';
import styles from './styles.module.css';
import { Links } from './components/links.js';


export const MainPage = ({ name, description, linkedin, github, facebook, email }) => {
    return (
        <div className="center-text">
            <div className="title">{name}</div>
            <br/><br/>
            <h2>About Me</h2>
            <p>{description}</p>
            <Links linkedin={linkedin} github={github} facebook={facebook} email={email} />
        </div>
    );
}
