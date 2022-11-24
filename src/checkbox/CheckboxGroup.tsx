import React, { ReactNode, useState, CSSProperties, useEffect } from "react";
import classnames from "classnames";
import "./index.scss";
import { CheckboxChangeEvent } from "./Checkbox";
import CheckboxContext from "./context";

export interface CheckboxGroupProps {
  value?: Array<string>;
  defaultValue?: Array<string>;
  onChange?: Function;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    defaultValue,
    disabled = false,
    onChange,
    children,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || props.value || []);

  useEffect(() => {
    if ("value" in props) {
      setValue(props.value!);
    }
    // eslint-disable-next-line
  }, [props.value]);

  const cls = classnames({
    "ant-checkbox-group": true,
  });

  const handleChange = (e: CheckboxChangeEvent) => {
    const targetValue = e.target.value;
    const idx = value.indexOf(targetValue);
    const checked = e.target.checked;
    let nvalue = value;
    console.log("targetValue:", targetValue);
    console.log("idx:", idx);
    console.log("checked:", checked);
    if (~idx && !checked) {
      console.log("value.concat([targetValue]):", value);
      setValue(value.concat([targetValue]));
    } else if (idx > -1 && checked) {
      value.splice(idx, 1);
      console.log("value.splice(idx, 1)", value);

      setValue(value.concat([]));
    }
    console.log("nvalue: " + nvalue);
    onChange?.(value);
  };

  return (
    <span className={cls}>
      <CheckboxContext.Provider
        value={{ onChange: handleChange, disabled, value }}
      >
        {children}
      </CheckboxContext.Provider>
    </span>
  );
};

export default CheckboxGroup;
