import "./Comments.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg";


function Comments() {
    return (
        <section className="comments">
            <h2 className="comments__heading">Join the Conversation</h2>

            <div className="comments__wrapper">
                <div clasNames="comment-form">
                    <div className="comment-avatar">
                        <img className="comment-avatar__photo" src={avatar} alt="Avatar"/>
                    </div>

                <form className="comment-form__form"> 
                    <div className="comment-form__input-wraper">
                        <label for="name" className="comment-form__input-label">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className="comment-form__input" name="author"/> 
                    </div>
            
                    <div className="comment-form__input-wraper">
                        <label for="comment" className="comment-form__input-label">Comment</label>
                        <textarea id="comment" className="comment-form__input comment-form__input--textarea" placeholder="Add a new comment" name="comment"></textarea>
                        
                    </div>

                    <div className="comment-form__button-wrapper">
                        <button type="submit" className="button">Comment</button>
                    </div>
                </form>
            </div>

            <div className="comments__list"></div>
        </div>
    </section>

    )
}

export default Comments;