import React, { ReactNode } from "react";
import classnames from "classnames";
import "./index.css";

type Props = {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "text" | "link";
  children: ReactNode;
  style?: React.CSSProperties;
};

const Button = (props: Props) => {
  const { children, type = "normal", className, style } = props;
  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  });
  return (
    <button className={cls} style={style}>
      {children}
    </button>
  );
};

export default Button;
