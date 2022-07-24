import React, {useContext} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import './FeedbackList.css'
import FeedbackItem from '../FeedbackItem/FeedbackItem'
import PropTypes from 'prop-types'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackList = () => {

    const {feedback, setFeedback} = useContext(FeedbackContext)

    const feedbackElements = feedback.map((item, index) => (
        <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <FeedbackItem
            id={item.id} 
            text={item.text} 
            rating={item.rating} />
        </motion.div>
        )
    )

    if(!feedback || feedback.length === 0){
        return <h3>No Feedback Available</h3>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedbackElements}
            </AnimatePresence>
        </div>
    )

//   return (
//     <>
//         <div className='feedback-list'>
//             {feedbackElements}
//         </div>
//     </>
//   )
}

export default FeedbackList