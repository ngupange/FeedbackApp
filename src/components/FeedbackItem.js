import { useState } from 'react'
import React from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item !!')
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="tetxt-display">{text}</div>
        </div>
    )
}

export default FeedbackItem