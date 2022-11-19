import React, { useState } from "react";
import classnames from "classnames";
import "./index.scss";
import Icon from "../icon";

interface TagProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  visiable?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tag = (props: TagProps) => {
  const {
    className,
    color,
    onClose,
    closable,
    visiable: pvisiable,
    children,
    ...others
  } = props;

  const [visiable, setVisiable] = useState<boolean>(pvisiable || true);

  const customColor = color && color.match(/^#/);
  const cls = classnames({
    "ant-tag": true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  });

  const style: React.CSSProperties = { ...props.style };
  if (customColor) {
    style.backgroundColor = color;
  }

  const handleClose = () => {
    setVisiable(false);
    // onClose && onClose(e);
  };

  if (!visiable) {
    return null;
  }

  return (
    <span className={cls} style={style} {...others}>
      {children}
      {closable ? <Icon onClick={handleClose} type="close" size={14} /> : null}
    </span>
  );
};

export default Tag;
