import React from "react";


const Announcement = (props)=>{


    return(
        <div>
            {props.announcements.map((e,i)=>{
                return <div className="announcements" key={i}>
                    <h1>{e.title}</h1>
                    <hr />
                    <div>{e.body}</div>
                    <hr />
                </div>
            })}
        </div>
    )
}



export default Announcement