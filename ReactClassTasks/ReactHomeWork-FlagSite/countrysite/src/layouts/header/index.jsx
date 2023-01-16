import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Header = () => {
const [theme, setTheme] = useState('light');
const toggleTheme = () => {
if (theme === 'light') {
setTheme('dark');
} else {
  setTheme('light');
}
};
useEffect(() => {
  document.body.className = theme;
}, [theme]);
  return (
    <div className="container">
      <div id='header' className={`Header ${theme}`}>
       <NavLink  to={"/"}><h1>Where is the World?</h1></NavLink >
        <button onClick={toggleTheme}><i className="fa-regular fa-moon"></i>Dark Mode</button>
    </div>
    </div>
  )
}

export default Header