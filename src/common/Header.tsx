import './Header.css';
import profile from '../images/profile.jpg';

function Header() {
    return (
        <div className="flex-container impruv-header-container">
            <h3 className='impruv-header-brand'>Impruv</h3>
            <ul className="flex-container impruv-header-links">
                <li className="active">Daily Tip</li>
                <li className="">Browse Tips</li>
                <li className="">Pinned Tips</li>
                <li className="">Research</li>
                <li className="impruv-header-profile"><img src={profile}></img></li>
            </ul>
        </div>
    )
}

export default Header