import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Radio from ".";

describe("Radio", () => {
  test("renders Radio", () => {
    render(<Radio>click me</Radio>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

/**
  test("renders normal Radio", () => {
    const { container } = render(<Radio type="normal">normal Radio</Radio>);
    // eslint-disable-next-line
    expect(container.querySelector(".ant-btn-normal")).toBeInTheDocument();
  });

  test("renders small Radio", () => {
    const { container } = render(<Radio size="small">small Radio</Radio>);
    // eslint-disable-next-line
    expect(container.querySelector(".ant-btn-small")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    render(
      <Radio type="primary" onClick={onClick}>
        support click
      </Radio>
    );
    const linkElement = screen.getByText(/support click/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });

  **/
});
