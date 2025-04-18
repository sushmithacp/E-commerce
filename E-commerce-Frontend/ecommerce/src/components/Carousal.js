import React from 'react'

function Carousal() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height: "80vh"}} src="https://static.vecteezy.com/system/resources/previews/036/214/523/non_2x/ai-generated-empty-supermarket-cart-on-blue-background-ready-for-shopping-generated-by-ai-free-photo.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img style={{height: "80vh"}} src="https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img style={{height: "80vh"}} src="https://img.freepik.com/free-psd/banner-template-online-shopping_23-2148559048.jpg?semt=ais_hybrid&w=740" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img style={{height: "80vh"}} src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg" className="d-block w-100" alt="..."/>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
export default Carousal;