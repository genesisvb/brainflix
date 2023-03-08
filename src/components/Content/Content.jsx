import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import moment from "moment";
import "./Content.scss"


function Content ({selectedVideo}) {
    const time = moment(selectedVideo.timestamp).fromNow();
    
    return (
        <section className="content">
            <h1 className="content__title">{selectedVideo.title}</h1>
            <div className="content__info-container">
                <div className="content__subtitle-container">
                    <h4 className="content__author">By {selectedVideo.channel}</h4>
                    <time className="content__date">{time}</time>
                </div>
                <div className="content__counts">
                    <p className="content__count"><img className="content__icon" src={viewsIcon} alt="views icon" /> {selectedVideo.views}</p>
                    <p className="content__count"><img className="content__icon" src={likesIcon} alt="likes icon" /> {selectedVideo.likes}</p>
                </div>
            </div>

            <div>
                <p className="content__text">{selectedVideo.description}</p>
            </div>
        </section>
    );
}




export default Content;