import {
  forwardRef,
  InputHTMLAttributes,
  CSSProperties,
  ChangeEvent,
} from "react";

import * as Styled from "./InputField.style";

export type InputField = InputHTMLAttributes<HTMLInputElement> & {
  cx?: CSSProperties;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = forwardRef<HTMLInputElement, InputField>(
  ({ type = "text", cx, onChange, ...props }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    return (
      <Styled.InputField
        ref={ref}
        type={type}
        style={cx}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

export default InputField;
