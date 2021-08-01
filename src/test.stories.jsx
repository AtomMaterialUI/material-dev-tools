import React from 'react';

const colors = require('./colors');

export const ColorInfo = ({ color }) => {
  return (
    <div>
      <h4>{color} - {colors[color]}</h4>
      <div
        style={{
          backgroundColor: colors[color],
          height: 150,
          width: 200
        }}
      >&nbsp;</div>

    </div>
  );
};
ColorInfo.args = {
  color: colors.activeBlue
};

export default {
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.keys(colors)
    }
  },
  component: ColorInfo,
  title: 'Theme/Colors'
};
