import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tag from "./index";

test("renders icon", () => {
  const { container } = render(<Tag />);
  // eslint-disable-next-line
  expect(container.querySelector("svg")).toBeInTheDocument();
});

test("renders classname", () => {
  const { container } = render(<Tag className="custom" />);
  // eslint-disable-next-line
  expect(container.querySelector(".custom")).toBeInTheDocument();
});

test("should support click", () => {
  const onClick = jest.fn();
  const { container } = render(<Tag className="custom" onClick={onClick} />);
  // eslint-disable-next-line
  const linkElement = container.querySelector("svg") as SVGSVGElement;
  fireEvent.click(linkElement);

  expect(onClick).toBeCalled();
});
