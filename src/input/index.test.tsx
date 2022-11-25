import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  test("renders Input", () => {
    render(<Input>click me</Input>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

/**
  test("renders normal Input", () => {
    const { container } = render(<Input type="normal">normal Input</Input>);
    // eslint-disable-next-line
    expect(container.querySelector(".ant-btn-normal")).toBeInTheDocument();
  });

  test("renders small Input", () => {
    const { container } = render(<Input size="small">small Input</Input>);
    // eslint-disable-next-line
    expect(container.querySelector(".ant-btn-small")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    render(
      <Input type="primary" onClick={onClick}>
        support click
      </Input>
    );
    const linkElement = screen.getByText(/support click/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });

  **/
});
