import { useFormik } from 'formik';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import "./home.scss"

const HomeBlog = () => {
    const navigate = useNavigate();
    const formik = useFormik({
     initialValues: {
      title: '',
       body: '',
       author: '',
     },
     onSubmit: values => {
    function postNewUsers(obj) {
            fetch(` http://localhost:8000/blogs`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj),
            });
        }
        postNewUsers(values);
        navigate("/new-blog");
     },
   });
   return (
    
     <>
       <Helmet>
        <title>New Blog</title>
        <meta charSet="utf-8" />
        <meta description="this is new blog page" />
      </Helmet>
     <div className="container">
        <div className="box">
        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Blog Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="body">Blog Body</label>
      <textarea 
      id="body"
      name="body"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.body} cols="30" rows="10"></textarea>
       <label htmlFor="author">Blog Author</label>
      <select name="author" id="author" onChange={formik.handleChange} >
        <option  name="Mery" value={formik.values.name}>Mery</option>
        <option name="Jimy" value={formik.values.name}>Jimy</option>
        <option name="Kemy" value={formik.values.name}>Kemy</option>
      </select>
       <button type="submit">Submit</button>
     </form>
        </div>
     </div>
     </>
   );
};

export default HomeBlog;
