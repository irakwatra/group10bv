import React from "react"
import Image from "../components/Images/Images"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

const Pharmacy = () => {
  return (
    <Layout>
      <div className="container text-center py-5">
        <Link class="text-light text-decoration-none" to="/bhadauriyamed">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Bhadauriya Medical Store</h2>
              <p class="lead">Near Aarogya Mandir</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="bhadauriyamed.jpg"
                alt="1"
              />
            </div>
          </div>
        </Link>
        &nbsp;
        <Link class="text-light text-decoration-none" to="/maheshmed">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Mahesh Medical Store</h2>
              <p class="lead">Near Aarogya Mandir</p>
            </div>
            <div class="col-md-5">
              <Image
                className="d-block mx-lg-auto img-fluid shadow"
                style={{
                  borderRadius: "5%",
                  height: "300px",
                  width: "500px",
                }}
                filename="maheshmed.jpg"
                alt="1"
              />
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Pharmacy
