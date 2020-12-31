import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const changeHeadings = Template.bind({})
changeHeadings.args = {
  h1: "This is the main title",
  text: "This is the secondary heading...",
}


