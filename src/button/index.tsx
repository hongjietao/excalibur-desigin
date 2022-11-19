import React, { ReactNode } from "react";
import classnames from "classnames";
import "./index.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "text" | "link";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const {
    children,
    type = "normal",
    className,
    style,
    onClick,
    onBlur,
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
    <button
      className={cls}
      style={style}
      onClick={onClick}
      onBlur={onBlur}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
