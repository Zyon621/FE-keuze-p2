import shop from './assets/img/shop.jpg'

function Shop() {
  return (
    <section id="location" className="container py-4">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6">
          <img src={shop} alt="Our flower shop" className="shop-img rounded" />
        </div>
        <div className="col-12 col-md-6">
          <h2>Visit Our Shop</h2>
          <address className="small mb-3">
            123 Flower Street<br />
            Garden District<br />
            Bloomtown, BT 45678
          </address>
          <p className="small">
            Open Monday to Saturday<br />
            9:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </section>
  )
}

export default Shop
