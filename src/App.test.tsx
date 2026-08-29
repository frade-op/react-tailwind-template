import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState(null, '', '/')
  })

  it('renders the home page by default', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hello tailwind/i })).toBeInTheDocument()
  })

  it('navigates to the contact page when clicking the Contact menu item', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Contact' }))

    expect(screen.getByRole('heading', { name: /contatos/i })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/contato')
  })

  it('navigates back to the home page when clicking the Home menu item', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Contact' }))
    await user.click(screen.getByRole('button', { name: 'Home' }))

    expect(screen.getByRole('heading', { name: /hello tailwind/i })).toBeInTheDocument()
  })
})
