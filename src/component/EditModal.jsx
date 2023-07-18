import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ setEmodal, cData, data, setData, title, setTitle, setImage, image, setPrice, price, upDateProduct }) => {


    // const handleInput1 = (e) => {
    //     const newData = data.map((itm) => (
    //         itm.id === cData.id ? { ...itm, title: e.target.value } : itm


    //     ))
    //     setData(newData)
    // }
    // const handleInput2 = (e) => {
    //     const newData = data.map((itm) => (
    //         itm.id === cData.id ? { ...itm, price: e.target.value } : itm


    //     ))
    //     setData(newData)
    // }
    // const handleInput3 = (e) => {
    //     const newData = data.map((itm) => (
    //         itm.id === cData.id ? { ...itm, image: e.target.value } : itm


    //     ))
    //     setData(newData)
    // }

    const handleryes = (e) => {

        setEmodal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        upDateProduct()
    }
    return (
        <>
            <div className="modal-container">
                <form
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className='text-field'>
                        <input type='text' value={title} className='title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} /><br />
                        <input type='text' value={image} className='image-edit' placeholder='Image Url' onChange={(e) => setImage(e.target.value)} /><br />
                        <input type='text' value={price} className='price' placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
                        <div className='btn-grp'>
                            <button className='cancel1' onClick={() => setEmodal(false)}>cancel</button>
                            <button className='yes1' onClick={handleryes}>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default EditModal  