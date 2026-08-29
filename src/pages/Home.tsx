import { useState } from 'react'
import Menu, { type MenuItem } from '../components/Menu/Menu'
import type { Page } from '../App'

interface HomeProps {
  onNavigate: (page: Page) => void
}

function Home({ onNavigate }: HomeProps) {
  const [count, setCount] = useState(0)

  const menuItems: MenuItem[] = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Contact', onClick: () => onNavigate('contact') },
  ]

  return (
    <>
      <Menu items={menuItems} className="p-4 border-b" />
      <h1 className="text-3xl font-bold underline">Hello Tailwind</h1>
      <div className="flex justify-center w-full">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          type="button"
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(0)}
        >
          Reset Count
        </button>
      </div>
    </>
  )
}

export default Home
