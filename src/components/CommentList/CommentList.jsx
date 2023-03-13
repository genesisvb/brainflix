import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
