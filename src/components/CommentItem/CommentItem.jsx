import "./CommentItem.scss"
import moment from "moment";


function CommentItem({comment}) {
    const time = moment(comment.timestamp).fromNow();

    return (
        
        <section className="comment">
            <div className="comment-avatar">
                <div className="comment-avatar__photo"></div>
            </div>
            <div className="comment__info">
                <div className="comment__heading">
                    <h4 className="comment__author">{comment.name}</h4>
                    <time className="comment__date">{time}</time>
                </div>
                <p className="comment__text">{comment.comment}</p>
            </div>
        </section>    
    )
}

export default CommentItem;

