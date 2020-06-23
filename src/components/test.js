import React from 'react'
import CaptureArea from './CaptureArea'
function WebcamStream(props) {
    return <div ref={props.innerRef}> WebcamStream </div>;
  }  
  
  class AppContent extends React.Component {
    videoTag = React.createRef();  
    render() {
      return (
        <div id="content">
          <WebcamStream
            innerRef={this.videoTag}
            width="300"
            height="300"
            title="Real-time video stream from webcam"
            id="video"
          />
          <CaptureArea
            x="20"
            y="20"
            width="120"
            height="120"
            color="white"
            videoTag={this.videoTag}
          />
        </div>
      );
    }
  }  
  export default AppContent