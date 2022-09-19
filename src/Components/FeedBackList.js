import React from 'react'
import FeedbackItems from '../Components/FeedbackItem'


const FeedBackList = ({feedback, handleDelete }) => {

    if (!feedback || feedback.length === 0){
        return(
            <p>No feedback yet</p>
        )
    }

    return(
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItems key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>       
    )
}


export default FeedBackList