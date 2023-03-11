import { Link } from "react-router-dom";
import "./VideoUpload.scss";
import videoImage from "../../../assets/images/Upload-video-preview.jpg";

function VideoUpload() {
  return (
    <>
      <main className="video-upload">
        <h2 className="video-upload__title">Upload Video</h2>
        <p className="video-upload__subtitle">Video Thumbnail</p>
        <div className="video-container">
          <img className="video-container__img" src={videoImage} />
          <div className="input-wrapper">
            <form className="input">
              <label className="input__label" htmlFor="videoTitle">
                Title your video
              </label>
              <textarea
                className="input__field"
                name="videoTitle"
                id=""
                placeholder="Add a title to your video"
              ></textarea>
              <label className="input__label" htmlFor="videoDescription">
                Add a video description
              </label>
              <textarea
                className="input__field input__field--large"
                name="VideoDescription"
                id=""
                placeholder="Add a description to your video"
              ></textarea>
            </form>
          </div>
        </div>
        <div className="buttons">
          <Link className="button button--publish">Publish</Link>
          <Link to="/" className="link">
            Cancel
          </Link>
        </div>
      </main>
    </>
  );
}

export default VideoUpload;
