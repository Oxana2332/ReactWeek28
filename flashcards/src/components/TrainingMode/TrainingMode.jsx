import React from 'react'
import Card from '../Card/Card.jsx'
import data from '../../data/data.json'

function TrainingMode() {
return (
    <div>
    {
        data.map((word) =>
        <Card key={word.id} english ={word.english} transcription ={word.transcription} russian ={word.russian} tags ={word.tags} />
        )
    }
    </div>
)
}

export default TrainingMode