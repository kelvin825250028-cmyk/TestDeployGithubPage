import { useState } from 'react'
import { pageUrl } from './index.jsx'

function KontakPesan() {
  const [nama, setNama] = useState('')
  const [jumlah, setJumlah] = useState(1)
  const [orderAccepted, setOrderAccepted] = useState(false)
  const [kategori, setKategori] = useState('')
  const [menu, setMenu] = useState('')

  const menuOptions = {
    'Paket Nasi': [
      'Nasi Ayam Geprek Sambal Gondes',
      'Nasi Ayam Goreng Sambal Kampoeng',
      'Nasi Ayam Goreng Kalasan',
      'Nasi Ayam Geprek Mozarella Sambal Gondes',
      'Nasi Ayam Sambal Matah',
      'Nasi Goreng Kampoeng',
    ],
    'Paket Indomie': [
      'Indomie Ayam Geprek Sambal Gondes',
      'Indomie Telor Ceplok / Dadar',
      'Indomie Saja',
      'Indomie Ayam Geprek Mozzarella Sambal Gondes',
    ],
    'Ala Carte & Cemilan': [
      'Ayam Geprek Sambal Gondes',
      'Ayam Goreng Sambal Kampoeng',
      'Ayam Goreng Kalasan',
      'Terong Crispy Geprek',
      'Jamur Crispy',
      'Telor Ceplok / Dadar',
      'Nasi Putih Pulen',
      'Krupuk Gendar / Kerung',
    ],
    'Aneka Minuman': [
      'Es Teh Manis Jumbo',
      'Nutrisari Jeruk / Es Milo',
      'Air Mineral Botol 600ml',
    ],
  }

  function handleSubmit(event) {
    event.preventDefault()
    setOrderAccepted(true)
  }

  return (
    <>
      <section className="bg-body-tertiary py-5">
        <div className="container">
          <span className="badge rounded-pill bg-warning-subtle text-danger-emphasis fw-bold">LAYANAN RAMAH MAHASISWA &amp; KANTOR</span>
          <h1>Pesan Sekarang &amp; Hubungi Kami</h1>
          <p>Isi formulir pesanan di bawah untuk reservasi dine-in, take away, atau pengiriman ke kos/kantor di sekitar Grogol.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <form className="card p-4 col-lg-8" onSubmit={handleSubmit} onChange={() => setOrderAccepted(false)}>
              <span className="badge rounded-pill bg-warning-subtle text-danger-emphasis fw-bold">FORMULIR PEMESANAN</span>
              <h2>Detail Pembelian Anda</h2>
              <p className="text-secondary mb-3">Isi detail pesanan Anda pada formulir berikut.</p>
              {orderAccepted && (
                <div className="alert alert-success" role="status">
                  Pesanan diterima. Terima kasih telah memesan di Ayam Pak Gondesss!
                </div>
              )}

              <div className="mb-3">
                <label className="form-label" htmlFor="nama">Nama Lengkap <span>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  placeholder="Contoh: Budi Santoso"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                />
                <p className="small text-secondary mb-0">Hasil Inputan: {nama}</p>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="wa">Nomor WhatsApp <span>*</span></label>
                <input type="tel" className="form-control" id="wa" name="wa" placeholder="Contoh: 081234567890" required />
                <p className="small text-secondary">Pastikan nomor aktif untuk konfirmasi kurir / admin.</p>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="kategori">Kategori Menu <span>*</span></label>
                <select
                  className="form-select"
                  id="kategori"
                  name="kategori"
                  required
                  value={kategori}
                  onChange={(event) => {
                    setKategori(event.target.value)
                    setMenu('')
                  }}
                >
                  <option value="">-- Pilih Kategori --</option>
                  <option>Paket Nasi</option>
                  <option>Paket Indomie</option>
                  <option>Ala Carte &amp; Cemilan</option>
                  <option>Aneka Minuman</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="menu">Menu Spesifik <span>*</span></label>
                <select
                  className="form-select"
                  id="menu"
                  name="menu"
                  required
                  value={menu}
                  onChange={(event) => setMenu(event.target.value)}
                  disabled={!kategori}
                >
                  <option value="">
                    {kategori ? '-- Pilih Menu --' : '-- Pilih kategori terlebih dahulu --'}
                  </option>
                  {(menuOptions[kategori] || []).map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="jumlah">Jumlah Porsi / Box <span>*</span></label>
                <input
                  type="number"
                  className="form-control"
                  id="jumlah"
                  name="jumlah"
                  value={jumlah}
                  onChange={(e) => setJumlah(Number(e.target.value))}
                  min="1"
                  required
                />
                <h3 className="h6 mt-2">Penambahan Ke: {jumlah}</h3>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => setJumlah(jumlah + 1)}>
                  Tambah 1 Lagi
                </button>
                <p className="small text-secondary">Pemesanan di atas 15 porsi untuk rapat/acara kampus, konfirmasi via WA H-1.</p>
              </div>
              <fieldset className="mb-3">
                <legend>Jenis Layanan <span>*</span></legend>
                <label className="form-check d-block">
                  <input className="form-check-input" type="radio" name="layanan" value="Makan di Tempat" defaultChecked />
                  <span><strong>Makan di Tempat</strong><br /><small className="text-secondary">Reservasi meja warung (dine-in santai &amp; higienis)</small></span>
                </label>
                <label className="form-check d-block">
                  <input className="form-check-input" type="radio" name="layanan" value="Take Away" />
                  <span><strong>Take Away</strong><br /><small className="text-secondary">Bungkus rapi, ambil langsung di warung tanpa antre</small></span>
                </label>
                <label className="form-check d-block">
                  <input className="form-check-input" type="radio" name="layanan" value="Delivery Grogol" />
                  <span><strong>Delivery Grogol</strong><br /><small className="text-secondary">Antar ke kos/kantor area Trisakti, UNTAR &amp; sekitarnya</small></span>
                </label>
              </fieldset>
              <div className="mb-3">
                <label className="form-label" htmlFor="catatan">Level Pedas &amp; Catatan Khusus</label>
                <textarea className="form-control" id="catatan" name="catatan" rows="4" placeholder="Level pedas 1-5, tanpa timun, sambal dipisah, nomor meja, atau alamat pengiriman..." />
                <p className="small text-secondary">Saran cepat: Level 3 &bull; Level 5 Nampol &bull; Sambal dipisah &bull; No timun</p>
              </div>
              <div className="mb-3">
                <label className="d-flex align-items-start gap-2">
                  <input type="checkbox" name="setuju" required />
                  Saya menyetujui detail pesanan sudah benar.
                </label>
              </div>
              <button className="btn btn-danger" type="submit">Kirim Pesanan</button>
              <p className="small text-secondary mt-2">
                Pesanan hanya dikonfirmasi pada tampilan ini dan tidak disimpan ke database.
              </p>
            </form>

            <aside className="col-lg-4">
              <div className="d-flex flex-column gap-4">
                <div className="card p-0 overflow-hidden">
                  <div className="ratio ratio-4x3">
                    <iframe
                      title="Lokasi Ayam Pak Gondesss, Jl. Dr. Susilo Raya No. 42, Grogol"
                      src="https://www.google.com/maps?q=Jl.+Dr.+Susilo+Raya+No.+42+Grogol+Petamburan+Jakarta+Barat&output=embed"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="card p-4">
                  <span className="badge bg-warning-subtle text-warning-emphasis align-self-start mb-2">FAST RESPONSE</span>
                  <h2 className="h3 mb-3">Kontak &amp; Jam Layanan</h2>
                  <div className="d-flex justify-content-between align-items-start gap-3 border-bottom py-2">
                    <strong>Jam Buka</strong>
                    <span className="text-end">10:00 - 22:00 WIB<br /><small className="text-secondary">Senin - Minggu</small></span>
                  </div>
                  <div className="d-flex justify-content-between align-items-start gap-3 py-2">
                    <strong>WhatsApp Admin</strong>
                    <a className="text-nowrap" href="https://wa.me/6281234567890">+62 812-3456-7890</a>
                  </div>
                  <p className="small text-secondary mt-2 mb-0">Gratis antar radius 1 km untuk mahasiswa, kosan Susilo, Makaliwe, dan sekitarnya (minimal 2 porsi).</p>
                  <a className="btn btn-danger align-self-start mt-3" href="https://wa.me/6281234567890">Hubungi via WhatsApp</a>
                </div>
                <div className="card p-4">
                  <h2 className="h3 mb-3">Tautan Terkait</h2>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href={pageUrl('beranda')}>Kembali ke Beranda</a></li>
                    <li><a href={pageUrl('menu')}>Lihat Harga Menu</a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default KontakPesan