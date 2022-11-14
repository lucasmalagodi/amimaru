import React from "react";
import "./Image.css";

const Image = ({alt, src}) => {
    console.log(...src);
    return (
       <div className="wrapper">
            <div className="skeleton">
                <img className="Img-fluid" alt={alt} src={src} />
            </div>
       </div>
    );
}

export default Image;