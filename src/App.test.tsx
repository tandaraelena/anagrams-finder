import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Anagrams finder", () => {
  render(<App />);
  const linkElement = screen.getByText(/Anagrams finder/i);
  expect(linkElement).toBeInTheDocument();
});
