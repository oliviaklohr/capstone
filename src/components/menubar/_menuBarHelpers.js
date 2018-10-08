import React from 'react';
import shortid from 'shortid';
import IconButton from '@material-ui/core/IconButton/IconButton';
// NOTE: ONLY import icons with the '*' flag, everything else should be a named, or default export that you can import
import * as materialIcons from '@material-ui/icons';

const mapDataToMarkup = ({ iconName, onClick, isDisabled }) => {
  const Icon = materialIcons[iconName];
  return(
    <IconButton key={shortid.generate()} onClick={onClick} disabled={isDisabled}>
      <Icon />
    </IconButton>
  );
};

export const generateMenuBarSocketMarkup = arrayOfDataObjects => arrayOfDataObjects.map(mapDataToMarkup);
