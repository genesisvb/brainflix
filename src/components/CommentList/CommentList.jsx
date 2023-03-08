import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss"

function CommentList({ comments }) {

    return (
        <div className="comment-list">
            <h4 className="comment-list__count">Comments {comments.length}</h4>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))
        }
        </div>
    );
}

export default CommentList;
