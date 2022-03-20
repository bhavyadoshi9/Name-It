import React from "react";
import './Header.css'


//using props
const Header = ({ HeadTitle, HeaderExpanded }) => {
    return (
        <div className="head-container">

            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${HeaderExpanded ? "head-image-expanded" : "head-image-contracted"}`}
                alt="HeaderImage" />
            <h1 className={`head-text ${HeaderExpanded ? "head-text-expanded" : "head-text-contracted"}`}>{HeadTitle}</h1>

        </div>
    )
}

export default Header