import React from "react"
import Image from "../Images/Images"

const Items = [
  {
    image: "ira.jpeg",
    name: " Ira Kwatra",
    desc: "BTech EE Batch 2023 BV",
  },
  {
    image: "kalpana.jpeg",
    name: "Kalpana Kharwas",
    desc: "BTech EE Batch 2023 BV",
  },

  {
    image: "kaustabhi.jpeg",
    name: "Kaustabhi Tank",
    desc: "BTech EE Batch 2023 BV",
  },
  {
    image: "parinita.jpeg",
    name: "Parinita",
    desc: "BTech EE Batch 2023 BV",
  },
  {
    image: "srishti.jpeg",
    name: "Srishti Swaraj",
    desc: "BTech EE Batch 2023 BV",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="text-secondary">BANASTHALI WEB SHOP</h1>
      <h4 className="text-light">
        Our project aims to minimize human interaction for the safety of our
        mates from the current and any forthcoming disease.
      </h4>
      <h5 className="text-light">
        Designed by Electrical and Electronics Engineering students of
        Banasthali Vidyapith
      </h5>
      &nbsp; &nbsp;
      <h1 className="pb-2 py-5 border-bottom text-center text-light">
        Team Members
      </h1>
      <div className="row justify content center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="card card-body mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={item.image}
                  alt="1"
                />
                <h1 className="m-4">{item.name}</h1>
                <h5 className="m-4">{item.desc}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
