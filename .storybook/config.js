import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/dist/react';
import { setDefaults } from '@storybook/addon-info';

// '@storybook/addon-options configuration
setOptions({
  name: 'Remarque',
  showAddonPanel: true,
  addonPanelInRight: true,
});

// WRAP ALL STORIES WITH WITHKNOBS, THIS NEEDS TO HAPPEN BEFORE ANY OTHER DECORATORS
addDecorator((story, context) => withKnobs(story, context));

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
