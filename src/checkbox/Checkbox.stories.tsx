import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Checkbox",
};

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
  children: "checked Checkbox",
};

export const Disabled = () => {
  return (
    <>
      <Checkbox defaultChecked={false} disabled>
        disabled
      </Checkbox>
      <br />
      <Checkbox defaultChecked disabled>
        disabled
      </Checkbox>
    </>
  );
};
