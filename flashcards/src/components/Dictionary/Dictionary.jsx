import React, {useState} from 'react'
import { useEffect } from 'react'
import WordItem from '../WordItem/WordItem.jsx'
import AddNew from '../AddNew/AddNew.jsx'
import data from '../../data/data.json'
import './dictionary.css'
import '../../style/variables.css'


function Dictionary() {

const [words, setWords] = useState([]);

useEffect(() => {
    setWords(data)
}, [])

function editWordItem(english, transcription, russian, tags, id){
const copyWords = {...data}
console.log(data);
const resultEditWords = copyWords.map(item=>{
    if (item.id == id){
        item.english = english
        item.transcription = transcription
        item.russian = russian
        item.tags = tags
        console.log(item);
        return item
    }
    return item
})
console.log(resultEditWords);
}

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
                data.map((item)=>(
                    <WordItem key={item.id} item={{...item}} editWordItem={editWordItem} />
                )
                )
            }
        </div>
    )
}

export default Dictionary



// import React from 'react'
// import WordItem from '../WordItem/WordItem.jsx'
// import AddNew from '../AddNew/AddNew.jsx'
// import data from '../../data/data.json'
// import './dictionary.css'
// import '../../style/variables.css'


// function Dictionary() {
//     return (
//         <div className='dictionary'>
//             <div className='dictionary_count'>
//             <div className='dictionary_title' type="text" value='english'>english</div>
//             <div className='dictionary_title' type="text" value='transcription'>transcription</div>
//             <div className='dictionary_title' type="text" value='russian'>russian</div>
//             <div className='dictionary_title' type="text" value='topic'>topic</div>
//             </div>
//             <AddNew/>
//             {
//                 data.map((word) =>
//                     <WordItem key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} id={word.id}/>
//                 )
//             }
//         </div>
//     )
// }

// export default Dictionary