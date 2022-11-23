import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Radio from ".";

describe("Radio", () => {
  test("renders Radio", () => {
    render(<Radio>click me</Radio>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  // test("renders normal Radio", () => {
  //   const { container } = render(<Radio type="normal">normal Radio</Radio>);
  //   // eslint-disable-next-line
  //   expect(container.querySelector(".ant-btn-normal")).toBeInTheDocument();
  // });

  test("should support disabled", () => {
    const onChange = jest.fn();
    render(
      <Radio disabled onChange={onChange}>
        support click
      </Radio>
    );
    const linkElement = screen.getByText(/support click/i);
    fireEvent.click(linkElement);

    expect(onChange).toBeCalledTimes(0);
  });

  test("should support under control", () => {
    const onChange = jest.fn();
    render(
      <Radio checked onChange={onChange}>
        support click
      </Radio>
    );
    const linkElement = screen.getByText(/support click/i);
    fireEvent.click(linkElement);

    expect(onChange).toBeCalledTimes(0);
  });

  test("should support onChange", () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange}>support click</Radio>);
    const linkElement = screen.getByText(/support click/i);
    fireEvent.click(linkElement);

    expect(onChange).toBeCalled();
  });
});
