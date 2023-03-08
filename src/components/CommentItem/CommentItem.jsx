
function CommentItem({comment}) {
    return (
        <section className="comment">
            <div className="comment__wrapper"></div>
                <div className="comment-avatar">
                    <div className="comment-avatar__photo"></div>
            </div>
            <div className="comment__info">
                <div className="comment__heading">
                    <h4 className="comment__author">{comment.name}</h4>
                    <time className="comment__date">{comment.timestamp}</time>
                </div>
                <p className="comment__text">{comment.comment}</p>
            </div>
        </section>    
    )
}

export default CommentItem;

