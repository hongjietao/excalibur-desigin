import { createContext } from "react";

export interface CheckboxContextProps {
  value: string[];
  onChange: Function;
  disabled: boolean;
}

const CheckboxContext = createContext<CheckboxContextProps>({
  value: [],
  onChange: () => {},
  disabled: false,
});

export default CheckboxContext;
