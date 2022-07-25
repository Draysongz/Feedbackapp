import React from 'react'
import { useState } from 'react'

export default function FeedbackItem() {
    const [rating, setRating]= useState(7)
    const [text, setText] = useState('This is an example comment')
  return (
    <div className='card'>
        <div className="num-display">
            {rating}
        </div>
        <div className='text-display'>
            <h2>{text}</h2>
        </div>


    </div>
  )
}
