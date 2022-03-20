import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultsContainer.css'

const ResultsContainer = ({ SuggestedName }) => {

    const SuggestedNamejsx = SuggestedName.map((sname) => {
        return <NameCard key={sname} sname={sname} />
    })

    //SuggestedName.length > 0 ? SuggestedName[0] : null
    return (
        <div className="result-container">
            {SuggestedNamejsx}
        </div>
    )
}

export default ResultsContainer