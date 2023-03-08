import { useState } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoList from "./components/VideoList/VideoList";
import Content from "./components/Content/Content";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from './components/CommentList/CommentList';
import videoDetailsJsonData from "./data/video-details.json";
import videosJsonData from "./data/videos.json";


function App() {

  const [videos] = useState(videosJsonData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsJsonData[0]);

  const handleVideoClick = (id) => {
    const foundVideo = videoDetailsJsonData.find((video) => video.id === id)
    setSelectedVideo(foundVideo);
  }

  return (
    <div className="app">
      <Header />
      <Hero selectedVideo={selectedVideo} />
      <div className="app__main-wrapper">
        <div className="app__video-content">
          <Content selectedVideo={selectedVideo} />
          <CommentForm comments={selectedVideo.comments}/> 
          <CommentList comments={selectedVideo.comments} />
        </div>
        
        <VideoList videos={videos} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
      </div>
    </div>
  );
}

export default App;
