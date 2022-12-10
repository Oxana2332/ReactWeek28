import React, { useState } from 'react'
import './rate.css';

export default function Rate(props) {

    const [selected, setSelected] = useState(false);
    const handleChange = () => {
        setSelected(!selected);
    }

    return (
        <div onClick={handleChange} className={selected ? "rate-card_selected" : "rate-card"}>
            <header className={`rate-header ${props.classHeader}`}>Безлимитный {props.price}</header>
            <section className={`rate-section ${props.classSection}`}>
                <span className='rate-section_top'>руб</span>
                <span className='rate-price'>{props.price}</span>
                <span className='rate-section_bottom'> /мес</span>
            </section>
            <p className='rate-speed'>до {props.speed} Мбит/сек</p>
            <footer className='rate-footer'>Объём включённого трафика не ограничен</footer>
        </div>
    )
}