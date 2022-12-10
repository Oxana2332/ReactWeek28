import React, {useState} from 'react'
import './card.css'
import '../../style/variables.css'

function Card(props) {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
    setPressed(!pressed);
};

    return (
    <div className='card'>
        <h1 className='card_title'>{props.english}</h1>
        <p className='card_text'>{props.transcription}</p>
        <h2 onClick={handleChange} className={pressed ? 'card_text__ru' : 'card_button'}>{pressed ? props.russian :"Показать перевод"}</h2>
    </div>
    )
}

export default Card