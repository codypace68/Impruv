import './Header.css';
import profile from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// import hamburger from font awesome
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const defaultMenuClass = "flex-container impruv-header-links";

    const displayMobileMenu = (e: React.MouseEvent) => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <div className="flex-container impruv-header-container">
            <h3 className='impruv-header-brand'>Impruv</h3>
            <ul className={ showMobileMenu ? defaultMenuClass + ' impruv-display-mobile-menu' : defaultMenuClass}>
                <li className="active">Daily Tip</li>
                <li className="">Browse Tips</li>
                <li className="">Pinned Tips</li>
                <li className="">Research</li>
                <li className="impruv-header-profile"><img src={profile}></img></li>
            </ul>
            <div className='impruv-header-hamburger-menu' onClick={displayMobileMenu}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></div>
        </div>
    )
}

export default Header