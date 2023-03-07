import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./Content.scss"


function Content () {
    return (
        <section className="content">
            <h1 className="content__title">BMX Rampage: 2021 Highlights</h1>
            <div className="content__info-container">
                <div className="content__subtitle-container">
                    <h4 className="content__author">By Red Crow</h4>
                    <time className="content__date">07/11/2021</time>
                </div>
                <div className="content__icons">
                    <p>1,001,023<img className="content__icon" src={viewsIcon} alt="views icon" /></p>
                    <p>110,985</p><img className="content__icon" src={likesIcon} alt="likes icon" />
                </div>
            </div>

            <div>
                <p className="content__text">
                On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
                </p>
            </div>
        </section>
    )
}

export default Content;