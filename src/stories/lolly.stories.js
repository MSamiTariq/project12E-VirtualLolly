import React from 'react';

import Lolly from '../components/lolly';

export default {
  title: 'Example/Lolly',
  component: Lolly,
};

const Template = (args) => <Lolly {...args} />;

export const changeHeadings = Template.bind({})
changeHeadings.args = {
  fillLollyTop: "blue",
  fillLollyBottom: "green",
  fillLollyMiddle: "red"
}