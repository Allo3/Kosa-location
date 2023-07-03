import * as React from 'react';
import "../styles/DropDown.sass"

const DropDown = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };


    return (<div className="dropdown">
        <button className="title-box" onClick={handleOpen}>Équipement {open ? 'asdfhjkl' : '↑'}</button>
        {open ? (<ul className="menu">
            <li className="menu-item"> Climatisation</li>
            <li className="menu-item"> Wi-Fi</li>
            <li className="menu-item"> Cuisine</li>
            <li className="menu-item"> Espace de Travail</li>
            <li className="menu-item"> Fer à repasser</li>
            <li className="menu-item"> Sèche-cheveux</li>
            <li className="menu-item"> Cintres</li>
        </ul>) : null}
    </div>);
};

export default DropDown;