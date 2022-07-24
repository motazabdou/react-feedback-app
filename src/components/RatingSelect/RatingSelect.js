import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../../context/FeedbackContext';

const RatingSelect = ({select}) => {

    const [selected, setSelected] = useState(10);
    const ratings = [1,2,3,4,5,6,7,8,9,10];
    const {feedbackEdit} = useContext(FeedbackContext);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        //currentTarget allows us to access the number being selected
        //The + sign converts the value from a string to a number
        select(e.currentTarget.value)
    }

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const ratingInputs = ratings.map((rating) => {
        return (
            <li>
                <input
                key={rating}
                type='radio'
                id={`num${rating}`}
                name='rating'
                value={rating}
                onChange={handleChange}
                checked={selected === rating}
                />
                <label htmlFor={`num${rating}`}>{rating}</label>
            </li>
        )
    })

  return (
    <div>
        <ul className='rating'>
            {ratingInputs}
        </ul>
    </div>
  )
}

export default RatingSelect