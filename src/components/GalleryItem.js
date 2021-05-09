import React from 'react'

function GalleryItem(props) {
    return (
        <div className="Item-container">
            <i className="far fa-file-code"></i>
            <div className="item-title">{props.title}</div>
            <div className="item-description">{props.description}</div>
            <ul className="language">
                <li>{props.language}</li>
            </ul>
        </div>
    )
}

export default GalleryItem
