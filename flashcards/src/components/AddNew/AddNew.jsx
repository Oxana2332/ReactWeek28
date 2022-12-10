import React, {useState} from 'react'
import New from '../New/New.jsx';
import './addNew.css'

function AddNew() {

const [pressed, setPressed] = useState (false);
const handleChange = () => {
  setPressed(!pressed);
}

    return (
        <div className={pressed ? 'wordItem' : 'button new'} onClick={handleChange}>{pressed ? <New/> : ''}</div>
    )
}

export default AddNew