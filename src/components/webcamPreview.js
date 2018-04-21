import React from "react"

import "../App.css"

const WebcamPreview = ({ imageSources }) => (
  <div className="wrapper">
    {imageSources &&
      imageSources.map(source => (
        <div
          style={{
            width: "160px",
            height: "160px",
            border: "1px solid black",
            background: "url('" + source + "') no-repeat center center"
          }}
        />
      ))}
  </div>
)

export default WebcamPreview
