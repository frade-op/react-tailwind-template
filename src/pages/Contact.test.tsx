import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact onNavigate={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /contatos/i })).toBeInTheDocument()
  })

  it('renders the fake contact list', () => {
    render(<Contact onNavigate={vi.fn()} />)

    expect(screen.getByText('Ana Souza')).toBeInTheDocument()
    expect(screen.getByText('ana.souza@example.com')).toBeInTheDocument()
    expect(screen.getByText('Bruno Lima')).toBeInTheDocument()
    expect(screen.getByText('Carla Mendes')).toBeInTheDocument()
  })

  it('calls onNavigate with "home" when clicking the Home menu item', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<Contact onNavigate={onNavigate} />)

    await user.click(screen.getByRole('button', { name: 'Home' }))

    expect(onNavigate).toHaveBeenCalledWith('home')
  })
})
