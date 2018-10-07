
import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

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
