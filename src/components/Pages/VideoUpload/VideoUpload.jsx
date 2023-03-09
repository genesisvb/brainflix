import "./VideoUpload.scss";
import Header from "../../Header/Header";

function VideoUpload() {
  return (
    <>
      <Header />
      <main>
        <h1>Upload Video</h1>
        <p>Video Thumbnail</p>
        <div>
          <video src=""></video>
        </div>
        <div>
          <label htmlFor="">Title your video</label>
          <textarea name="videoTitle" id="">
            Add a title to your video
          </textarea>
          <label htmlFor="">Add a video description</label>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <button>Cancel</button>
          <button>Publish</button>
        </div>
      </main>
    </>
  );
}

export default VideoUpload;
