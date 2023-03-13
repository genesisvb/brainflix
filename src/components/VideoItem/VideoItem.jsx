import "./VideoItem.scss";
import { Link } from "react-router-dom";

function VideoItem({ video }) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="video">
      <Link to={`/${video.id}`} className="video" onClick={() => scrollToTop()}>
        <div className="video__image-wrapper">
          <img className="video__image" src={video.image} alt={video.title} />
        </div>
        <div className="video__text">
          <h4 className="video__title">{video.title}</h4>
          <p className="video__channel">{video.channel}</p>
        </div>
      </Link>
    </div>
  );
}

export default VideoItem;
