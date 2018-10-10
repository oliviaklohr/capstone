import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  createNewUser: PropTypes.func.isRequired,
  openDocumentId: PropTypes.string,
  changeOpenDocument: PropTypes.func.isRequired,
  closeOpenDocument: PropTypes.func.isRequired,
  fetchDocument: PropTypes.func.isRequired,
};

const defaultProps = {
  openDocumentId: undefined,
};

class TestReduxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      openDocumentId: props.openDocumentId,
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleOpenDocumentIdChange = this.handleOpenDocumentIdChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstNameValue: event.target.value,
    });
  }


  handleLastNameChange(event) {
    this.setState({
      lastNameValue: event.target.value,
    });
  }

  handleOpenDocumentIdChange(event) {
    this.setState({
      openDocumentId: event.target.value,
    });
  }

  render() {
    const { createNewUser, openDocumentId, changeOpenDocument, closeOpenDocument, fetchDocument } = this.props;
    const { firstNameValue, lastNameValue, openDocumentId: openDocumentIdFromState } = this.state;

    return(
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'red', width: '100%', minHeight: '40px' }}>
          <input placeholder='First Name' onChange={this.handleFirstNameChange} />
          <input placeholder='Last Name' onChange={this.handleLastNameChange} />
          <button onClick={() => createNewUser(firstNameValue, lastNameValue)}>Save User!</button>
          <div style={{ paddingLeft: '20px' }}>openDocumentId: {openDocumentId}</div>
          <input placeholder='Open Document Id' onChange={this.handleOpenDocumentIdChange}/>
          <button onClick={() => changeOpenDocument({ documentId: openDocumentIdFromState })}>Change Open Document Id!</button>
          <button onClick={() => closeOpenDocument()}>Close Open Document Id!</button>
          <button style={{ backgroundColor: 'green' }} onClick={() => fetchDocument()}>PRAY ZE BULLSHIT WORKS!!!!</button>
        </div>
      </div>
    );
  };
}

TestReduxComponent.propTypes = propTypes;
TestReduxComponent.defaultProps = defaultProps;

export default TestReduxComponent;

