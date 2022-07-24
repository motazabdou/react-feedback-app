import React, { useState, useContext, useEffect } from 'react'
import Card from '../../shared/Card'
import Button from '../../shared/Button';
import RatingSelect from '../RatingSelect/RatingSelect';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackForm = () => {

    const {addFeedback, feedbackEdit, updateFeedbackItem} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [validationMessage, setValidationMessage] = useState("");
    const [rating, setRating] = useState(10);

    const handleTextInput = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setValidationMessage(null);
        } else if (text !== '' && text.trim().length <= 10){
            setValidationMessage(`Please enter at least 10 characters`);
            setBtnDisabled(true);
        }
        else {
            setBtnDisabled(false);
            setValidationMessage(null);
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text: text,
                rating: Number(rating)
            }

            if(feedbackEdit.edit === true){
                updateFeedbackItem(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }
            setText("")
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextInput} value={text} type="text" placeholder='Write a review'/>
                <Button 
                children='Send'
                type='submit'
                isDisabled={btnDisabled}
                />
            </div>
            {validationMessage && <div className='message'>{validationMessage}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm