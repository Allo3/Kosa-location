import logo from "../../assets/homepage.png";
import "../../styles/index.sass"

function homepageLogo() {
    return (
        <div className="logo-homepage">
            <article className="homepage">
                <img src={logo} alt="asdf"/>
                <h1 className="homepage-text">Chez vous, partout et ailleurs</h1>
            </article>
        </div>
    )
}
export default homepageLogo