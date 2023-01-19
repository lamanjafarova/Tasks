import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import  axios  from "axios"
import Profile from "../images/bird.jpg"
import "./index.scss"

const ChatTwo = () => {
    const [chatData, setChatData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8000/chatData")
      .then((response) => setChatData(response.data))
    }, []);
    const formik = useFormik({
      initialValues: {
          name: "John",
          message: '',
      },
      onSubmit: values => {
        axios.post(`http://localhost:8000/chatData`, values)
      },
    });
  return (
   <div className='container'>
      {chatData.map((element) => {
          if(element.name === "Sam"){
            return <div className='image'><img src={Profile} alt=""/>  
            <p className='left'>{element.message}</p></div>
          } else if (element.name === "John"){
            return <p className='right'>{element.message}</p>
          }
      })}
        <form onSubmit={formik.handleSubmit}><br />
       <input
         placeholder='Message'
         id="message"
         name="message"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.message}
       /> <br />
      <div className='btn'><button type="submit">Send</button></div>
     </form>
   </div>
  )
}

export default ChatTwo

