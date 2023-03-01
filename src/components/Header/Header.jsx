import "./Header.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import inputIcon from "../../assets/Icons/search.svg";


function Header () {
return (
    <header className="header">
        <nav class="nav">
            <a href="../../index.html"><img className="nav__logo" src={logo}  alt="logo" /></a>
            <div className="nav__input">
                <input img src={inputIcon} className="nav__input-box" type="text" placeholder="Search" />
                <img src={avatar} className="nav__input-photo" alt="avatar" />
            </div>
            <div>
                <button className="button">Upload</button>
            </div>
        </nav>
    </header>
)       
};

export default Header;
