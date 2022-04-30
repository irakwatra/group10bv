import React from "react"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"

const Grocery = () => {
  return (
    <Layout>
      <div className="container text-center py-5">
        <Link class="text-light text-decoration-none" to="/agarwal">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Agarwal General Store</h2>
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
                filename="agarwalnewmarket.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        <Link class="text-light text-decoration-none" to="/shreeshakti">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Shree Shakti General Store</h2>
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
                filename="shreeshakti.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        {/* <Link class="text-light text-decoration-none" to="/rohit">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Rohit Greens And Juice Point</h2>
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
                filename="rohit.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp; */}
        <Link
          class="text-light text-decoration-none"
          to="/mukteshwarinewmarket"
        >
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Mukteshwari General Store</h2>
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
                filename="mukteshwarinewmarket.jpeg"
                alt="1"
              />
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Grocery
