import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import classNames from 'classnames/bind';
import ColorChooser from '../color-chooser/ColorChooser';
import AddColorDialog from '../add-color-dialog/AddColorDialog';
import Slider from '@material-ui/lab/Slider';


import styles from './ToolColorSelect.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  initiallyActiveColor: PropTypes.string.isRequired,
  updateToolColor: PropTypes.func.isRequired,
  onColorSelect: PropTypes.func.isRequired,
  lineWidth: PropTypes.number.isRequired,
  onLineWidthChange: PropTypes.func.isRequired,
};


class ToolColorSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addColorButtonModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      addColorButtonModalOpen: true,
    })
  }

  closeModal() {
    this.setState({
      addColorButtonModalOpen: false,
    });
  }

  render() {
    const { colors, updateToolColor, onColorSelect, lineWidth, onLineWidthChange } = this.props;
    const { addColorButtonModalOpen } = this.state;
  

    const top = '50%';
    const left = '50%';
    
    const addColorModalPosition = {
      position: 'absolute',
      top,
      left,
      transform: `translate(-${top + 15}, -${left})`,
    };


    return (
      <Card>
        <Modal open={addColorButtonModalOpen} onClose={this.closeModal}>
          <div style={addColorModalPosition}>
            <AddColorDialog onSubmit={() => window.alert('added a new color!')}/>
          </div>
        </Modal>
        <div className={cx('pen-select')}>
          <ColorChooser initiallyActiveColor={this.props.initiallyActiveColor} colors={colors} onColorSelection={(color) => {
            onColorSelect();
            updateToolColor({ color })
          } } />
          {/* TODO: the following may be uncommented as soon as we figure out how to `PUT` `user.props` to the DB */}
          {/* <div className={cx('add-color-button')}>
            <Button color='primary' onClick={this.openModal} variant="contained" value='Submit'>Add Color</Button>
          </div> */}
          <Slider
            value={lineWidth}
            onChange={(event, width) => onLineWidthChange({ width })}
            min={2}
            max={25}
            step={1}
          />
        </div>
      </Card>
    );
  }

}

ToolColorSelect.propTypes = propTypes;

export default ToolColorSelect;

