import React from 'react'
import styles from './styles.module.css'


export const MainPage = ({ name, description }) => {
    return (
        <div className="center-text">
            <div className="title">{name}</div>
            <br/><br/>
            <h2>About Me</h2>
            <p>{description}</p>
        </div>
    );
}
