
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-image">
                <img 
                    src="../../public/assets/banner.jpg" 
                    alt="Header Background" 
                    className="header-img"
                />
            </div>
            <nav className="header-nav">
                <div>
                    <button className="nav-button">All Stays</button>
                    <button className="nav-button">Norway</button>
                    <button className="nav-button">Finland</button>
                    <button className="nav-button">Sweden</button>
                    <button className="nav-button">Switzerland</button>
                </div>
                <div>
                    <input type="checkbox" id="superhost" name="superhost" value="superhost" />
                    <label htmlFor="superhost">Superhost</label>
                </div>
            </nav>
        </header>
    );
};

export default Header;