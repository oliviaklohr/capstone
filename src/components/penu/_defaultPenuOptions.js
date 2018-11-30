import { mdiPen, mdiMarker } from '@mdi/js';

const penActions = {
  blue: {
    onClick: () => window.alert('clicked on Pen Blue'),
    name: 'Pen Blue',
    iconPath: mdiPen,
    color: 'rgba(20, 116, 251, 1)',
  },
  red: {
    onClick: () => window.alert('clicked on Pen Red'),
    name: 'Pen Red',
    iconPath: mdiPen,
    color: 'rgba(213, 0, 0, 1)',
  },
  black: {
    onClick: () => {
      debugger;
      window.alert('clicked on Pen Black')
    },
    name: 'Pen Black',
    iconPath: mdiPen,
    color: 'rgba(0, 0, 0, 1)',
  },
};

const highlighterActions = {
  blue: {
    onClick: () => window.alert('clicked on Highlighter Blue'),
    name: 'Highlighter Blue',
    iconPath: mdiMarker,
    color: 'rgba(20, 116, 251, 1)',
  },
  red: {
    onClick: () => window.alert('clicked on Highlighter Red'),
    name: 'Highlighter Red',
    iconPath: mdiMarker,
    color: 'rgba(213, 0, 0, 1)',
  },
  green: {
    onClick: () => window.alert('clicked on Highlighter Green'),
    name: 'Highlighter Green',
    iconPath: mdiMarker,
    color: 'rgba(99, 184, 77, 1)',
  },
};

export const defaultOptions =  [
  ...Object.values( penActions ),
  ...Object.values( highlighterActions ),
];
