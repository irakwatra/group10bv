import React from "react"
import Image from "../components/Images/Images"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

const Stationery = () => {
  return (
    <Layout>
      <div className="container text-center py-5">
        <Link class="text-light text-decoration-none" to="/bbc">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Banasthali Book Center</h2>
              <p class="lead">Near AIM & ACT</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="bbc.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        <Link class="text-light text-decoration-none" to="/dks">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">D. K. Stationery</h2>
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
                filename="dkstationary.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Stationery
