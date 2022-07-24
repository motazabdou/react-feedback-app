import React, { useState, createContext } from "react";
import feedbackData from "../data/FeedbackData";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

// need to create a provider. For every component to have access to state and context, elements must be wrapped in a provider
//Therefore need to create a provider

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(feedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')){
          setFeedback(feedback.filter((item) => item.id !== id));
          // basically the deleteFeedback function sets the feedback state to filter the initial feedback array
          // to return a new array that has all elements with an id that is not equal to the id passed into the 
          // deleteFeedback function.. The window.confirm method ensures a pop up message appears, and if it is
          // confirmed (ie. clicked yes, then setFeedback is triggered)
        }
      }

    const updateFeedbackItem = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
    }
    
    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
        //state is immutable, so we create a copy of the feedback array using setFeedback, 
        // and attaching the newFeedback item to the start of it
      }

    //Set feedbackEdit item to be the item clicked 
    const editFeedback = (id, text, rating) => {
        setFeedbackEdit({
            item: {
                id: id,
                text: text,
                rating: rating
            },
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback, //function
        feedbackEdit: feedbackEdit, //state that will be passed into form,
        updateFeedbackItem: updateFeedbackItem
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;