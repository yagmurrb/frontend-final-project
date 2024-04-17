import React, { useContext } from 'react';
import './header.css';
import { DataContext } from "../../context/DataContext";



function Header() {
    const { content, theme } = useContext(DataContext);
    const navigationLinks = content?.headerData?.navigationLinks || [];

    return (
        <nav className={`header-container ${theme === 'dark' ? 'header-container-dark' : ''}`}>
            <div className={`custom-container ${theme === 'dark' ? 'custom-container-dark' : ''}`}>
                <a>{content?.headerData?.logoText}</a>
            </div>
            <div className={`navigation-bar ${theme === 'dark' ? 'navigation-bar-dark' : ''}`}>
                {navigationLinks.map((link, index) => (
                    <a key={index} href={`#${link.toLowerCase()}`}>{link}</a>
                ))}
            </div>
        </nav>
    );
}

export default Header;


