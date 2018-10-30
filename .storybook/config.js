import React from 'react';
import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/dist/react';
import { setDefaults } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/state/reducers';

// '@storybook/addon-options configuration
setOptions({
  name: 'Remarque',
  showAddonPanel: true,
  addonPanelInRight: true,
});

const store = createStore(rootReducer);

// WRAP ALL STORIES WITH WITH KNOBS, THIS NEEDS TO HAPPEN BEFORE ANY OTHER DECORATORS
addDecorator((story, context) => withKnobs(story, context));
addDecorator(StoryRouter());
addDecorator((story) => <Provider store={store}>{story()}</Provider>);

// addon-info
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true,
  source: true,
});

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../", true, /-story\.js?$/));
}

configure(loadStories, module)
