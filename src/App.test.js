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

test("check if button is disabled when checkbox is checked", () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox')
  const isBtnEnabled = screen.getByRole('button')
  const isBtnEnabledTxt = screen.getByText('paragraph')

  userEvent.click(checkbox)
  expect(isBtnEnabled).toBeDisabled()
  expect(isBtnEnabledTxt).toBeInTheDocument('Button is Disabled')

  userEvent.click(checkbox)
  expect(isBtnEnabled).toBeEnabled()
  expect(isBtnEnabledTxt).toBeInTheDocument('Button is Enabled')
}
)

