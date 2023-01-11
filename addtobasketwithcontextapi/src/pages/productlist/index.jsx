import React, { useContext, useEffect } from "react";
import { Table } from "antd";
import { ModeContext } from "../../context/modeContext"
import { Link } from "react-router-dom";

const ProductList = () => {
    const {users, setUsers, favourites, setFavourites} = useContext(ModeContext);
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, [])
    const handleAddToBasket = (obj) => {
        setFavourites([...favourites, obj])
        console.log(favourites);
    }
    const columns = [
        {
          title: "Product Id",
          dataIndex: "id",
        },
        {
          title: "Product Name",
          dataIndex: "name",
        },
        {
          title: "Unit Price",
          dataIndex: "unitPrice",
        },
        {
          title: "Quantify Per Unit",
          dataIndex: "quantityPerUnit",
        },
        {
            title: 'Details',
            dataIndex: "id",
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (elem) => <a>{<Link to={`/products-detail/${elem}`}>Details</Link>}</a>,
          },
          {
            title: 'Add to Card',
            dataIndex: "id",
            key: 'id',
            fixed: 'right',
            width: 100,
            render: (el, obj) =><button onClick={() => handleAddToBasket(obj)}>Add to Basket</button>,
          },
      ];

    
  return <div>
    <Table
        columns={columns}
        dataSource={users}
        pagination={{
          pageSize: 50,
        }}
      />
  </div>;
};

export default ProductList;
