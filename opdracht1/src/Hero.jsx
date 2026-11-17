import tulips from './assets/img/tulips.jpg'
import peonies from './assets/img/peonies.jpg'
import redtulips from './assets/img/redtulips.jpg'

const slides = [
  { src: tulips, title: 'Fresh Tulips', text: 'Bright blooms for every day' },
  { src: peonies, title: 'Soft Peonies', text: 'Handtied with seasonal greens' },
  { src: redtulips, title: 'Spring Garden', text: 'Fresh from the field' },
]

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6">
            <h1 className="display-6">Fresh Flowers, Thoughtfully Arranged</h1>
            <p className="small">
              Seasonal blooms crafted for everyday moments and meaningful
              occasions. Sourced responsibly and arranged with care.
            </p>
            <a href="#roses" className="btn btn-primary btn-sm">Shop Flowers</a>
          </div>
          <div className="col-12 col-md-6">
            <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
              <div className="carousel-inner rounded">
                {slides.map((s, i) => (
                  <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={s.title}>
                    <img src={s.src} className="d-block w-100" alt={s.title} />
                    <div className="carousel-caption">
                      <h5>{s.title}</h5>
                      <p className="d-none d-sm-block">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
