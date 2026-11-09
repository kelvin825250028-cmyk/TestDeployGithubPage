import { useEffect } from 'react'
import Beranda from './component/beranda.jsx'
import KontakPesan from './component/kontak_pesan.jsx'
import Menu from './component/menu.jsx'
import Tentang from './component/tentang.jsx'
import Admin from './component/admin.jsx'
import { SiteLayout } from './component/index.jsx'

const pages = {
  beranda: { title: 'Beranda', component: Beranda },
  menu: { title: 'Daftar Menu', component: Menu },
  tentang: { title: 'Tentang Kami', component: Tentang },
  kontak: { title: 'Kontak & Pesanan', component: KontakPesan },
}

function App() {
  const requestedPage = new URLSearchParams(window.location.search).get('page')
  const page = pages[requestedPage] ? requestedPage : 'beranda'
  const isAdmin = requestedPage === 'admin'
  const title = isAdmin ? 'Dashboard Admin' : pages[page].title
  const Page = pages[page].component

  useEffect(() => {
    document.title = `${title} | Ayam Pak Gondesss`
  }, [title])

  if (isAdmin) {
    return <Admin />
  }

  return (
    <SiteLayout activePage={page}>
      <Page />
    </SiteLayout>
  )
}

export default App
