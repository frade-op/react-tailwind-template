import Menu, { type MenuItem } from '../components/Menu/Menu'
import type { Page } from '../App'

interface ContactProps {
  onNavigate: (page: Page) => void
}

interface ContactInfo {
  id: number
  name: string
  email: string
  phone: string
}

const contacts: ContactInfo[] = [
  { id: 1, name: 'Ana Souza', email: 'ana.souza@example.com', phone: '(11) 91234-5678' },
  { id: 2, name: 'Bruno Lima', email: 'bruno.lima@example.com', phone: '(21) 99876-5432' },
  { id: 3, name: 'Carla Mendes', email: 'carla.mendes@example.com', phone: '(31) 98765-4321' },
]

function Contact({ onNavigate }: ContactProps) {
  const menuItems: MenuItem[] = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Contact', onClick: () => onNavigate('contact') },
  ]

  return (
    <>
      <Menu items={menuItems} className="p-4 border-b" />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Contatos</h1>
        <ul className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <li key={contact.id} className="border rounded p-3">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-600">{contact.email}</p>
              <p className="text-sm text-gray-600">{contact.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Contact
