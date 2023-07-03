import logo from "../../../assets/background.jpeg";
import "./about.sass";
import {useState, React} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

function About() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    function toggleDropdown2() {
        setIsOpen2(!isOpen2);
    }

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
    };

    return (
        <div className="about">
            <div className="wallpaper">
                <img src={logo} alt="PAYSAGE"/>
            </div>
            <div className={`dropdown-about ${isOpen1 ? "open" : ""}`}>
                <button className="button-about" onClick={toggleDropdown1}>
                    Fiabilité
                    <FontAwesomeIcon icon={isOpen1 ? faAngleDown : faAngleUp} className="arrow-icon"/>
                </button>
                {isOpen1 && (
                    <p className="about-container">Les annonces postées sur Kasa garantissent une fiabilité totale. Les
                        photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par
                        nos équipes.</p>
                )}
            </div>
            <div className={`dropdown-about ${isOpen2 ? "open" : ""}`}>
                <button className="button-about" onClick={toggleDropdown2}>
                    Respect
                    <FontAwesomeIcon icon={isOpen2 ? faAngleDown : faAngleUp} className="arrow-icon"/>
                </button>
                {isOpen2 && (
                    <p className="about-container">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                        comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
                        plateforme.</p>
                )}
            </div>
            <div className={`dropdown-about ${isOpen3 ? "open" : ""}`}>
                <button className="button-about" onClick={toggleDropdown3}>
                    Service
                    <FontAwesomeIcon icon={isOpen3 ? faAngleDown : faAngleUp} className="arrow-icon"/>
                </button>
                {isOpen3 && (
                    <p className="about-container">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                        comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
                        plateforme.</p>
                )}
            </div>
            <div className={`dropdown-about ${isOpen4 ? "open" : ""}`}>
                <button className="button-about" onClick={toggleDropdown4}>
                    Sécurité
                    <FontAwesomeIcon icon={isOpen4 ? faAngleDown : faAngleUp} className="arrow-icon"/>
                </button>
                {isOpen4 && (
                    <p className="about-container">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                        pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos
                        services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de
                        vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la
                        sécurité domestique pour nos hôtes.</p>
                )}
            </div>
        </div>
    );
}

export default About;
