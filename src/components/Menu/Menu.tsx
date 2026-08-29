export interface MenuItem {
  label: string
  href?: string
  onClick?: () => void
}

interface MenuProps {
  items: MenuItem[]
  className?: string
}

function Menu({ items, className = '' }: MenuProps) {
  return (
    <nav className={className}>
      <ul className="flex gap-4">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                onClick={item.onClick}
                className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
