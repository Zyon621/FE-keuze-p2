import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Shop from './Shop.jsx'
import Footer from './Footer.jsx'

function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/categories.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP-fout: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => setCategories(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="container py-4">
          {loading && <p>Laden...</p>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row g-3">
            {categories.map((category) => (
              <div className="col-12 col-sm-6 col-lg-4" key={category.id} id={category.id}>
                <div className="card h-100">
                  <div className="card-body py-2">
                    <h6 className="card-title mb-1">{category.title}</h6>
                    <p className="card-text small mb-0">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Shop />
      </main>
      <Footer />
    </>
  )
}

export default App
