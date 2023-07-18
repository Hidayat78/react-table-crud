import React from "react";
import './ImgPopUp.css';
const ImgPopUp = ({ file, setFile }) => {
    return (
        <div className="container" style={{ display: file ? 'block' : 'none' }}>
            <div className="popup">
                <span onClick={() => setFile(null)}>&times;</span>
                <img src={file} alt="" />
            </div>
        </div>
    )
}
export default ImgPopUp;