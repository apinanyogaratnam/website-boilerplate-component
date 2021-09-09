import React from 'react';

export const Links = ({ linkedin = undefined, facebook = undefined, github = undefined, email = undefined }) => {
    return (
        <div>
            <h2>Links</h2>
            {linkedin ? <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> : null}
            {facebook ? <a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a> : null}
            {github ? <a href={github} target="_blank" rel="noopener noreferrer">Github</a> : null}
            {email ? <a href={`mailto:${email}`}>Email</a> : null}
        </div>
    )
}
