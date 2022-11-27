import React, {
  ReactNode,
  useRef,
  CSSProperties,
  useState,
  useEffect,
} from "react";
import classnames from "classnames";
import "./index.scss";

type AutoSizeType = {
  minRows: number;
  maxRows: number;
};

export interface TextAreaProps {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  prefix?: ReactNode;
  maxLength?: number;
  showCount?: boolean;
  autoSize?: boolean | AutoSizeType;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const TextArea = (props: TextAreaProps) => {
  const {
    children,
    className,
    showCount,
    autoSize = false,
    onChange,
    defaultValue,
    value: pvalue,
    prefix,
    placeholder = "please input here",
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || "");
  const [height, setHeight] = useState(0);
  const textareaRef = useRef(null);

  useEffect(() => {
    if ("value" in props) {
      setValue(props.value || "");
    }
  }, [props]);

  useEffect(() => {
    if (typeof autoSize === "object") {
      const { minRows, maxRows } = autoSize;
      const styles = window.getComputedStyle(textareaRef.current!);

      const minHeight = minRows * parseFloat(styles.lineHeight);
      const maxHeight = maxRows * parseFloat(styles.lineHeight);

      (textareaRef.current as any as HTMLElement).setAttribute(
        "style",
        `min-height: ${minHeight}px; 
         max-height: ${maxHeight}px;`
      );
    }
  }, []);

  const wrapperCls = classnames({
    "ant-input-affix-wrapper": true,
  });

  const cls = classnames({
    "ant-input": true,

    [className as string]: !!className,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!("value" in props)) {
      const value = e.target.value;
      setValue(value);

      autoSize && setHeight(getComputedHeight(value));
    }
    onChange?.(e);
  };

  const getComputedHeight = (value: string) => {
    const line = value.split("\n").length < 2 ? 2 : value.split("\n").length;

    const styles = window.getComputedStyle(textareaRef.current!);
    const styleHeight =
      parseFloat(styles.paddingTop) +
      parseFloat(styles.paddingBottom) +
      parseFloat(styles.borderTopWidth) +
      parseFloat(styles.borderBottomWidth);

    const contentHeight = line * parseFloat(styles.lineHeight);
    const totalHeight = styleHeight + contentHeight;

    return totalHeight;
  };

  const style: CSSProperties = { ...props.style };
  if (height) {
    style.height = height;
  }

  const textarea = (
    <textarea
      value={value}
      className={cls}
      onChange={handleChange}
      placeholder={placeholder}
      ref={textareaRef}
      style={style}
      {...others}
    />
  );

  if (props.maxLength || prefix) {
    return (
      <span className={wrapperCls}>
        {prefix ? <span className="ant-input-prefix">{prefix}</span> : null}
        {textarea}
        {props.maxLength ? (
          <span className="ant-input-suffix">
            <span className="ant-input-show-count-suffix">
              {value.length} / {props.maxLength}
            </span>
          </span>
        ) : null}
      </span>
    );
  }

  return textarea;
};

export default TextArea;
