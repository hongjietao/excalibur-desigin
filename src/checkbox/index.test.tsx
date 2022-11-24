import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from ".";

describe("Checkbox", () => {
  test("renders Checkbox", () => {
    render(<Checkbox>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

/**
  test("renders normal Checkbox", () => {
    const { container } = render(<Checkbox type="normal">normal Checkbox</Checkbox>);
    // eslint-disable-next-line
    expect(container.querySelector(".ant-btn-normal")).toBeInTheDocument();
  });

  test("renders small Checkbox", () => {
    const { container } = render(<Checkbox size="small">small Checkbox</Checkbox>);
    // eslint-disable-next-line
    expect(container.querySelector(".ant-btn-small")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    render(
      <Checkbox type="primary" onClick={onClick}>
        support click
      </Checkbox>
    );
    const linkElement = screen.getByText(/support click/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });

  **/
});
