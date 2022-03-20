import React from "react";
import './NameCard.css'

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({ sname }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${nameCheapUrl}${sname}`}
        >
            <div className="result-name-card">
                <p className="result-name">{sname}</p>
            </div>
        </a>
    )
}

export default NameCard