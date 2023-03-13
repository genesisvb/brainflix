import "./CommentForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function CommentForm({ comments }) {
  if (!comments) return;

  return (
    <section className="comments">
      <p className="comments__count">{comments.length} Comments </p>

      <div className="comment-form">
        <div className="comment-avatar">
          <img className="comment-avatar__photo" src={avatar} alt="Avatar" />
        </div>
        <form className="comment-form__form">
          <div className="comment-form__input-wraper">
            <label htmlFor="comment" className="comment-form__input-label">
              Join the conversation
            </label>
            <textarea
              id="comment"
              className="comment-form__input comment-form__input--textarea"
              placeholder="Add a new comment"
              name="comment"
            ></textarea>
          </div>
          <div className="button__wrapper">
            <button type="submit" className="button button--comments">
              Comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
