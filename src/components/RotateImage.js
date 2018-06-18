import React, { Component } from 'react'
import { connect } from 'react-redux'
import gatto from 'images/gatto.jpg' // Tell Webpack this JS file uses this image

class RotateImage extends Component {
  state = {
    image: gatto
  }

  // Converts image to canvas; returns new canvas element
  RotateImage = (image, direction) => {
    console.log(image)
    var canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    var ctx = canvas.getContext('2d')
    this.drawImage(
      canvas,
      ctx,
      image,
      canvas.width / 2,
      canvas.height / 2,
      1,
      direction * Math.PI / 2
    )
  }

  // no need to use save and restore between calls as it sets the transform rather
  // than multiply it like ctx.rotate ctx.translate ctx.scale and ctx.transform
  // Also combining the scale and origin into the one call makes it quicker
  // x,y position of image center
  // scale scale of image
  // rotation in radians.
  drawImage = (canvas, ctx, image, x, y, scale, rotation) => {
    console.log('QUI')
    ctx.setTransform(scale, 0, 0, scale, x, y) // sets scale and origin
    ctx.rotate(rotation)
    ctx.drawImage(image, -image.width / 2, -image.height / 2)
    this.setState({
      image: canvas.toDataURL()
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.RotateImage(this.immagine, -1)}>Rotate orario</button>
        <button onClick={() => this.RotateImage(this.immagine, 1)}>
          Rotate antiorario
        </button>
        <img
          src={this.state.image}
          ref={node => {
            this.immagine = node
          }}
        />
      </div>
    )
  }
}
//
export default RotateImage
