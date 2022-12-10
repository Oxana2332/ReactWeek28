import React from 'react'
import './rate.css';

export default function Rate({price,speed,classHeader,classSection,isSelected,setCount,id}) {

    const classChange = isSelected ? "rate-card_selected" : "rate-card"

    function getValueId(){
        setCount(id)
    }

    return (
        <div className={classChange} onClick={getValueId} >
            <header className={`rate-header ${classHeader}`}>Безлимитный {price}</header>
            <section className={`rate-section ${classSection}`}>
                <span className='rate-section_top'>руб</span>
                <span className='rate-price'>{price}</span>
                <span className='rate-section_bottom'> /мес</span>
            </section>
            <p className='rate-speed'>до {speed} Мбит/сек</p>
            <footer className='rate-footer'>Объём включённого трафика не ограничен</footer>
        </div>
    )
}