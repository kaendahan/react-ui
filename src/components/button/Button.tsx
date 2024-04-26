import React from "react";
import { classNames } from "@kaendahan/react-utils";

export interface ButtonProps extends React.ComponentProps<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button className={classNames(className)} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
