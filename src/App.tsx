import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'

export type Page = 'home' | 'contact'

const pathByPage: Record<Page, string> = {
  home: '/',
  contact: '/contato',
}

function getPageFromPath(pathname: string): Page {
  return pathname === pathByPage.contact ? 'contact' : 'home'
}

function App() {
  const [page, setPage] = useState<Page>(() => getPageFromPath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextPage: Page) => {
    if (window.location.pathname !== pathByPage[nextPage]) {
      window.history.pushState(null, '', pathByPage[nextPage])
    }
    setPage(nextPage)
  }

  if (page === 'contact') {
    return <Contact onNavigate={navigate} />
  }

  return <Home onNavigate={navigate} />
}

export default App
