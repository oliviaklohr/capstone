import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';

import styles from './CreateCategory.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

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

  handleValueChange(event) {
    this.setState({
      categoryValue: event.target.value,
    });
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { categoryValue } = this.state;
    
    if(this.validator()) {
      onSubmit({ category: categoryValue });
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
      <Card>
        <div className={cx('category')}>
          <Input
            name='categoryValue'
            error={categoryError}
            onChange={this.handleValueChange}
            placeholder='Category Name'
            type='text'
            />
          <div className={cx('category-button')}>
            <Button color='primary' onClick={this.handleSubmit} value='Submit'>Create Category</Button>
          </div>
        </div>
      </Card>
    );
  }
};

CreateCategory.propTypes = propTypes;

export default CreateCategory;
