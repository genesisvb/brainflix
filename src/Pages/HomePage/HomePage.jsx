import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import VideoList from "../../components/VideoList/VideoList";
import Content from "../../components/Content/Content";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import axios from "axios";

function HomePage() {
  const api = "http://localhost:5000";
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
      .get(`${api}/videos`)
      .then((response) => {
        setVideos(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  function getVideo(videoId) {
    axios
      .get(`${api}/videos/${videoId}`)
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
