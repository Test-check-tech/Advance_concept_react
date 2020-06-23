import React from 'react'
class CaptureArea extends React.Component {
    componentDidMount() {
      console.log(this.props.videoTag.current);
    }
    render() {
      return <div> CaptureArea </div>;
    }
  }

  export default CaptureArea