import React, { ReactNode, CSSProperties } from "react";
import classnames from "classnames";
import "./index.scss";

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "text" | "link";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  style?: CSSProperties;
}

const Radio = (props: RadioProps) => {
  const {
    children,
    type = "normal",
    className,
    style,
    size = "medium",
    ...others
  } = props;
  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: size,
    [className as string]: !!className,
  });
  return (
    <input className={cls} style={style} {...others} type="radio">
      {children}
    </input>
  );
};

export default Radio;
