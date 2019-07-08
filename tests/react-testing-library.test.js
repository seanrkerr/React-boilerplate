import React from "react";
import "babel-polyfill";
import App from "../src/app";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

test("renders a message", () => {
  const { container, getByText } = render(<App />);

  expect(getByText("Hi From the boilerplate")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Hi From the boilerplate
    </h1>
  `);
});
