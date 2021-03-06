import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SmallImg from '../assets/small.jpg';

class Home extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    return (
      <div className="container">

        <div className="bigImage jumbotron">
          <h1 className="text-center">Home page</h1>
        </div>
        <p>Above uses a background image in <b>style</b>.</p>
        <br/>

        <div className="d-inline-block mb-3">
          <p>
            This uses an <b>Image Tag</b> in react component:
          </p>
          <img src={SmallImg}/>

          <div className="animated infinite bounce">Animation</div>
        </div>

        <div className="d-inline-block">
          <Button color="danger" onClick={this.toggle}>Click me for modal</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

      </div>
    );
  }
};

export default Home;
