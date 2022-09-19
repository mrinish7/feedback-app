import React, {useState}  from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import FeedBackForm from './Components/FeedBackForm';
import FeedBackList from './Components/FeedBackList';
import FeedBackStats from './Components/FeedBackStats';
import Header from './Components/Header';
import FeedbackData from './Data/FeedBackData';

const App = () => {

 const [feedback, setFeedback] = useState(FeedbackData)

 const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete ?'))
    setFeedback(feedback.filter((item) => item.id !== id ))
 }

 const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
 }

  return (
    <div>
      <Header />
      <div className='container' >
        <FeedBackForm handleAdd={addFeedback} />
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  )
}


export default App;