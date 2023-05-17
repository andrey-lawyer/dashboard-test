/** @type { import('@storybook/react').Preview } */
import './../src/index.css';
// import './global.css';
import { withRouter } from 'storybook-addon-react-router-v6';

export const decorators = [withRouter];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
