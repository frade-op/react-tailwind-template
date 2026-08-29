import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Home from './Home'

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home onNavigate={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /hello tailwind/i })).toBeInTheDocument()
  })

  it('increments the count when clicking the button', async () => {
    const user = userEvent.setup()
    render(<Home onNavigate={vi.fn()} />)

    const countButton = screen.getByRole('button', { name: /count is 0/i })
    await user.click(countButton)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('resets the count when clicking the reset button', async () => {
    const user = userEvent.setup()
    render(<Home onNavigate={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: /count is 0/i }))
    await user.click(screen.getByRole('button', { name: /reset count/i }))

    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })

  it('calls onNavigate with "contact" when clicking the Contact menu item', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<Home onNavigate={onNavigate} />)

    await user.click(screen.getByRole('button', { name: 'Contact' }))

    expect(onNavigate).toHaveBeenCalledWith('contact')
  })
})
