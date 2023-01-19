import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import  axios  from "axios"
import "./index.scss"
import Profile from "../images/dog.jpg"
import ProfileTwo from "../images/bird.jpg"

const ChatTwo = () => {
    const [chatData, setChatData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8000/chatData")
      .then((response) => setChatData(response.data))
    }, []);
    const formik = useFormik({
      initialValues: {
          name: "Sam",
          message: '',
      },
      onSubmit: values => {
        axios.post(`http://localhost:8000/chatData`, values)
      },
    });
  return (
   <div className='container'>
      {chatData.map((element) => {
          if(element.name === "John"){
            return <div className='image'><img src={Profile} alt=""/>  
              <p className='left'>{element.message}</p></div>
          } else if (element.name === "Sam"){
            return <div className='imageRight'><img src="" alt="" /><p className='right'>{element.message}</p></div>
          }
      })}
        <form onSubmit={formik.handleSubmit}>
       <input
        placeholder='Message'
         id="message"
         name="message"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.message}
       /> 
      <div className='btn'><button type="submit">Send</button></div>
     </form>
   </div>
  )
}

export default ChatTwo

