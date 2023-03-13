import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import Hero from "../../Hero/Hero";
import VideoList from "../../VideoList/VideoList";
import Content from "../../Content/Content";
import CommentForm from "../../CommentForm/CommentForm";
import CommentList from "../../CommentList/CommentList";
import axios from "axios";

function HomePage() {
  const api = "https://project-2-api.herokuapp.com";
  const apiKey = "30f5f197-02c2-4997-aa84-d5f08fcfbf6c";
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    } else if (videos.length) {
      getVideo(videos[0].id);
    }
  }, [videoId, videos]);

  function getVideos() {
    axios
      .get(`${api}/videos/?api_key=${apiKey}`)
      .then((response) => {
        setVideos(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  function getVideo(videoId) {
    axios
      .get(`${api}/videos/${videoId}?api_key=${apiKey}`)
      .then((response) => {
        setSelectedVideo(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return videos && selectedVideo ? (
    <>
      <Hero selectedVideo={selectedVideo} />

      <div className="home-page__main-wrapper">
        <div className="home-page__video-content">
          <Content selectedVideo={selectedVideo} />
          <CommentForm comments={selectedVideo.comments} />
          <CommentList comments={selectedVideo.comments} />
        </div>
        <VideoList videos={videos} selectedVideo={selectedVideo} />
      </div>
    </>
  ) : null;
}

export default HomePage;
