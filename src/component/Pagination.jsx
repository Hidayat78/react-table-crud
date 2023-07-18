import React, { useState } from "react";
import './Pagination.css';
const Pagination = (props) => {

    const prePage = () => {
        if (props.currentPage !== 1) {
            props.setCurrentPage(props.currentPage - 1)
        }
    }
    const changeCPage = (id) => {
        props.setCurrentPage(id)
    }
    const nextPage = () => {
        if (props.currentPage !== props.npage) {
            props.setCurrentPage(props.currentPage + 1)
        }
    }


    return (
        <div className="pagii">
            <section>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link"
                            onClick={prePage}>Prev</a>
                    </li>
                    {
                        props.numbers.map((n, i) => (
                            <li className={`page-item ${props.currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className="page-link"
                                    onClick={() => changeCPage(n)} >{n}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" className="page-link"
                            onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}
export default Pagination;