import React, { useState } from 'react'
import { useEffect } from 'react';
import './wordItem.css'

function WordItem({ item, editWordItem }) {
    const { english, transcription, russian, tags, id } = item;
    const [openInput, setOpenInput] = useState(false);
    const [valueEnglish, setValueEnglish] = useState('');
    const [valueTranscription, setValueTranscription] = useState('');
    const [valueRussian, setValueRussian] = useState('');
    const [valueTags, setValueTags] = useState('');

    useEffect(()=>{
        setValueEnglish(english)
        setValueTranscription(transcription)
        setValueRussian(russian)
        setValueTags(tags)
    }, [item])

    function handlerEnglish(e){
        setValueEnglish(e.targer.value)
    }
    function handlerTranscription(e){
        setValueTranscription(e.targer.value)
    }
    function handlerRussian(e){
        setValueRussian(e.targer.value)
    }
    function handlerTags(e){
        setValueTags(e.targer.value)
    }

    function saveWordItem(){
        editWordItem(valueEnglish,valueTranscription,valueRussian,valueTags,id)
    }

    return (
        <div>
            {openInput ? (<div className='wordItem'>
                <input className='word_input' type="text" value={valueEnglish} onChange={handlerEnglish} />
                <input className='word_input' type="text" value={valueTranscription} onChange={handlerTranscription} />
                <input className='word_input' type="text" value={valueRussian} onChange={handlerRussian} />
                <input className='word_input' type="text" value={valueTags} onChange={handlerTags} />
                <button className='button save' onClick={saveWordItem}></button>
                <button className='button cancel'></button>
            </div>) : (
                <div className='wordItem'>
                    <div className='word'>{valueEnglish}</div>
                    <div className='word'>{valueTranscription}</div>
                    <div className='word'>{valueRussian}</div>
                    <div className='word'>{valueTags}</div>
                    <button className='button edit' onClick={()=>(setOpenInput(!openInput))}></button>
                    <button className='button del'></button>
                </div>)}
        </div>
    )
}

export default WordItem



// import React, { useState } from 'react'
// import './wordItem.css'

// function WordItem(props) {

//     const [edit, setEdit] = useState(false);
//     const openEdit = () => {
//         setEdit(!edit);
//     }

//     return (
// <div>
// {edit ? ( <div className='wordItem'>
//                 <input className='word_input' type="text" />
//                 <input className='word_input' type="text" />
//                 <input className='word_input' type="text" />
//                 <input className='word_input' type="text" />
//                 <button className='button save'></button>
//                 <button className='button cancel' onClick={openEdit}></button>
//                 </div>) : (
//                     <div className='wordItem'>
//                     <div className='word' type="text">{props.english}</div>
//                     <div className='word' type="text">{props.transcription}</div>
//                     <div className='word' type="text">{props.russian}</div>
//                     <div className='word' type="text">{props.tags}</div>
//                     <button className='button edit' onClick={openEdit}></button>
//                     <button className='button del'></button>
//                     </div>)}
// </div>
//     )
// }

// export default WordItem