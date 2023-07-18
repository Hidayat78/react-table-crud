import React, { useState } from "react";
import './Navbar.css';
import axios from "axios";
const Navbar = ({ value, setValue, setData, data }) => {
    const handleSearch = () => {
        if (value.length > 0) {
            const Serachdata = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
            setData(Serachdata);

        }
    }
    const handlePress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div>
            <nav>
                <ul>
                    <li><h2>Hidayat</h2></li>

                    <li><input type="search"
                        className="icon"
                        placeholder="Search.."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyUp={handlePress} />
                    </li>
                </ul>
            </nav>

        </div>
    )
}
export default Navbar;