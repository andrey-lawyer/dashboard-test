import { string } from 'prop-types';
import { LinkHeader } from './LinkHeader';
import './../index.css';

export default {
  title: 'Link/LinkHeader',
  component: LinkHeader,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      type: string,
      description: 'icon of navigation',
      options: [
        'icon-key',
        'icon-user',
        'icon-d',
        'icon-wallet',
        'icon-discount',
        'icon-message',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    nav: {
      type: string,
      description: 'menu of navigation',
      options: [
        'Dashboard',
        'Customers',
        'Product',
        'Income',
        'Promote',
        'Help',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    text: {
      type: string,
      description: 'color of text',
      options: ['text-[#9197B3]', 'text-white'],
      control: {
        type: 'inline-radio',
      },
    },
    stroke: {
      type: string,
      description: 'color of brackets',
      options: ['stroke-[#9197B3]', 'stroke-white'],
      control: {
        type: 'inline-radio',
      },
    },
    bg: {
      type: string,
      description: 'Background color',
      options: ['bg-[#5932EA]'],
      control: {
        type: 'inline-check',
      },
    },
    hidden: {
      type: string,
      description: 'hidden brackets',
      options: ['hidden'],
      control: {
        type: 'inline-check',
      },
    },
  },
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};
const Template = arg => <LinkHeader {...arg} />;

export const Dashboard = Template.bind({});
Dashboard.args = {
  icon: 'icon-key',
  nav: 'Dashboard',
  stroke: 'stroke-[#9197B3]',
  text: 'text-[#9197B3]',
  hidden: 'hidden',
};

export const ActiveCustomers = Template.bind({});
ActiveCustomers.args = {
  bg: 'bg-[#5932EA]',
  icon: 'icon-user',
  nav: 'Customers',
  stroke: 'stroke-white',
  text: 'text-white',
};

export const Product = Template.bind({});
Product.args = {
  icon: 'icon-d',
  nav: 'Product',
  stroke: 'stroke-[#9197B3]',
  text: 'text-[#9197B3]',
};

export const Income = Template.bind({});
Income.args = {
  icon: 'icon-wallet',
  nav: 'Income',
  stroke: 'stroke-[#9197B3]',
  text: 'text-[#9197B3]',
};

export const Promote = Template.bind({});
Promote.args = {
  icon: 'icon-discount',
  nav: 'Promote',
  stroke: 'stroke-[#9197B3]',
  text: 'text-[#9197B3]',
};

export const Help = Template.bind({});
Help.args = {
  icon: 'icon-message',
  nav: 'Help',
  stroke: 'stroke-[#9197B3]',
  text: 'text-[#9197B3]',
};
