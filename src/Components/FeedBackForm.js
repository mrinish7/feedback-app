import React, { useState } from "react";
import Ratting from "./Ratting";


const FeedBackForm = ({handleAdd}) => {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10) 
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {

        if(text === ''){
            setMessage(null)
        }else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters')
        }else{
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length >= 10){
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText('')
        }
    }

    return(
        <div className="card">
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service with us</h2>
                <Ratting select={(rating) => setRating(rating)} />
                <div className="input-group" >
                    <input onChange={handleTextChange} type='text' placeholder='write a review' value={text} />
                    <button type="submit" className="btn-secondary" >Send</button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </div>
    )
}


export default FeedBackForm