import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'

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
      <main className="container py-4">
        <h1 className="mb-4">Categories</h1>

        {loading && <p>Laden...</p>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row g-3">
          {categories.map((category) => (
            <div className="col-12 col-md-6 col-lg-4" key={category.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <p className="card-text">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
