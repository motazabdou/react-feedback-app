import React, { useState, useContext } from 'react'
import './FeedbackItem.css'
import Card from '../../shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../../context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({id, text, rating}) => {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    const handleClick = (id) => {
        console.log(id);
    }

  return (
    <>
        <Card>
            <div className='num-display'>{rating}</div>
            {/* if you want to allow a function to handle item of a specific id by passing in id as an argument */}
            <button className='close' onClick={() => deleteFeedback(id)}>
                <FaTimes  color='purple' />
            </button>
            <button className='edit' onClick={() => editFeedback(id, text, rating)}>
                <FaEdit color='purple' />
            </button>
            <div className='text-display'>
                {text}
            </div>
        </Card>
    </>
  )
}

FeedbackItem.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default FeedbackItem