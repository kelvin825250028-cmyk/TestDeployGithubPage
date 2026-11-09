import { useEffect, useMemo, useState } from 'react'
import { pageUrl } from './index.jsx'

const sampleOrders = [
  { id: 'PG-1024', customer: 'Nadia Putri', item: 'Ayam Geprek Sambal Gondes', total: 'Rp 30.000', status: 'Diproses' },
  { id: 'PG-1023', customer: 'Rizky Pratama', item: 'Nasi Ayam Sambal Matah', total: 'Rp 34.000', status: 'Selesai' },
  { id: 'PG-1022', customer: 'Dewi Anggraini', item: 'Indomie Ayam Geprek', total: 'Rp 25.000', status: 'Menunggu' },
  { id: 'PG-1021', customer: 'Fajar Maulana', item: 'Es Teh Manis Jumbo', total: 'Rp 6.000', status: 'Selesai' },
  { id: 'PG-1020', customer: 'Siti Rahma', item: 'Ayam Geprek Mozarella', total: 'Rp 38.000', status: 'Diproses' },
]

function Admin() {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const stylesheet = document.createElement('link')
    stylesheet.rel = 'stylesheet'
    stylesheet.href = 'https://cdn.jsdelivr.net/npm/admin-lte@4.0.0/dist/css/adminlte.min.css'
    stylesheet.dataset.adminlte = 'true'
    document.head.append(stylesheet)

    return () => stylesheet.remove()
  }, [])

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('id')
    if (!query) return sampleOrders

    return sampleOrders.filter((order) =>
      [order.id, order.customer, order.item, order.total, order.status]
        .some((value) => value.toLocaleLowerCase('id').includes(query)),
    )
  }, [search])

  return (
    <div className="admin-page app-wrapper">
      <aside className="app-sidebar bg-dark text-white">
        <a className="brand-link text-white text-decoration-none" href={pageUrl('admin')}>
          <span className="brand-text fw-light">Pak Gondesss</span>
        </a>
        <div className="sidebar-wrapper">
          <nav className="mt-3" aria-label="Navigasi admin">
            <ul className="nav sidebar-menu flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#dashboard">
                  <i className="bi bi-speedometer2 me-2" aria-hidden="true" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pesanan">
                  <i className="bi bi-receipt me-2" aria-hidden="true" />
                  <p>Pesanan</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pengunjung">
                  <i className="bi bi-people me-2" aria-hidden="true" />
                  <p>Pengunjung</p>
                </a>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" href={pageUrl('beranda')}>
                  <i className="bi bi-box-arrow-up-right me-2" aria-hidden="true" />
                  <p>Situs Pengunjung</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="app-main" id="dashboard">
        <nav className="app-header navbar navbar-expand bg-body" aria-label="Header admin">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Dashboard Admin</span>
            <span className="badge text-bg-secondary">Tampilan demo</span>
          </div>
        </nav>
        <section className="app-content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <h1 className="mb-1">Ringkasan</h1>
                <p className="text-secondary mb-0">
                  Data pada halaman ini hanya contoh dan belum terhubung ke backend.
                </p>
              </div>
              <div className="col-sm-4">
                <ol className="breadcrumb float-sm-end">
                  <li className="breadcrumb-item"><a href={pageUrl('beranda')}>Pengunjung</a></li>
                  <li className="breadcrumb-item active">Admin</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="app-content">
          <div className="container-fluid">
            <div className="row g-3 mb-4">
              <div className="col-12 col-md-4">
                <div className="small-box text-bg-primary">
                  <div className="inner">
                    <h3>12</h3>
                    <p>Pesanan hari ini</p>
                  </div>
                  <i className="bi bi-bag-check small-box-icon" aria-hidden="true" />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="small-box text-bg-success">
                  <div className="inner">
                    <h3>21</h3>
                    <p>Menu tersedia</p>
                  </div>
                  <i className="bi bi-egg-fried small-box-icon" aria-hidden="true" />
                </div>
              </div>
              <div className="col-12 col-md-4" id="pengunjung">
                <div className="small-box text-bg-warning">
                  <div className="inner">
                    <h3>36</h3>
                    <p>Pengunjung hari ini</p>
                  </div>
                  <i className="bi bi-people small-box-icon" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="card" id="pesanan">
              <div className="card-header">
                <h2 className="card-title">Daftar Pesanan Terbaru</h2>
                <div className="card-tools">
                  <label className="visually-hidden" htmlFor="order-search">Cari pesanan</label>
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control"
                      id="order-search"
                      type="search"
                      placeholder="Cari nama, menu, atau status..."
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                    <span className="input-group-text">
                      <i className="bi bi-search" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <caption className="visually-hidden">Data contoh pesanan untuk tampilan demo admin</caption>
                    <thead>
                      <tr>
                        <th scope="col">No. Pesanan</th>
                        <th scope="col">Pengunjung</th>
                        <th scope="col">Menu</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="fw-semibold">{order.id}</td>
                          <td>{order.customer}</td>
                          <td>{order.item}</td>
                          <td className="text-nowrap">{order.total}</td>
                          <td>
                            <span className={`badge ${order.status === 'Selesai' ? 'text-bg-success' : order.status === 'Diproses' ? 'text-bg-primary' : 'text-bg-warning'}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {filteredOrders.length === 0 && (
                        <tr>
                          <td className="py-4 text-center text-secondary" colSpan="5">
                            Pesanan tidak ditemukan.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-secondary small">
                Menampilkan {filteredOrders.length} dari {sampleOrders.length} data contoh
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Admin
