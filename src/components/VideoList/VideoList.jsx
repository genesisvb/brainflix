import VideoItem from "../VideoItem/VideoItem"
import "./VideoList.scss";


function VideoList({videos, selectedVideo, handleVideoClick}) {

    return (
        <section className="video-list">
            
            {videos
                .filter((video) => video.id !== selectedVideo.id)
                .map((video) =>(
                    <VideoItem key={video.id} video={video} handleVideoClick={handleVideoClick} />
                ))
            }
        </section>
    );
}

export default VideoList;