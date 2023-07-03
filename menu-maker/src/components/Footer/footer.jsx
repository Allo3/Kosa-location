import logo from "../../assets/background.jpeg"
import {React} from "react"
import "./footer.sass"
function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer