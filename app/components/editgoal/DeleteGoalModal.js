import React from "react";
import ReactDOM from "react-dom";
import {Link, browserHistory} from "react-router";

import {Modal, Button } from "react-bootstrap";

import { getAuth } from '../../services/loginService.js';

import '../../scss/primary.scss';

export default class DeleteGoalModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show
    }
  }

    handleDate(field, event) {
      this.setState({
        [field]: event
      })
    }

    handleChange(field, event) {
      this.setState({
        [field]: event.target.value
      });
    }

    handleRadioChange(field, event) {
      this.setState({radioOption: field})
    }

  render() {

    let close = () => this.setState({ show: false});

    return (

    <article>


    <div className="modal-container" style={{height: 200}}>
        <Button
         className="btn btn-primary form-submit"
          onClick={() => this.setState({ show: true})}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
        </Button>

       <Modal
         show={this.state.show}
         onHide={close}
         container={this}
         aria-labelledby="contained-modal-title"
       >
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Delete Goal</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           Do you really want to delete this goal? This is undoable.
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={close} className="delete-goal-button">Delete</Button>
           <Button onClick={close}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
    </article>


    );
  }
}
