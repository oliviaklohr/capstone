import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';

import styles from './CreateNotebook.module.css';

const cx = classNames.bind(styles);

//TODO: GET LIV REDUX TOOLS ASAP

class CreateNotebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // WHOA SO MANY THINGS
      notebookName: '',
      privateSelected: false,
      publicSelected: false,
      notebookError: false,
      selectedError: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.validator = this.validator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(event, stateLabel) {
    this.setState({
      [`${stateLabel}`]: event.target.value,
    });
  }

  // TODO: THIS IS RENDERING NOT-VALID NO MATTER WHAT I PUT IN SO THAT'S SOME BULLSHIT, BUT I'M SURE IT'S MY FAULT LOL.
  // IT'S DEF CAUSE I FUCKED UP THE VALIDATOR.
  handleSubmit() {
    // TODO: remove these alerts and replace with either dispatching to the redux store, or not
    if(this.validator()) {
      window.alert('input is valid!')
    }
    else {
      window.alert('input is NOT valid!')
    }
  }

  // ALLLLLLL SORTS OF BROKE
  flip(value) {
    return !value;
  }

  validator() {
    const { notebookName, privateSelected, publicSelected } = this.state;

    const notebookError = !(typeof notebookName === 'string' && notebookName.length > 0);

    // I DON'T THINK I WANNA HANDLE THIS IN HERE BUT I DON'T WANT BOTH TO BE ABLE
    // TO BE SELECTED AT ONCE AND I GOT CONFUSED SO HERE I AM
    const selectedError = (!privateSelected && !publicSelected) || (privateSelected && publicSelected);

    const canSubmit = !notebookError && !selectedError;

    this.setState({
      notebookError,
      selectedError,
    });

    return canSubmit;
  }

  render() {
    const { notebookError, privateSelected, publicSelected } = this.state;

    return(
      <div className={cx('create')}>
        <Input
          name='notebookName'
          error={notebookError}
          onChange={(event) => this.handleValueChange(event, 'notebookName')}
          placeholder='Notebook Name'
          type='text'
        />
        {/* DIS SHIT DON'T WORK BUT IDC I TRIED */}
        {/* HOW TF DO I DO DIS */}
        {/* I JUST WANNA FLIP THE VALUE ON THE CLICK, BRUH */}
        <div className={cx('private-public-buttons')}>
          <Button color='primary' onClick={this.flip(privateSelected)} value='Button'>Private</Button>
          <Button color='primary' onClick={this.flip(publicSelected)} value='Button'>Public</Button>
        </div>
        <div className={cx('create-button')}>
          <Button color='primary' onClick={this.handleSubmit} value='Submit'>Create Notebook</Button>
        </div>
      </div>
    );
  }
};

export default CreateNotebook;
