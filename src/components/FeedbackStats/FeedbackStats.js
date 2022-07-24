import React, { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackStats = () => {

  const {feedback} = useContext(FeedbackContext)

    //calculating average
    //loop through feedback array using reduce, which takes accumulator and current values
    let average = feedback.reduce((accum, curr) => {
        return (accum + curr.rating);
    }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} reviews</h4>
        <h4>Average Rating: {average ? average.toFixed(1) : "0"}</h4>
    </div>
  )
}

export default FeedbackStats