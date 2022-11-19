import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

test("renders button", () => {
  render(<Button>click me</Button>);
  const linkElement = screen.getByText(/click me/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders normal button", () => {
  const { container } = render(<Button type="normal">normal button</Button>);
  // eslint-disable-next-line
  expect(container.querySelector(".ant-btn-normal")).toBeInTheDocument();
});

test("renders primary button", () => {
  const { container } = render(<Button type="primary">primary button</Button>);
  // eslint-disable-next-line
  expect(container.querySelector(".ant-btn-primary")).toBeInTheDocument();
});

test("should support click", () => {
  const onClick = jest.fn();
  render(
    <Button type="primary" onClick={onClick}>
      support click
    </Button>
  );
  const linkElement = screen.getByText(/support click/i);
  fireEvent.click(linkElement);

  expect(onClick).toBeCalled();
});

test("should support blur", () => {
  const onBlur = jest.fn();
  render(
    <Button type="primary" onBlur={onBlur}>
      click me
    </Button>
  );
  const linkElement = screen.getByText(/click me/i);
  fireEvent.click(linkElement);
  fireEvent.blur(linkElement);

  expect(onBlur).toBeCalled();
});

test("should support focus", () => {
  const onFocus = jest.fn();
  render(
    <Button type="primary" onFocus={onFocus}>
      click me
    </Button>
  );
  const linkElement = screen.getByText(/click me/i);
  fireEvent.click(linkElement);
  fireEvent.blur(linkElement);

  expect(onFocus).toBeCalled();
});
