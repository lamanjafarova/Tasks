import { useDispatch, useSelector } from "react-redux";
import {  Table } from 'antd';
import { useEffect, useState } from "react";
import { getAllUnversity,  searchInputValueAction,  universitySeacrhAction } from "../../redux/action/university.actions";
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import "./index.css"
const columns = [
  {
    title: 'University Name',
    dataIndex: 'name',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Domains',
    dataIndex: 'domains',
    render:(domains)=> <a href={domains[0]} target="_blank" >{domains[0]}</a>
  },
  {
    title: 'Website',
    dataIndex: 'web_pages',
    render:(web_pages)=> <a href={web_pages[0]} target="_blank" >{web_pages[0]}</a>
  },
 
];

const SearchByUniversity = () => {
const universityData = useSelector((state) => state.universityReducer);
const dispatch = useDispatch();
useEffect(() => {
    // dispatch(getAllUnversity());
    dispatch(universitySeacrhAction(''))
  }, []);
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return <div>
    <h1>Search University By Name</h1>
    <input type="text" className="input_text" value={universityData.inputValue} onChange={(e) => dispatch(searchInputValueAction(e.target.value))} />
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary"  onClick={() => dispatch(universitySeacrhAction(universityData.inputValue))}>
          Search
        </Button>
      </Space>
    </Space>
    <Table columns={columns} dataSource={universityData.data} rowKey={"name"}/>
  </div>;
};

export default SearchByUniversity;
