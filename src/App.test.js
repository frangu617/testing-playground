import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test("header renders with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole('heading')
  expect(headerEl.textContent).toBe('Testing Playground')
})

describe("test for the button,", () => {
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole('button')

    userEvent.click(colorBtn)

    expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' })
    expect(colorBtn.textContent).toBe('Change to green')
  })
})

test("checkbox working", () => {
  render(<App />)
  const colorBtn = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox')

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
})

//this is from chatGPT, and here is the explanation:
// We render the App component.
// We find the checkbox by its role and simulate a user click to toggle the button's disabled state.
// We then assert whether the correct text appears in the paragraph element based on the button's state
describe("Paragraph text changes based on button state", () => {
  test("displays 'Button is Disabled' when the button is disabled", () => {
    render(<App />); //render app
    const checkbox = screen.getByRole('checkbox');//find checkbox
    userEvent.click(checkbox); // Disable the button simulating user click

    const paragraphText = screen.getByText('Button is Disabled'); //variable with string that says 'Button is Disabled'
    expect(paragraphText).toBeInTheDocument(); //find the string from the variable
  });

  test("displays 'Button is Enabled' when the button is enabled", () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox); // Disable the button
    userEvent.click(checkbox); // Enable the button again

    const paragraphText = screen.getByText('Button is Enabled');
    expect(paragraphText).toBeInTheDocument();
  });
});