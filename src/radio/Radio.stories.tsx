import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  children: "Radio",
};

const style = {
  margin: 8,
};
export const Basic = () => {
  return (
    <>
      <Radio style={style} type="primary">
        Primary Radio
      </Radio>
    </>
  );
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Radio",
};
