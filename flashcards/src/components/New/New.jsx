import React from 'react'
import './new.css'

export default function New() {
return (
    <div className='wordItem'>
        <input className='word_input' type="text" />
        <input className='word_input' type="text" />
        <input className='word_input' type="text" />
        <input className='word_input' type="text" />
        <button className='button save'></button>
        <button className='button cancel'></button>
    </div>
)
}
