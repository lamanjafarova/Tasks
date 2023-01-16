import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import "./detail.scss"

const BlogDetail = () => {
    const [userAbout, setUserAbout] = useState([]);
    
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(` http://localhost:8000/blogs/${id}`)
        .then((response) => response.json())
        .then((data) => setUserAbout(data));
    }, [])
    const handleDelete = (e) => {
        function deleteById() {
            fetch(` http://localhost:8000/blogs/${id}`, {
              method: "DELETE",
            });
          } 
          deleteById();
          navigate("/new-blog")
    }
  return <div className="container">
     <Helmet>
        <title>{userAbout.title}</title>
        <meta charSet="utf-8" />
        <meta description="this is detail page" />
        <meta
        name="description"
          content={userAbout.title}
        />
      </Helmet>
<div className="link">
<div className="data">
<h2 className="title-color">{userAbout.title}</h2>
   <p className="purple-text">{userAbout.body}</p>
   <p>{userAbout.author}</p>
   <button className="deletebtn" id={userAbout.id} onClick={(e) => handleDelete(e)}><i className="fa-solid fa-eraser"></i> Delete</button>
<button className='backBtn' onClick={() => navigate("/new-blog")}><i className="fa-solid fa-arrow-left"></i> Go Back</button>  
</div>
</div>
  </div>;
};

export default BlogDetail;
