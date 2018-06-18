import React, { Fragment } from 'react'
import Webcam from 'react-webcam'
import WebcamPreview from './webcamPreview'

export default class WebcamCapture extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      previews: []
    }
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    const { previews } = this.state

    const imageSrc = this.webcam.getScreenshot()
    console.log('DATA', imageSrc)

    this.setState({
      previews: previews.concat(imageSrc)
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <Webcam
            audio={false}
            height={640}
            width={480}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
          />
          {this.state.previews.length < 4 && (
            <button onClick={this.capture}>Capture photo</button>
          )}
        </div>
        <div>
          <WebcamPreview imageSources={this.state.previews} />
        </div>
      </Fragment>
    )
  }
}
