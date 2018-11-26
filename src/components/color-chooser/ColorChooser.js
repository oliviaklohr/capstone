import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ColorChooserItem from './color-chooser-item/ColorChooserItem';

import styles from './ColorChooser.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** callback triggered on a color selected */
  onColorSelection: PropTypes.func,
  colorOptionIcon: PropTypes.string,
  initiallyActiveColor: PropTypes.string,
};

const defaultProps = {
  onColorSelection: null,
  colorOptionIcon: undefined,
  initiallyActiveColor: undefined,
};

class ColorChooser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: props.initiallyActiveColor || '',
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(color) {
    const { onColorSelection } = this.props;

    this.setState({
      selectedColor: color,
    });

    if (onColorSelection) { 
      return onColorSelection( color );
    }
  }

  render() {
    const { colors, colorOptionIcon } = this.props;
    const { selectedColor } = this.state;

    return(
      <div className={cx('color-chooser')}>
        {colors.map(color => (
          <ColorChooserItem
            isSelected={selectedColor === color}
            key={`color_${color}`}
            color={color}
            onClick={this.handleOnClick}
            icon={colorOptionIcon}
          />
        ))}
      </div>
    );
  }
}

ColorChooser.propTypes = propTypes;
ColorChooser.defaultProps = defaultProps;

ColorChooser.Item = ColorChooserItem;

export default ColorChooser;
