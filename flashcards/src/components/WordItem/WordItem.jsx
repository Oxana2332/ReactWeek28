import React, {useState} from 'react'
import './wordItem.css'
import '../New/new.css'

function WordItem(props) {

    const [pressed, setPressed] = useState (false);
    const handleChange = () => {
    setPressed(!pressed);
    }

    const closeChange = () => {
    setPressed(!pressed);
    }

        return (
            <div className='wordItem'>
                <div className={pressed ? 'word_input' : 'word'} >{pressed ? '' : props.english}</div>
                <div className={pressed ? 'word_input' : 'word'}>{pressed ? '' : props.transcription}</div>
                <div className={pressed ? 'word_input' : 'word'}>{pressed ? '' : props.russian}</div>
                <div className={pressed ? 'word_input' : 'word'}>{pressed ? '' : props.tags}</div>
                <button className={pressed ? 'button save' : 'button edit'} onClick={handleChange}></button>
                <button className={pressed ? 'button cancel' : 'button del'} onClick={closeChange}></button>
            </div>
        )
}

export default WordItem