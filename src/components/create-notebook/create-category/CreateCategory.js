import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';

import styles from './CreateCategory.module.css';

const cx = classNames.bind(styles);

class CreateCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryValue: '',
      categoryError: false,
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

  handleSubmit() {
    // TODO: remove these alerts and replace with either dispatching to the redux store, or not
    if(this.validator()) {
      window.alert('input is valid!')
    }
    else {
      window.alert('input is NOT valid!')
    }
  }

  validator() {
    const { categoryValue } = this.state;

    const categoryError = !(typeof categoryValue === 'string' && categoryValue.length > 0);

    const canSubmit = !categoryError;

    this.setState({
      categoryError,
    });

    return canSubmit;
  }

  render() {
    const { categoryError } = this.state;

    return(
      <div className={cx('category')}>
        <Input
          name='categoryValue'
          error={categoryError}
          onChange={(event) => this.handleValueChange(event, 'categoryValue')}
          placeholder='Category Name'
          type='text'
        />
        <div className={cx('category-button')}>
          <Button color='primary' onClick={this.handleSubmit} value='Submit'>Create Category</Button>
        </div>
      </div>
    );
  }
};

export default CreateCategory;
