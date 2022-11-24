import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Checkbox",
};
 
export const Basic = () => {
  return (
    <>
      <Checkbox   type="primary">
        Primary Checkbox
      </Checkbox>
    </>
  );
};

 