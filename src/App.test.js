import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
test("renders counter", () => {
  render(<App />);
  const counter = screen.getByTestId("counter");
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent(0);
});
test("renders increse counter", () => {
  render(<App />);
  const increase = screen.getByTestId("increase");
  const counter = screen.getByTestId("counter");
  fireEvent.click(increase);
  expect(counter).toHaveTextContent(1);
});
