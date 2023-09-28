import React, { useState } from "react";


const SideBar = (props)=>{
    const [name,setName] = useState("")
    const [link, setLink] = useState("")



    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <h6>Add Course</h6>
        <hr />
        <form  >
          <label htmlFor="course-name">Course Name</label>
          <input className="form-control me-2" type="search" placeholder="Course name..." aria-label="course-name" onChange={(e)=>{setName(e.target.value)}}/>
          <label htmlFor="course-link">Course link</label>
          <input className="form-control me-2" type="search" placeholder="Course link..." aria-label="course-link" onChange={(e)=>{setLink(e.target.value)}}/>
          <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
            e.preventDefault()
            props.addCourse(name,link)}}>Add</button>
        </form>
        <br />
        <h6>New Announcement</h6>
        <hr />
        <form >
          <label htmlFor=""></label>
        </form>
      </div>
    </div>
    )
}



export default SideBar