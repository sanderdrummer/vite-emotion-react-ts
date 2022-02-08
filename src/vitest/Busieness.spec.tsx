import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BusinessComponent, MockMeComponent } from "./BusinessComponent";

describe("BusinessComponent", () => {
  it("toggles yeah vite", () => {
    render(<BusinessComponent />);
    const button = screen.getByRole("button", { name: "click me" });
    expect(screen.queryByText("yeah vite")).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText("yeah vite")).toBeInTheDocument();
  });

  it("maches snapshot", () => {
    const { container } = render(<BusinessComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("MockMeComponent", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("calls handler", () => {
    const mock = vi.fn();
    render(<MockMeComponent handleClick={mock} />);
    expect(mock).toHaveBeenCalledTimes(0);
    const button = screen.getByRole("button", { name: "click me" });
    fireEvent.click(button);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
