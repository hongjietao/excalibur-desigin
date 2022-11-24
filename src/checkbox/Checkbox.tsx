import React, { ReactNode, CSSProperties } from "react";
import classnames from "classnames";
import "./index.scss";

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "text" | "link";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  style?: CSSProperties;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    children,
    type = "normal",
    className,
    style,
    size = "medium",
    ...others
  } = props;
  const cls = classnames({
    "ant-checkbox": true,
    [`ant-checkbox-${type}`]: type,
    [`ant-checkbox-${size}`]: size,
    [className as string]: !!className,
  });
  return (
    <div className={cls} style={style} {...others}>
      {children}
    </div>
  );
};

export default Checkbox;
