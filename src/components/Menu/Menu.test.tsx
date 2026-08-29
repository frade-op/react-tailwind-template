import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Menu, { type MenuItem } from './Menu'

describe('Menu', () => {
  it('renders a link item as an anchor', () => {
    const items: MenuItem[] = [{ label: 'Home', href: '/' }]
    render(<Menu items={items} />)

    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '/')
  })

  it('renders an item without href as a button', () => {
    const items: MenuItem[] = [{ label: 'Logout' }]
    render(<Menu items={items} />)

    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  it('calls onClick when an item is clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const items: MenuItem[] = [{ label: 'Settings', onClick }]
    render(<Menu items={items} />)

    await user.click(screen.getByRole('button', { name: 'Settings' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders multiple items in order', () => {
    const items: MenuItem[] = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ]
    render(<Menu items={items} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    expect(links.map((link) => link.textContent)).toEqual(['Home', 'About', 'Contact'])
  })

  it('applies the provided className to the nav element', () => {
    const items: MenuItem[] = [{ label: 'Home', href: '/' }]
    const { container } = render(<Menu items={items} className="custom-nav" />)

    expect(container.querySelector('nav')).toHaveClass('custom-nav')
  })

  it('applies cursor-pointer to link and button items', () => {
    const items: MenuItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Logout' },
    ]
    render(<Menu items={items} />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('cursor-pointer')
    expect(screen.getByRole('button', { name: 'Logout' })).toHaveClass('cursor-pointer')
  })
})
