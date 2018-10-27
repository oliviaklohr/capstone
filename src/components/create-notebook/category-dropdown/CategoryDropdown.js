import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const propTypes = {
  /** function that is called with the current value selected by the DropDown */
  onSelectChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {
  onSelectChange: () => console.warn('No `onSelectChange` provided to DropDown component.')
};

const SELECT_CATEGORY = 'Select Category';
const NO_CATEGORY = 'No Category';

class CategoryDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: SELECT_CATEGORY,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.convertOptionToItem = this.convertOptionToItem.bind(this);
  }

  handleSelectChange(event) {
    const category = event.target.value;
    const returnCategory = (category !== NO_CATEGORY && category !== SELECT_CATEGORY)
      ? category
      : '';

    const { onSelectChange } = this.props;

    const setStateCallback = () => onSelectChange({ selectedCategory: returnCategory });

    this.setState({ category }, setStateCallback);
  }

  convertOptionToItem(option) {
    return (<MenuItem value={option}>{option}</MenuItem>);
  }

  render() {
    const { options } = this.props;
    const { category } = this.state;

    return (
      <FormControl>
        <Select
          autoWidth
          name='DropDown'
          value={category}
          onChange={this.handleSelectChange}
        >
          <MenuItem value={SELECT_CATEGORY} disabled>Select Category</MenuItem>
          {options.map(this.convertOptionToItem)}
          <MenuItem value='No Category'>No Category</MenuItem>
        </Select>
      </FormControl>
    );
  }
};

CategoryDropdown.propTypes = propTypes;
CategoryDropdown.defaultProps = defaultProps;

export default CategoryDropdown;
