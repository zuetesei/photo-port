import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const { name, description, category, index } = currentPhoto;

    return (
        // JSX
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'> {name} </h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)}
                    alt='current cateory' />
                <p> {description} </p>
                <button onClick={onClose} type='button'> Close this modal </button>
            </div>
        </div>
    )
}

export default Modal;