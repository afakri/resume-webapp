import React from 'react'
import GalleryItem from "./GalleryItem"
import {GalleryData} from "./GalleryData"

function Gallery() {
   
    return (
        <div className="Gallery-section" id="mycode">
            <div className="Gallery-section-title">
                <p>Other Noteworthy Code I've written </p>
            </div>
            <ul className="Gallery-grid">
            {GalleryData.map((data,index)=>{
                    return(
                     <a href={data.link} target="blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}><li key={index}><GalleryItem title={data.title} description={data.description} language={data.language}/></li></a>   
                    )
                })}

            </ul>
        </div>
    )
}

export default Gallery
