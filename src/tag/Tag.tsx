import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./index.scss";
import Icon from "../icon";
import { CloseOutlined } from "@ant-design/icons";

interface TagProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  visiable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
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

  const [visiable, setVisiable] = useState<boolean>(true);

  useEffect(() => {
    if ("visiable" in props && typeof props.visiable !== "undefined") {
      setVisiable(props.visiable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visiable]);

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

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose && onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    // 受控组件
    if (!("visiable" in props)) {
      setVisiable(false);
    }
  };

  if (!visiable) {
    return null;
  }

  return (
    <span className={cls} style={style} {...others}>
      {children}
      {closable ? <CloseOutlined onClick={handleClick} /> : null}
    </span>
  );
};

export default Tag;
