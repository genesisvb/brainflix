import { useState } from "react";
import "./HomePage.scss";
import Hero from "../../Hero/Hero";
import VideoList from "../../VideoList/VideoList";
import Content from "../../Content/Content";
import CommentForm from "../../CommentForm/CommentForm";
import CommentList from "../../CommentList/CommentList";
import videoDetailsJsonData from "../../../data/video-details.json";
import videosJsonData from "../../../data/videos.json";

function HomePage() {
  const [videos] = useState(videosJsonData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsJsonData[0]);

  const handleVideoClick = (id) => {
    const foundVideo = videoDetailsJsonData.find((video) => video.id === id);
    setSelectedVideo(foundVideo);
  };

  return (
    <>
      <Hero selectedVideo={selectedVideo} />
      <div className="home-page__main-wrapper">
        <div className="home-page__video-content">
          <Content selectedVideo={selectedVideo} />
          <CommentForm comments={selectedVideo.comments} />
          <CommentList comments={selectedVideo.comments} />
        </div>

        <VideoList
          videos={videos}
          selectedVideo={selectedVideo}
          handleVideoClick={handleVideoClick}
        />
      </div>
    </>
  );
}

export default HomePage;
