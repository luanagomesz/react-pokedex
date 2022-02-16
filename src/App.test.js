import { render, screen } from "@testing-library/react";
import App from "./App";

test("render PokéDex logo", () => {
  render(<App />);
  const Logo = screen.getByAltText(/PokéDex/i);
  expect(Logo).toBeInTheDocument();
});
