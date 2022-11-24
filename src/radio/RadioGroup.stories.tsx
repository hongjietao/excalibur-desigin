import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./Radio";
import RadioGroup from "./RadioGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Radio",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: [
    <Radio value="1" key="1">
      选项1
    </Radio>,
    <Radio value="2" key="2">
      选项2
    </Radio>,
    <Radio value="3" key="3">
      选项3
    </Radio>,
    <Radio value="4" key="4">
      选项4
    </Radio>,
  ],
};

export const UnderControlGroup = () => {
  return (
    <>
      <RadioGroup value="3">
        <Radio value="1" key="1">
          选项1
        </Radio>
        <Radio value="2" key="2">
          选项2
        </Radio>
        <Radio value="3" key="3">
          选项3
        </Radio>
        <Radio value="4" key="4">
          选项4
        </Radio>
      </RadioGroup>
    </>
  );
};

// export const UnChecked = () => {
//   return (
//     <>
//       <RadioGroup>UnChecked RadioGroup</RadioGroup>
//     </>
//   );
// };

// export const Disabled = () => {
//   return (
//     <>
//       <RadioGroup disabled>disabled RadioGroup</RadioGroup>
//     </>
//   );
// };
