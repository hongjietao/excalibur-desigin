import React, { ReactNode, CSSProperties } from "react";
import classnames from "classnames";
import "./index.scss";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "text" | "link";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  style?: CSSProperties;
}

const Input = (props: InputProps) => {
  const {
    children,
    type = "normal",
    className,
    style,
    size = "medium",
    ...others
  } = props;
  const cls = classnames({
    "ant-input": true,
    [`ant-input-${type}`]: type,
    [`ant-input-${size}`]: size,
    [className as string]: !!className,
  });
  return (
    <input type="text" className={cls} placeholder="please type here..." />
  );
};

export default Input;
