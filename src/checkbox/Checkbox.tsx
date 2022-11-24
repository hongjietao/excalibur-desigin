import React, {
  ReactNode,
  CSSProperties,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import classnames from "classnames";
import "./index.scss";
import CheckboxContext from "./context";

export interface CheckboxProps {
  prefixCls?: string;
  /**
   * 默认选中
   */
  defaultChecked?: boolean;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 数值
   */
  value?: string;
  disabled?: boolean;

  /**
   * 回调事件
   */
  onChange?: Function;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export interface CheckboxChangeEventTarget {
  value: string;
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
}

const Checkbox = (props: CheckboxProps) => {
  const { prefixCls = "ant-", onChange, disabled, value, ...others } = props;

  const [checked, setChecked] = useState(props.defaultChecked || false);
  const inputEl = useRef(null);
  const {
    onChange: conChange,
    disabled: cdisabled,
    value: values,
  } = useContext(CheckboxContext);

  useEffect(() => {
    if ("checked" in props) {
      setChecked(props.checked || false);
    }
    // eslint-disable-next-line
  }, [props.checked]);

  useEffect(() => {
    if (values && "value" in props) {
      setChecked(values.indexOf(value!) > -1);
    }

    // eslint-disable-next-line
  }, [values]);

  const handleClick = (e: any) => {
    if (disabled || cdisabled) {
      return;
    }
    const state = !checked;
    if (!("checked" in props)) {
      setChecked(state);
    }

    if (typeof onChange === "function") {
      e.target = inputEl.current;
      onChange(e);
    }

    if (typeof conChange === "function") {
      e.target = inputEl.current;
      conChange(e);
    }
  };

  const handleChange = () => {};

  const cls = classnames({
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox-checked`]: checked,
    [`${prefixCls}checkbox-disabled`]: disabled,
  });

  const wrapperCls = classnames({
    [`${prefixCls}checkbox-wrapper`]: true,
    [`${prefixCls}checkbox-wrapper-disabled`]: disabled,
  });
  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input
          type="checkbox"
          className="ant-checkbox-input"
          // onChange={handleChange}
          ref={inputEl}
          value={value}
          checked={props?.checked}
        />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>{props?.children}</span>
    </span>
  );
};

export default Checkbox;
