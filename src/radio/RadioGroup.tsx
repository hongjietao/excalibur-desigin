import React, {
  ReactNode,
  useEffect,
  useState,
  useRef,
  CSSProperties,
} from "react";
import classnames from "classnames";
import "./index.scss";
import Radio from "./Radio";

export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;

  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    className,
    style,
    defaultValue,
    onChange,
    disabled,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || props.value);

  const cls = classnames({
    "ant-radio-group": true,
  });

  const handleClick = (e: any) => {
    console.log(e);
    setValue(e.target.value);
  };

  const newChildren = React.Children.map(children, (child: any) => {
    if (child.type !== Radio) return child;

    return React.cloneElement(child, {
      checked: child?.props?.value === value,
      disabled,
      onChange: handleClick,
    });
  });

  return <span className={cls}>{newChildren}</span>;
};

export default RadioGroup;
