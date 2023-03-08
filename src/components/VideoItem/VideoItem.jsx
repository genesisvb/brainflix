import "./VideoItem.scss"

function VideoItem ({video, handleVideoClick}) {
    return (
        <section className="video" onClick={() => {handleVideoClick(video.id)}} >
            <div className="video__image-wrapper">
                <img className="video__image" src={video.image} alt={video.title} />
            </div>
            <div className="video__text">
                <h4 className="video__title">{video.title}</h4>
                <p className="video__channel">{video.channel}</p>
            </div>
        </section>
    );

}

export default VideoItem;