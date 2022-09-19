import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Feedback = ({item, handleDelete }) => {


    return(
        <div className="card" >
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)} ><FaTimes color='purple' /></button>
                <div className="text-display">
                    {item.text}
                </div>
        </div>
    )
}


export default Feedback