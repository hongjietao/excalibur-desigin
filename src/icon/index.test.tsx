import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Icon from "./index";

test("renders icon", () => {
  const { container } = render(<Icon type="fixed" />);
  // eslint-disable-next-line
  expect(container.querySelector("svg")).toBeInTheDocument();
});

test("renders classname", () => {
  const { container } = render(<Icon type="fixed" className="custom" />);
  // eslint-disable-next-line
  expect(container.querySelector(".custom")).toBeInTheDocument();
});

test("should support click", () => {
  const onClick = jest.fn();
  const { container } = render(
    <Icon type="fixed" className="custom" onClick={onClick} />
  );
  // eslint-disable-next-line
  const linkElement = container.querySelector("svg") as SVGSVGElement;
  fireEvent.click(linkElement);

  expect(onClick).toBeCalled();
});
