import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./TableData.css";
import Pagination from "./Pagination";
import ImgPopUp from "./ImgPopUp";
import Navbar from "./Navbar";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
const TableData = () => {
  const [order, setOrder] = useState("ASC"); //sorting
  const [value, setValue] = useState("");
  const [data, setData] = useState([]); // Data from API or delete from this api
  const [file, setFile] = useState(null); //imagepopUp
  const [dmodal, setDmodal] = useState(false);
  const [id, setId] = useState(null);
  const [emodal, setEmodal] = useState(false);
  const [cData, setCData] = useState([]);
  const [pid, setPid] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  //Data Collection
  // useEffect(() => {
  //     axios.get('https://fakestoreapi.com/products')
  //         .then((res) => { setData(res.data) })
  // }, [])
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const resqData = await fetch("https://fakestoreapi.com/products");
    const resData = await resqData.json();
    setData(resData);
    setTitle(resData.title);
    setImage(resData.image);
    setPrice(resData.price);
    setId(resData.id);
  };
  const closeModal = () => {
    setDmodal(false);
  };
  const handler2 = (id) => {
    setDmodal(true);
    setId(id);
  };

  //edit
  const selectProduct = (post) => {
    setEmodal(true);
    setCData(post);
    setTitle(post.title);
    setImage(post.image);
    setPrice(post.price);
    setPid(post.id);
  };
  const upDateProduct = () => {
    let item = { title, image, price };
    const responsee = fetch(`https://fakestoreapi.com/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((res) => {
        setData(res.data);
        getProduct();
      });
    });
    setEmodal(false);
  };

  //Sorting
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <div>
      <Navbar value={value} setValue={setValue} setData={setData} data={data} />
      <h1>Product Details</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Sr. No</th>
            <th>Image</th>
            <th
              style={{ width: "50%", cursor: "pointer" }}
              onClick={() => sorting("title")}
            >
              Name
            </th>
            <th style={{ width: "10%" }}>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((post, id) => {
            {
              /* const { id, title, image } = post; */
            }
            return (
              <tr key={id}>
                <td>{firstIndex + id + 1}</td>
                <td onClick={() => setFile(post.image)}>
                  <img
                    src={post.image}
                    height="100px"
                    width="100px"
                    style={{ borderRadius: "50%" }}
                  />
                </td>
                <td>{post.title}</td>
                <td>{post.price}</td>
                <td className="btn">
                  <button onClick={() => selectProduct(post)}>
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button onClick={() => handler2(post.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <Pagination
        data={data}
        numbers={numbers}
        currentPage={currentPage}
        firstIndex={firstIndex}
        setCurrentPage={setCurrentPage}
        npage={npage}
      />
      {/* //Image POPUP */}
      <ImgPopUp file={file} setFile={setFile} />

      {/* Modal for Delete */}
      {dmodal && (
        <DeleteModal
          onClose={closeModal}
          setData={setData}
          setDmodal={setDmodal}
          data={data}
          id={id}
        />
      )}
      {/* Edit Modal */}
      {emodal && (
        <EditModal
          emodal={emodal}
          setEmodal={setEmodal}
          data={data}
          setData={setData}
          title={title}
          setTitle={setTitle}
          setImage={setImage}
          setPrice={setPrice}
          image={image}
          price={price}
          upDateProduct={upDateProduct}
        />
      )}
    </div>
  );
};
export default TableData;
