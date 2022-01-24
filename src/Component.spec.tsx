import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { SomeComponent } from "./Component";

const theme = {
  colors: {
    primary: "hotpink",
  },
};

describe("Component", () => {
  test("toggles the surprise", () => {
    render(
      <ThemeProvider theme={theme}>
        <SomeComponent />
      </ThemeProvider>
    );

    // @ts-expect-error
    expect(screen.getByText("such emotion")).toBeInTheDocument();
  });
});
