import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetails = () => {
    const [dataUser, setDataUser] = useState([]);  
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://northwind.vercel.app/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setDataUser(data));
    }, [])
    // console.log(dataUser);
  return <div>
    <h1>{dataUser.name}</h1>
    <p>ID: {dataUser.id}</p>
    <p>Unit Price: {dataUser.unitPrice}</p>
    <p>Quantify Per Unit: {dataUser.quantityPerUnit}</p>
    <p>Units in Stock: {dataUser.unitsInStock}</p>
    <p>Units on Order: {dataUser.unitsOnOrder}</p>
    <button onClick={() => navigate(-1)}>Go back</button>
    <button>Add to Card</button>
  </div>;
};

export default ProductsDetails;
