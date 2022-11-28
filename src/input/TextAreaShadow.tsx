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

const hiddenStyle: CSSProperties = {
  visibility: "hidden",
  position: "absolute",
  zIndex: "-1000",
  top: "-1000px",
  overflowY: "hidden",
  left: 0,
  right: 0,
};

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
  const fakeRef = useRef(null);

  useEffect(() => {
    if ("value" in props) {
      setValue(props.value || "");
    }
  }, [props]);

  useEffect(() => {
    if (typeof autoSize === "object") {
      const { minRows, maxRows } = autoSize;
      const fakeNode = fakeRef.current as any as HTMLElement;
      fakeNode.setAttribute("rows", `${minRows}`);
      const minHeight = fakeNode.clientHeight;

      fakeNode.setAttribute("rows", `${maxRows}`);
      const maxHeight = fakeNode.clientHeight;

      (textareaRef.current as any as HTMLElement).setAttribute(
        "style",
        `min-height: ${minHeight}px; 
         max-height: ${maxHeight}px;`
      );

      fakeNode.setAttribute("rows", "1");
    }
    // eslint-disable-next-line
  }, []);

  const wrapperCls = classnames({
    "ant-input-textarea": true,
    "ant-input-textarea-show-count": showCount,
  });

  const cls = classnames({
    "ant-input": true,

    [className as string]: !!className,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!("value" in props)) {
      const value = e.target.value;
      setValue(value);

      if (autoSize) {
        const fakeNode = fakeRef.current as any as HTMLTextAreaElement;
        fakeNode.value = value;
        const height = fakeNode.scrollHeight;
        setHeight(height);
      }
    }
    onChange?.(e);
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

  if (props.showCount) {
    return (
      <span
        className={wrapperCls}
        data-count={`${value.length} / ${props.maxLength || value.length}`}
      >
        {textarea}
      </span>
    );
  }

  return (
    <>
      {textarea}
      {autoSize ? (
        <textarea ref={fakeRef} data-fade style={hiddenStyle} className={cls} />
      ) : null}
    </>
  );
};

export default TextArea;
