import React from "react";
import "./DeleteModal.css";
const DeleteModal = ({ setData, setDmodal, id, data }) => {
    const handleryes = () => {

        const fiterData = data.filter((item) => {

            return item.id != id;
        });

        setData(fiterData)

        setDmodal(false);
    }
    return (
        <div className="main-div">
            <div className="second-div">
                <h3 style={{ color: "#111" }}>Are U sure You want to Delete</h3>
                <div className="third-div">
                    <button onClick={handleryes} style={{ background: "red", color: "white", padding: "10px", marginLeft: "6px", cursor: "pointer", }}> Yes </button>
                    <button onClick={() => setDmodal(false)} style={{ background: "green", color: "white", padding: "10px", marginRight: "6px", cursor: "pointer", }} >NO</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
