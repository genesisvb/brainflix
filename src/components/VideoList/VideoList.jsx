import VideoItem from "../VideoItem/VideoItem"
import "./VideoList.scss";



function VideoList({videos, selectedVideo, handleVideoClick}) {

    return (
        <section className="video-list">
            <h3 className="video-list__title">Next videos</h3>
            
            {videos
                .filter((video) => video.id !== selectedVideo.id)
                .map((video) =>(
                    <VideoItem key={video.id} video={video} handleVideoClick={handleVideoClick} timestamp={selectedVideo.timestamp} />
                ))
            }
            
        </section>
    );
}

export default VideoList;