import classNames from 'classnames/bind';
import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './CategoryDropdown.module.css';

const cx = classNames.bind(styles);

class CategoryDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: '',
      name: '',
      labelWidth: 50,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, stateLabel) {
    this.setState({
      [`${stateLabel}`]: event.target.value,
     });
  }

  // I'M SURE YOU HAVE A BETTER WAY TO DO THIS, BUT THIS IS WHAT WAS SUGGESTED IN
  // MATERIAL-UI'S DOCUMENTATION
  // NEED TO CSS THE SHIT OUTTA THIS THING LOL.

  // NEEDS TO TAKE AN ARRAY OF CATEGORY-DROPDOWN-ITEMS TO DISPLAY VALUES
  // DUNNO HOW TO DO CHILDREN WITH CLASS VS CONST
  render() {
    const { age } = this.state;
    return (
      <form autoComplete="on">
        <FormControl>
          <InputLabel htmlFor="category-select">Select Category</InputLabel>
          <Select
            name='age'
            value={age}
            onChange={(event) => this.handleChange(event, 'age')}
            className={cx('select')}
            inputProps={{
              id: 'category-select',
            }}
          >
            <MenuItem value="" disabled>
              Select Category
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
};

export default CategoryDropdown;
