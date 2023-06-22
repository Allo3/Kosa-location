import { Link } from 'react-router-dom'
import "../../styles/Header.sass"
import logo from "../../assets/test.png" 
function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <nav>
                <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/location">À propos</Link>
                <Link to="/404">testError404</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header