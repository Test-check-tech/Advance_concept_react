import React from 'react'
import Columns from './Columns'
import AppContent from './test'
import Modal from './Modals'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
}

handleShow() {
    this.setState({ showModal: true });
}

handleHide() {
    this.setState({ showModal: false });
}
  render() {
    const modal = this.state.showModal ? (
      <Modal>
          <div className="modal">
              <div>
                  With a portal, we can render content into a different
                  part of the DOM, as if it were any other React child.
    </div>
    This is being rendered inside the #modal-container div.
    <button onClick={this.handleHide}>Hide modal</button>
          </div>
      </Modal>
  ) : null;
    return (
      <div className="app">
        <h1>Content Builder</h1>
        <table>
        <tr>
          <Columns />

        </tr>
      </table>
      <AppContent />
      
      
      This div has overflow: hidden.
      <button onClick={this.handleShow}>Show modal</button>
      {modal}
  </div>
        );
        
  }
}
export default App
