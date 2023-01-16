import React from 'react'
import { Link } from 'react-router-dom'
import "./found.css"

const NotFound = () => {
  return (
    <div className='container'>
          <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center ">404</h1>


            </div>

            <div class="contant_box_404">
              <h3 class="h2">
                Look like you're lost
              </h3>

              <p>the page you are looking for not avaible!</p>
              <Link to="/new-blog" className='link_404'>Home</Link>

              {/* <a href="" class="link_404">Go to Home</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   {/* <div className="not-found">
   <div className="found">
    <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <img src={Notfound} alt="" />
      <Link to="/new-blog" className='home'>Home</Link>
    </div>
   </div> */}
    </div>
  )
}

export default NotFound
