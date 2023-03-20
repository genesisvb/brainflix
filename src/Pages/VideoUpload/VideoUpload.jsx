import { Link } from "react-router-dom";
import "./VideoUpload.scss";
import videoImage from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

function VideoUpload() {
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    alert("Your video has been uploaded successfully!");
    navigate("/");
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

// /* ---------------------------
//  * Post Jokes
//  * To make a new joke we POST to https://developerjokes.herokuapp.com/jokes?api_key=neocat
//  * How to make a post request? https://axios-http.com/docs/post_example
//  */

// jokeForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const jokeInfo = {
//     question: e.target.question.value,
//     answer: e.target.answer.value,
//   };

//   axios
//     .post(`${apiUrl}/jokes?api_key=${apiKey}`, jokeInfo)
//     .then((response) => {
//       console.log("response: ", response);

//       const data = response.data;
//       const updatedJokes = data.jokes;

//       jokesList.innerHTML = "";
//       updatedJokes.forEach((joke) => {
//         renderJoke(joke.question, joke.answer, jokesList);
//       });

//       // after submission, we clear the form for better use experience!
//       e.target.question.value = "";
//       e.target.answer.value = "";
//     })
//     .catch((error) => {
//       console.log("error: ", error);
//     });
// });
