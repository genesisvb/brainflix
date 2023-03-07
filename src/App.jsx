import { useState } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import videoDetailsJsonData from "./data/video-details.json";

function App() {

  const [videos, setVideos] = useState(videoDetailsJsonData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsJsonData[0]);

  const handleVideoClick = (id) => {
    const foundVideo = videos.find((video) => video.id === id)
    setSelectedVideo(foundVideo)
  }

  return (
    <div className="App__container">
      <div className="App">
        {/* <Header /> */}
        <Hero selectedVideo={selectedVideo} />
        {/* <Content /> */}
        {/* <Comments />  */}
        <VideoList videos={videos} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
      </div>
    </div>  
  );
}

export default App;
