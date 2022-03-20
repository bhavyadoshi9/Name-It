import { render } from "@testing-library/react";
import React from "react";
import './SearchBox.css'

const SearchBox = ({ OnInputChange }) => {

    return (
        <div className="search-container">
            <input onChange={(OnEvent) => OnInputChange(OnEvent.target.value)} placeholder="enter keywords" className="search-input" />
        </div>
    )

}

export default SearchBox