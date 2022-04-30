import React from "react"
import Image from "../components/Images/Images"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

const Foodcorner = () => {
  return (
    <Layout>
      <div className="container text-center py-5">
        <Link class="text-light text-decoration-none" to="/mukteshwari">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Mukteshwari</h2>
              <p class="lead">Opposite Surya Mandir</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="mukteshwari.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        <Link class="text-light text-decoration-none" to="/spicybite">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Spicy Bite</h2>
              <p class="lead">Opposite Surya Mandir</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="spicybite.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        <Link class="text-light text-decoration-none" to="/shanus">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Shanus</h2>
              <p class="lead">New Market</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="shanus.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        <Link class="text-light text-decoration-none" to="/annapurna">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Annapurna canteen</h2>
              <p class="lead">Near New Market</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="annapurna.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Foodcorner
