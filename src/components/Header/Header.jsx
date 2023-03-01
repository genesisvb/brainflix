import "./Header.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import inputIcon from "../../assets/Icons/search.svg";


function Header () {
return (
    <header className="header">
        <nav class="nav">
            <a href="../../index.html"><img className="nav__logo" src={logo}  alt="logo" /></a>
            <form className="nav__input">
                <input img src={inputIcon} className="nav__input-box" type="text" placeholder="Search" />
                <img src={avatar} className="nav__input-photo" alt="avatar" />
                <button className="button">Upload</button>
            </form>
        </nav>
    </header>
)       
};

export default Header;
