import { useState } from 'react'
import React from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item !!')

    // State components
    const handleClick = () => {
        setRating((prev) => {
            console.log(prev)
            return prev + 5
        })
        setText('Text updated')
    }
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="tetxt-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem