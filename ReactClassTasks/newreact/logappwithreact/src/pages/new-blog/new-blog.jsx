import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./index.scss"

const NewBlog = () => {
    const [userData, setUserData] = useState([]);
    const [isLoaoding, setIsLoaoding] = useState(true);
    useEffect(() => {
        fetch(" http://localhost:8000/blogs")
        .then((response) => response.json())
        .then((data) => setUserData(data));
        setIsLoaoding(false)
      }, [])
  return <div className="container">
    <Helmet>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta description="this is home page" />
      </Helmet>
      {userData.map((element) => {
        return (
          <Link to={`/${element.id}`} className="link">
            <div className="data">
              <h2 class="title-color">{element.title}</h2>
              <p class="purple-text"> {element.body}</p>
              <span>{element.author}</span>
            </div>
          </Link>
        );
      })}
  </div>;
};

export default NewBlog;
