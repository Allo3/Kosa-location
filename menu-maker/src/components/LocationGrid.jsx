import {Link} from "react-router-dom"
import blank from "../assets/pink.jpg"
import "../styles/locationGrid.sass"



function locationGrid() {
    return (<div className="grid-container">
            <div className="location-grid">
                <img src={blank} alt="test"/>
                <img src={blank} alt="test"/>
                <img src={blank} alt="test"/>
                <img src={blank} alt="test"/>
                <img src={blank} alt="test"/>
                <img src={blank} alt="test"/>
            </div>
        </div>)
}

export default locationGrid