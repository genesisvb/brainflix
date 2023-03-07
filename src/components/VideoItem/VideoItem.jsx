import "./VideoItem.scss"

function VideoItem ({video, handleVideoClick}) {
    return (
        <section className="video" onClick={() => {handleVideoClick(video.id)}} >
            <div className="video__content">
                <img className="video__image" src={video.image} alt={video.title} />
            </div>
            <h4 className="video__title">{video.description}</h4>
        </section>
    );
}

export default VideoItem;