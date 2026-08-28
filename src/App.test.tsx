import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hello tailwind/i })).toBeInTheDocument()
  })

  it('increments the count when clicking the button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const countButton = screen.getByRole('button', { name: /count is 0/i })
    await user.click(countButton)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('resets the count when clicking the reset button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /count is 0/i }))
    await user.click(screen.getByRole('button', { name: /reset count/i }))

    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })
})
