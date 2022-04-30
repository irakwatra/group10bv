import React from "react"
import Image from "../Images/Images"

const Carousel2 = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide py-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "400px",
              width: "70%",
              borderRadius: "10px",
            }}
            filename="pizza.jpg"
            alt="1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 className="navbar-inner">MUKTESHWARI'S TOP PICK</h2>
            <h4 className="navbar-inner">Pizza from the kitchen!</h4>
          </div>
        </div>
        <div class="carousel-item">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "400px",
              width: "70%",
              borderRadius: "10px",
            }}
            filename="coffee.jpg"
            alt="1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 className="navbar-inner">SPICY BITE'S TOP PICK</h2>
            <h4 className="navbar-inner">Mouth watering cold coffee!</h4>
          </div>
        </div>
        <div class="carousel-item">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "400px",
              width: "70%",
              borderRadius: "10px",
            }}
            filename="burger.jpg"
            alt="1"
          />

          <div class="carousel-caption d-none d-md-block">
            <h2 className="navbar-inner">ANNAPURNA'S TOP PICK</h2>
            <h4 className="navbar-inner">Delicious burger!</h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel2
