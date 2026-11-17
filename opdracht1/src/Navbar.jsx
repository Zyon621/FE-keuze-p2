const links = [
  { href: '#home', label: 'Home' },
  { href: '#roses', label: 'Roses' },
  { href: '#bouquets', label: 'Bouquets' },
  { href: '#plants', label: 'Plants' },
  { href: '#gifts', label: 'Gifts' },
  { href: '#location', label: 'Location' },
]

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Florist</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
