import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserOutlined } from "@ant-design/icons";
import Input from "./Input";
import TextArea from "./TextArea";
import TextAreaShadow from "./TextAreaShadow";

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

export const Status = () => {
  return (
    <>
      <Input maxLength={123} status="error" />
      <br />
      <br />
      <Input maxLength={123} status="warning" />
    </>
  );
};

export const BasicTextArea = () => {
  return (
    <>
      <TextArea placeholder="Basic textarea" />
      <div style={{ margin: "24px 0" }} />
      <TextArea
        placeholder="Basic textarea with showCount"
        showCount
        maxLength={100}
      />
      <div style={{ margin: "24px 0" }} />

      <TextArea
        placeholder="Basic textarea with default value"
        defaultValue="1\n2\n3\n"
      />
      <div style={{ margin: "24px 0" }} />

      <TextArea placeholder="Autosize height based on content lines" autoSize />
      <div style={{ margin: "24px 0" }} />

      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 5, maxRows: 10 }}
      />
      <div style={{ margin: "24px 0" }} />

      <TextArea placeholder="Controlled autoaize" autoSize />
    </>
  );
};

export const AutoSizeTextAreaShadow = () => {
  return (
    <>
      <TextAreaShadow placeholder="Basic TextAreaShadow" />
      <div style={{ margin: "24px 0" }} />

      <TextAreaShadow
        placeholder="Basic TextAreaShadow with showCount"
        showCount
        maxLength={100}
      />
      <div style={{ margin: "24px 0" }} />

      <TextAreaShadow
        placeholder="Basic TextAreaShadow with default value"
        defaultValue="1\n2\n3\n"
      />
      <div style={{ margin: "24px 0" }} />

      <TextAreaShadow
        placeholder="Autosize height based on content lines"
        autoSize
      />
      <div style={{ margin: "24px 0" }} />

      <TextAreaShadow
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 5, maxRows: 10 }}
      />
      <div style={{ margin: "24px 0" }} />

      <TextAreaShadow placeholder="Controlled autoaize" autoSize />
    </>
  );
};
