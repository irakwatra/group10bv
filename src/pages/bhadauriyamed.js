import React from "react"
import Layout from "../components/layout/layout"
import Image from "../components/images/images"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import { Link } from "gatsby"

const Items = [
  {
    image: "med1mms.jpg",
    name: "Ascoril LS Syrup",
    price: "₹108",
  },
  {
    image: "med2mms.jpg",
    name: "Azithral 500 Tablet",
    price: "₹119",
  },
  {
    image: "med3mms.jpg",
    name: "Atarax 25mg Tablet",
    price: "₹77",
  },
  {
    image: "med4mms.jpg",
    name: "Allegra-M Tablet",
    price: "₹228",
  },
  {
    image: "med5mms.jpg",
    name: "Aquasol A Capsule",
    price: "₹24",
  },
  {
    image: "med6mms.jpg",
    name: "Betnovate-N Cream",
    price: "₹50",
  },
  {
    image: "med7mms.jpg",
    name: "Bandy-Plus Chewable Tablet",
    price: "₹25",
  },
  {
    image: "med8mms.jpg",
    name: "Betadine 2% Gargle Mint",
    price: "₹140",
  },
  {
    image: "med9mms.jpg",
    name: "Betadine 10% Ointment",
    price: "₹85",
  },
  {
    image: "med10mms.jpg",
    name: "Benadryl Syrup",
    price: "₹129",
  },
  {
    image: "med11mms.jpg",
    name: "Banocide Forte Tablet",
    price: "₹43",
  },

  {
    image: "med12mms.jpg",
    name: "Bandy Suspension",
    price: "₹17",
  },
  {
    image: "med13mms.jpg",
    name: "Baclof 10 Tablet",
    price: "₹113",
  },
  {
    image: "med14mms.jpg",
    name: "Cyclopam Tablet",
    price: "₹51",
  },
  {
    image: "med15mms.jpg",
    name: "Combiflam Tablet",
    price: "₹41",
  },
  {
    image: "med16mms.jpg",
    name: "Candid-B Cream",
    price: "₹138",
  },
  {
    image: "med17mms.jpg",
    name: "Ciplox Eye/Ear Drops",
    price: "₹17",
  },

  {
    image: "med18mms.jpg",
    name: "Clavam 625 Tablet",
    price: "₹201",
  },
  {
    image: "med19mms.jpg",
    name: "Ciplox 500 Tablet",
    price: "₹40",
  },
  {
    image: "med20mms.jpg",
    name: "Calpol 500mg Tablet",
    price: "₹15",
  },
  {
    image: "med21mms.jpg",
    name: "CTD 6.25 Tablet",
    price: "₹93",
  },
  {
    image: "med22mms.jpg",
    name: "Dolo 650 Tablet",
    price: "₹30",
  },
  {
    image: "med23mms.jpg",
    name: "Dytor 10 Tablet",
    price: "₹84",
  },
  {
    image: "med24mms.jpg",
    name: "Deviry 10mg Tablet",
    price: "₹60",
  },
  {
    image: "med25mms.jpg",
    name: "Dalacin C 300mg Capsule",
    price: "₹242",
  },
  {
    image: "med26mms.jpg",
    name: "Dermi 5 Cream",
    price: "₹49",
  },
  {
    image: "med27mms.jpg",
    name: "Dexona Injection",
    price: "₹10",
  },
  {
    image: "med28mms.jpg",
    name: "Duzela 20 Capsule DR",
    price: "₹115",
  },
  {
    image: "med29mms.jpg",
    name: "Ecosprin 75 Tablet",
    price: "₹5",
  },
  {
    image: "med30mms.jpg",
    name: "Evion LC Tablet",
    price: "₹51",
  },
  {
    image: "med31mms.jpg",
    name: "Ecosprin Gold 20 Capsule",
    price: "₹146",
  },
  {
    image: "med32mms.jpg",
    name: "Enzomac Tablet",
    price: "₹205",
  },
  {
    image: "med33mms.jpg",
    name: "Econorm Capsule",
    price: "₹221",
  },
  {
    image: "med34mms.jpg",
    name: "Eyemist Eye Drop",
    price: "₹204",
  },
  {
    image: "med35mms.jpg",
    name: "Flexon MR Tablet",
    price: "₹24",
  },
  {
    image: "med36mms.jpg",
    name: "Fludac Capsule",
    price: "₹61",
  },
  {
    image: "med37mms.jpg",
    name: "Febrex Plus Syrup",
    price: "₹82",
  },
  {
    image: "med38mms.jpg",
    name: "Flozen-AA Tablet",
    price: "₹95",
  },
  {
    image: "med39mms.jpg",
    name: "Farobact 200 Tablet",
    price: "₹630",
  },
  {
    image: "med40mms.jpg",
    name: "Glycomet-GP 2 Tablet PR",
    price: "₹430",
  },
  {
    image: "med41mms.jpg",
    name: "Gerbisa Tablet",
    price: "₹10",
  },
  {
    image: "med42mms.jpg",
    name: "Genteal Eye Drop",
    price: "₹200",
  },
  {
    image: "med43mms.jpg",
    name: "Gramocef-O 200mg Tablet DT",
    price: "₹107",
  },
  {
    image: "med44mms.jpg",
    name: "Happi-D Capsule SR",
    price: "₹105",
  },
  {
    image: "med45mms.jpg",
    name: "Ketorol-DT Tablet",
    price: "₹133",
  },
  {
    image: "med46mms.jpg",
    name: "KZ Cream",
    price: "₹229",
  },
  {
    image: "med47mms.jpg",
    name: "Keto Soap",
    price: "₹115",
  },
  {
    image: "med48mms.jpg",
    name: "Levipil 500 Tablet",
    price: "₹137",
  },
  {
    image: "med49mms.jpg",
    name: "Meftal-P Suspension",
    price: "₹40",
  },
  {
    image: "med50mms.jpg",
    name: "Nurokind-LC Tablet",
    price: "₹209",
  },
  {
    image: "med51mms.jpg",
    name: "Neurobion RF Forte Injection",
    price: "₹16",
  },
  {
    image: "med52mms.jpg",
    name: "O2 Tablet",
    price: "₹164",
  },
  {
    image: "med53mms.jpg",
    name: "Ondem -MD 4 Tablet",
    price: "₹52",
  },
  {
    image: "med54mms.jpg",
    name: "Signoflam Tablet",
    price: "₹122",
  },
  {
    image: "med55mms.jpg",
    name: "Zentel Oral Suspension",
    price: "₹17",
  },
  {
    image: "med56mms.jpg",
    name: "Zostum 1.5gm Injection",
    price: "₹376",
  },
  {
    image: "med57mms.jpg",
    name: "Zydip Lotion",
    price: "₹235",
  },
]

export default function Bhadauriya() {
  return (
    <Layout>
      <div className="container text-center py-3">
        <button type="button" class="btn btn-dark float-start">
          <Link to="/pharmacy">
            <ArrowLeft className="mx-auto" size="30" fill="#ffff" /> BACK
          </Link>
        </button>
        <h2 className="pb-2 border-bottom text-center text-light">
          Bhadauriya Medical Store
        </h2>
        &nbsp;
        <button type="button" class="py-2 btn btn-success text-center">
          <Link to="/shop">
            <Cart className="mx-auto" size="30" fill="#ffff" /> SAMPLE SHOP
          </Link>
        </button>
        &nbsp;
        <div className="row justify content center">
          {Items.map((item, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 ">
                &nbsp;
                <div className="card card-body shadow mb-3">
                  <Image
                    className="d-block mx-lg-auto img-fluid"
                    style={{
                      margin: "0 auto",
                      height: "200px",
                      width: "200px",
                      borderRadius: "5px",
                    }}
                    filename={item.image}
                    alt="1"
                  />
                  <h3 className="m-1">{item.name}</h3>
                  <h2 className="m-3">{item.price}</h2>
                  <button type="button" class="btn btn-outline-dark my-2">
                    Add to cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
