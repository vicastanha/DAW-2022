import './style.css';
import imgLogo from '../../assets/img/Filter.svg';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="menu-logo">
                    <img src={imgLogo} alt="Logo"/>
                        <h6>Filter</h6>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Start Now</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

