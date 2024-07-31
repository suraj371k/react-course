import React from "react";

function Card(props){
    let course = props.course;
    return(
        <div className="w-[300px]">
          <div>
            <img className="rounded-md" src={course.image.url}></img>
          </div>
          
          <div>
            <p>{course.title}</p>
            <p>{
              course.description.length>100?(course.description.substr(0 , 100) + "..."):(course.description)
              }</p>
          </div>
        </div>
    

    )
}

export default Card;