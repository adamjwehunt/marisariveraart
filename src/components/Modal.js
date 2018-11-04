import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const modalCover = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '7',
  transform: 'translateZ(0)',
  backgroundColor: 'rgba(#000, 0.15)',

  '.modal': {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '2.5em 1.5em 1.5em 1.5em',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  }
}

const ModalTrigger = ({text, toggleOpen}) => <button onClick={toggleOpen}>{text}</button>;

const ModalContent = ({ toggleOpen }) => {
  return ReactDOM.createPortal(
    <aside css={modalCover}>
      <div className="modal">
        <button onClick={toggleOpen}>
          close
        </button>
        <div>
          CONTENT WILL GO HERE
        </div>
    </div>
  </aside>,
  document.body
  );
}

class Modal extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { triggerText } = this.props;

    return (
      <Fragment>
        <ModalTrigger
          toggleOpen={this.toggleOpen}
          text={triggerText}
        />
        {isOpen &&
        <ModalContent
          toggleOpen={this.toggleOpen}
        />
        }
      </Fragment>
    );
  }
}

export default Modal;