import { Link } from "react-router-dom";
import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <>
      <main className="video-upload">
        <h2 className="video-upload__title">Upload Video</h2>
        <p className="video-upload__subtitle">Video Thumbnail</p>
        <div className="video__container">
          <video src=""></video>
        </div>
        <form className="input">
          <label className="input__label" htmlFor="videoTitle">
            Title your video
          </label>
          <textarea className="input__field" name="videoTitle" id="">
            Add a title to your video
          </textarea>
          <label className="input__label" htmlFor="videoDescription">
            Add a video description
          </label>
          <textarea className="input__field" name="VideoDescription" id="">
            Add a description to your video
          </textarea>
        </form>
        <div className="buttons">
          <Link className="button button--publish">Publish</Link>
          <Link className="link">Cancel</Link>
        </div>
      </main>
    </>
  );
}

export default VideoUpload;
