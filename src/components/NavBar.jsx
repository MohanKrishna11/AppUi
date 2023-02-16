import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <h1>NavBar</h1>

        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/navBar"}>NavBar</Link></li>
          <li><Link to={"/productAndCard"}>ProductAndCard</Link></li>
          <li><Link to={"/userDetails"}>UserDetails</Link></li>
        </ul>
 
        <form>
        <label>
          Programming Languages :{" "}
           <select name="selectedFruit">
            <option value="apple">React</option>
            <option value="banana">Node</option>
            <option value="orange">Angular</option>
          </select>
        </label> 
        <br></br>
        <>
          <progress value={0} /> 
          <br></br>
          <progress value={0.5} />
          <br></br>
          <progress value={null} />
          <br></br>
          <progress value={75} max={100} />
          <br></br>
          <progress value={0.9}/>
          <br></br>
          <progress value={null} />
          <br></br>
        </>
        
        </form>

    </div>
  )
}

export default NavBar;
