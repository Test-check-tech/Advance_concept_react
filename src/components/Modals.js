import React from 'react'
import ReactDOM from "react-dom";

// These two containers are siblings in the DOM

const modalRoot = document.getElementById('modalroot');
// These two containers are siblings in the DOM

// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
    constructor(props) {
        super(props);
        // Create a div that we'll render the modal into. Because each
        // Modal component has its own element, we can render multiple
        // modal components into the modal container.
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        modalRoot.removeChild(this.el);
    }

    render() {
        // Use a portal to render the children into the element
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
            this.props.children,
            // A DOM element
            this.el,
        );
    }
}

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
export default Modal