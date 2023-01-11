import React, { useContext } from "react";
import { ModeContext } from "../../context/modeContext"
import { Table } from "antd";

const ProductsInBasket = () => {
    const {favourites, setFavourites} = useContext(ModeContext);
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
      ];
    
  return <div>
     <Table
        columns={columns}
        dataSource={favourites}
        pagination={{
          pageSize: 15,
        }}
      />

  </div>;
};

export default ProductsInBasket;
