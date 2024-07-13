import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Group multiple test cases into single log

describe('Contact Us Page Test Case', () => {
  
test("Should load contact us component", () => {
  // This will be rendered on the jsdom
  render(<Contact/>);
  // Find elements on screen
  const heading = screen.getByRole('heading');

  // Assertion
  expect(heading).toBeInTheDocument();
});



test("Should load button inside contact us component", () => {
  // This will be rendered on the jsdom
  render(<Contact/>);
  // Find elements on screen
  const button = screen.getByText('Submit');

  // Assertion
  expect(button).toBeInTheDocument();
});



test("Should load input name inside contact us component", () => {
  // This will be rendered on the jsdom
  render(<Contact/>);
  // Find elements on screen
  const inputName = screen.getByPlaceholderText('name');

  // Assertion
  expect(inputName).toBeInTheDocument();
});



test("Should load 2 input boxes inside contact us component", () => {
  // This will be rendered on the jsdom
  render(<Contact/>);
  // Find elements on screen
  const inputBoxes = screen.getAllByRole('textbox');

  // Assertion
  expect(inputBoxes.length).not.toBe(3)
  // console.log(inputBoxes[0]);
});

});
