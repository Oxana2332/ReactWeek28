import React from 'react'
import WordItem from '../WordItem/WordItem.jsx'
import AddNew from '../AddNew/AddNew.jsx'
import data from '../../data/data.json'
import './dictionary.css'
import '../../style/variables.css'


function Dictionary() {
    return (
        <div className='dictionary'>
            <div className='dictionary_count'>
            <div className='dictionary_title' type="text" value='english'>english</div>
            <div className='dictionary_title' type="text" value='transcription'>transcription</div>
            <div className='dictionary_title' type="text" value='russian'>russian</div>
            <div className='dictionary_title' type="text" value='topic'>topic</div>
            </div>
            <AddNew/>
            {
                data.map((word) =>
                    <WordItem key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} id={word.id}/>
                )
            }
        </div>
    )
}

export default Dictionary