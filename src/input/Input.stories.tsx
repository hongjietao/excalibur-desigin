import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserOutlined } from "@ant-design/icons";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Input",
};

export const Basic = () => {
  return <Input placeholder="basic usage" defaultValue="abce" />;
};

export const Size = () => {
  return (
    <>
      <Input size="small" />
      <Input size="medium" />
      <Input size="large" />
    </>
  );
};

export const Control = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        size="small"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          setValue("set by button");
        }}
      >
        set value
      </button>
    </>
  );
};

export const maxLength = () => {
  return <Input placeholder="basic usage" defaultValue="abce" maxLength={20} />;
};

export const Prefix = () => {
  return <Input prefix={<UserOutlined />} maxLength={123} />;
};
