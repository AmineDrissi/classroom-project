import React from "react";

const Courses = (props) => {
  return (
    <div className="courses">
      {props.courses.map((course,i) => {
        return (
          <div className="card" key={i}>
            <a className="card1" href={course.link}>
              <p>{course.name}</p>
              <p className="small">
                Click to download the lesson :D   
              </p>
              <div className="go-corner" href={course.link}>
                <div className="go-arrow">→</div>
              </div>
            </a>
            {props.role === "teacher" ? <div id="delete"><i className="gg-trash-empty" onClick={()=>{props.handleDelete(course.id)}}></i></div>: null}
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
