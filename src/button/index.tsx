import React, { ReactNode } from "react";
import classnames from "classnames";
import "./index.css";

type Props = {
  className?: string;
  type?: "normal" | "primary";
  children: ReactNode;
};

const Button = (props: Props) => {
  const { children, type = "normal", className } = props;
  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  });
  return <button className={cls}>{children}</button>;
};

export default Button;
