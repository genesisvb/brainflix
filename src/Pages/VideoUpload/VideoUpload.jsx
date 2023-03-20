import { Link } from "react-router-dom";
import "./VideoUpload.scss";
import videoImage from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VideoUpload() {
  const navigate = useNavigate();
  const api = "http://localhost:5000";

  function handleOnSubmit(e) {
    e.preventDefault();
    const videoData = {
      title: e.target.title.value,
      description: e.target.description.value,
      image: "http://localhost:5000/images/Upload-video-preview.jpg",
    };

    axios
      .post(`${api}/videos`, videoData)
      .then((response) => {
        alert("Your video has been uploaded successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <main className="video-upload">
        <h2 className="video-upload__title">Upload Video</h2>
        <p className="video-upload__subtitle">Video Thumbnail</p>
        <div className="video-container">
          <img
            className="video-container__img"
            src={videoImage}
            alt="video cover  "
          />
          <div className="input-wrapper">
            <form className="input" onSubmit={handleOnSubmit}>
              <label className="input__label" htmlFor="videoTitle">
                Title your video
              </label>
              <input
                type="text"
                className="input__field"
                name="title"
                placeholder="Add a title to your video"
              />
              <label className="input__label" htmlFor="videoDescription">
                Add a video description
              </label>
              <textarea
                className="input__field input__field--large"
                name="description"
                placeholder="Add a description to your video"
              ></textarea>
              <div className="buttons">
                <button type="submit" className="button button--publish">
                  Publish
                </button>
                <Link to="/" className="link">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default VideoUpload;
