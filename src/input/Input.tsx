import React, { ReactNode, CSSProperties, useState, useEffect } from "react";
import classnames from "classnames";
import "./index.scss";

export interface InputProps {
  className?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  prefix?: ReactNode;
  status?: "error" | "warning";
  maxLength?: number;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  style?: CSSProperties;
}

const Input = (props: InputProps) => {
  const {
    children,
    className,
    style,
    onChange,
    defaultValue,
    value: pvalue,
    size = "medium",
    prefix,
    status,
    placeholder = "please input here",
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || "");

  useEffect(() => {
    if ("value" in props) {
      setValue(props.value || "");
    }
  }, [props]);

  const wrapperCls = classnames({
    "ant-input-affix-wrapper": true,
    "ant-input-affix-wrapper-lg": size === "large",
    "ant-input-affix-wrapper-sm": size === "small",
  });

  const cls = classnames({
    "ant-input": true,
    [`ant-input-lg`]: size === "large",
    [`ant-input-sm`]: size === "small",
    [`ant-input-status-${status}`]: status,
    [className as string]: !!className,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!("value" in props)) {
      setValue(e.target.value);
    }
    console.log(e.target.value);
    onChange?.(e);
  };

  const input = (
    <input
      type="text"
      value={value}
      className={cls}
      onChange={handleChange}
      placeholder={placeholder}
      {...others}
    />
  );

  if (props.maxLength || prefix) {
    return (
      <span className={wrapperCls}>
        {prefix ? <span className="ant-input-prefix">{prefix}</span> : null}
        {input}
        {props.maxLength ? (
          <span className="ant-input-suffix">
            <span className="ant-input-show-count-suffix">
              {value.length} / {props.maxLength}
            </span>
          </span>
        ) : null}
      </span>
    );
  }

  return input;
};

export default Input;
