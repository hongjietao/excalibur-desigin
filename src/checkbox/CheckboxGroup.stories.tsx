import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const Group = Template.bind({});
Group.args = {
  children: [
    <Checkbox value="1" key="1">
      选项1
    </Checkbox>,
    <Checkbox value="2" key="2">
      选项2
    </Checkbox>,
    <Checkbox value="3" key="3">
      选项3
    </Checkbox>,
    <Checkbox value="4" key="4">
      选项4
    </Checkbox>,
  ],
};

export const GroupDefalutValue = Template.bind({});
GroupDefalutValue.args = {
  defaultValue: ["2", "4"],
  children: [
    <Checkbox value="1" key="1">
      选项1
    </Checkbox>,
    <Checkbox value="2" key="2">
      选项2
    </Checkbox>,
    <Checkbox value="3" key="3">
      选项3
    </Checkbox>,
    <Checkbox value="4" key="4">
      选项4
    </Checkbox>,
  ],
};

export const ContextDemo = () => (
  <CheckboxGroup>
    <span>
      <Checkbox value="1" key="1">
        选项1
      </Checkbox>
    </span>

    <span>
      <Checkbox value="2" key="2">
        选项2
      </Checkbox>
    </span>

    <Checkbox value="3" key="3">
      选项3
    </Checkbox>

    <Checkbox value="4" key="4">
      选项4
    </Checkbox>
  </CheckboxGroup>
);
