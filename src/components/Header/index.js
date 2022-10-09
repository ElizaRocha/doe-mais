import {Link} from "react-router-dom"
import "./header.css"

function Header(){
    return(
        <div className="container">
            <img src={require( '../../images/gota.png')} className="gota"/>
        </div>
    )
}
export default Header