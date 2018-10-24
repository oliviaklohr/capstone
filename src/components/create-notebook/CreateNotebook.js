import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ColorChooser from '../color-chooser/ColorChooser';


import styles from './CreateNotebook.module.css';

const cx = classNames.bind(styles);

const propTypes = {

};

class CreateNotebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookName: '',
      notebookNameError: false,
      isPublic: false,
      selectedColor: '',
    };

    this.handleNotebookNameChange = this.handleNotebookNameChange.bind(this);
    this.handlePublicToggle = this.handlePublicToggle.bind(this);
    this.handleSelectedColorChange = this.handleSelectedColorChange.bind(this);
    this.validator = this.validator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNotebookNameChange(event) {
    this.setState({
      notebookName: event.target.value,
    });
  }

  handlePublicToggle(event) {
    this.setState({
      isPublic: event.target.checked,
    });
  }

  handleSelectedColorChange(selectedColor) {
    this.setState({ selectedColor }, () => console.log('color changed!', this.state));
  }

  handleSubmit() {
    // TODO: update
    this.validator();
    window.alert('submit clicked!');
  }

  validator() {
    const { notebookName } = this.state;

    const notebookNameError = !(typeof notebookName === 'string' && notebookName.length > 0);

    const canSubmit = !notebookNameError;

    this.setState({
      notebookNameError,
    });

    return canSubmit;
  }

  render() {
    const { isPublic, notebookNameError } = this.state;

    const switchControl = (
      <Switch
        checked={isPublic}
        onChange={this.handlePublicToggle}
      />
    );

    const switchMarkup = (<FormControlLabel label="Public" control={switchControl} />);

    return(
      <div className={cx('create-notebook')}>
        <Input
          name='Create Notebook'
          error={notebookNameError}
          onChange={this.handleNotebookNameChange}
          placeholder='Notebook Name'
          type='text'
        />
        <div className={cx('create-notebook-row')}>
          {switchMarkup}
          <div style={{ display: 'inline-block' }}>
            <ColorChooser onClick={this.handleSelectedColorChange} colorOptionIcon="BookOutlined" colors={['red', 'orange', 'yellow', 'green', 'blue', 'purple']} />
          </div>
        </div>
        <div className={cx('create-notebook-button')}>
          <Button color='primary' onClick={this.handleSubmit} value='Submit'>Create Notebook</Button>
        </div>
      </div>
    );
  }
}

CreateNotebook.propTypes = propTypes;

export default CreateNotebook;
