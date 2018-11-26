import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/lab/Slider';

import styles from './AddColorDialog.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  opacity: PropTypes.number,
};

const defaultProps = {
  opacity: 1,
};

class AddColorDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
      colorError: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(value, color) {
    this.setState({
      [`${color}Value`]: value,
    });
  }

  handleSubmit() {
    const { onSubmit, opacity } = this.props;
    const { rValue, gValue, bValue } = this.state;

    const color = `rgba(${rValue}, ${gValue}, ${bValue}, ${opacity})`

    onSubmit({ color });
  }

  render() {
    const { opacity } = this.props;
    const { rValue, gValue, bValue } = this.state;

    const previewColor = { backgroundColor: `rgba(${rValue}, ${gValue}, ${bValue}, ${opacity})`}

    return(
      <Card>
        <div className={cx('add-color')}>
            <div className={cx('slider')}>
              <span className={cx('slider-label')}>r:</span>
              <Slider
                value={rValue}
                onChange={(event, value) => this.handleValueChange(value, 'r')}
                min={0}
                max={255}
                step={1}
              />
            </div>
            <div className={cx('slider')}>
              <span className={cx('slider-label')}>g:</span>
              <Slider
                value={gValue}
                onChange={(event, value) => this.handleValueChange(value, 'g')}
                min={0}
                max={255}
                step={1}
              />
          </div>
          <div className={cx('slider')}>
              <span className={cx('slider-label')}>b:</span>
              <Slider
                value={bValue}
                onChange={(event, value) => this.handleValueChange(value, 'b')}
                min={0}
                max={255}
                step={1}
              />
          </div>
          <div className={cx('add-color-footer')}>
            <div style={previewColor} className={cx('color-preview')}/>
            <Button color='primary' onClick={this.handleSubmit} variant="contained" value='Submit'>Add</Button>
          </div>
        </div>
      </Card>
    );
  }
};

AddColorDialog.propTypes = propTypes;
AddColorDialog.defaultProps = defaultProps;

export default AddColorDialog;
