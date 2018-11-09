import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ColorChooser from '../color-chooser/ColorChooser';
import CategoryDropdown from './category-dropdown/CategoryDropdown';


import styles from './CreateNotebook.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  categories: PropTypes.array,
  onCreateNewNotebook: PropTypes.func.isRequired,
};

const defaultProps = {
  categories: null,
};

const NOTEBOOK_COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
];

class CreateNotebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookName: '',
      notebookNameError: false,
      isPublic: false,
      selectedColor: '',
      selectedCategory: '',
    };

    this.handleNotebookNameChange = this.handleNotebookNameChange.bind(this);
    this.handleNotebookCategoryChange = this.handleNotebookCategoryChange.bind(this);
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

  handleNotebookCategoryChange({ selectedCategory }) {
    this.setState({ selectedCategory });
  }

  handlePublicToggle(event) {
    const isPublic = event.target.checked;

    this.setState({ isPublic });
  }

  handleSelectedColorChange(selectedColor) {
    this.setState({ selectedColor });
  }

  handleSubmit() {
    // TODO: update
    this.validator();

    const { onCreateNotebook } = this.props;
    const { notebookName, isPublic, selectedColor, selectedCategory } = this.state;
    
    onCreateNotebook({
      title: notebookName,
      category: selectedCategory,
      color: selectedColor,
      isPublic,
    });
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
    const { categories } = this.props;

    const switchControl = (
      <Switch
        checked={isPublic}
        onChange={this.handlePublicToggle}
      />
    );

    const switchMarkup = (<FormControlLabel label="Public" control={switchControl} />);

    return(
      <Card>
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
              <ColorChooser
                onColorSelection={this.handleSelectedColorChange}
                colorOptionIcon="BookOutlined"
                colors={NOTEBOOK_COLORS}
                />
            </div>
          </div>
          <div className={cx('create-notebook-button')}>
            <CategoryDropdown options={categories} onSelectChange={this.handleNotebookCategoryChange} />
            <Button color='primary' onClick={this.handleSubmit} variant="contained" value='Submit'>Create Notebook</Button>
          </div>
        </div>
      </Card>
    );
  }
}

CreateNotebook.propTypes = propTypes;
CreateNotebook.defaultProps = defaultProps;

export default CreateNotebook;
