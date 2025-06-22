import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking form heading", () => {
  render(<App />);
  const heading = screen.getByText(/Book a Table at Little Lemon/i);
  expect(heading).toBeInTheDocument();
});