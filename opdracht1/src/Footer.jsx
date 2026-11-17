const socials = ['Instagram', 'Facebook', 'Pinterest', 'Twitter']

function Footer() {
  return (
    <footer className="container py-4 mt-3">
      <div className="row small">
        {socials.map((s) => (
          <div className="col-6 col-md-3 mb-2" key={s}>
            <a href="#home" className="text-white text-decoration-none">{s}</a>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
