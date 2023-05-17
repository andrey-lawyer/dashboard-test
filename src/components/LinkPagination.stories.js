import { string } from 'prop-types';
import { LinkPagination } from './LinkPagination.jsx';
import './../index.css';

export default {
  title: 'Link/LinkPagination',
  component: LinkPagination,
  tags: ['autodocs'],
  argTypes: {
    w: {
      type: string,
      description: 'with',
      options: ['w-[24px]', 'w-[25px]', 'w-[26px]'],
      control: {
        type: 'inline-radio',
      },
    },
    symbol: {
      type: string,
      description: 'symbol or number',
      options: ['<', '>', '1', '2', '3', '4', '40'],
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
    text: {
      type: string,
      description: 'color of text',
      options: ['text-white'],
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
const Template = arg => <LinkPagination {...arg} />;

export const BracketLeft = Template.bind({});
BracketLeft.args = {
  w: 'w-[26px]',
  symbol: '<',
};

export const One = Template.bind({});
One.args = {
  w: 'w-[25px]',
  symbol: '1',
  bg: 'bg-[#5932EA]',
  text: 'text-white',
};
export const Two = Template.bind({});
Two.args = {
  w: 'w-[25px]',
  symbol: '2',
};
export const Three = Template.bind({});
Three.args = {
  w: 'w-[24px]',
  symbol: '3',
};
export const Four = Template.bind({});
Four.args = {
  w: 'w-[26px]',
  symbol: '4',
};

export const Forty = Template.bind({});
Forty.args = {
  w: 'w-[25px]',
  symbol: '40',
};
export const BracketRight = Template.bind({});
BracketRight.args = {
  w: 'w-[26px]',
  symbol: '>',
};
