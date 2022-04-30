import React from "react"
import Layout from "../components/Layout/Layout"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const Items = [
  {
    image: "masaladosaann.jpg",
    name: "Masala Dosa",
    price: "₹85",
  },
  {
    image: "plaindosaann.jpg",
    name: "Plain Dosa",
    price: "₹70",
  },
  {
    image: "paneerdosaann.jpg",
    name: "Paneer Dosa",
    price: "₹105",
  },
  {
    image: "cheesedosaann.jpg",
    name: "Cheese Dosa",
    price: "₹105",
  },
  {
    image: "mixuttapamann.jpg",
    name: "Mix Uttapam",
    price: "₹95",
  },
  {
    image: "paneeruttapamann.jpg",
    name: "Paneer Uttapam",
    price: "₹120",
  },
  {
    image: "cheeseuttapamann.jpg",
    name: "Cheese Uttapam",
    price: "₹120",
  },
  {
    image: "mixuttapamann.jpg",
    name: "Tomato Uttapam",
    price: "₹105",
  },
  {
    image: "mixuttapamann.jpg",
    name: "Onion Uttapam",
    price: "₹105",
  },

  {
    image: "plainmaggiann.jpg",
    name: "Plain Maggi",
    price: "₹45",
  },
  {
    image: "masalamaggiann.jpg",
    name: "Masala Maggi",
    price: "₹60",
  },
  {
    image: "pohaann.jpg",
    name: "Poha",
    price: "₹45",
  },
  {
    image: "alooparathaann.jpg",
    name: "Aloo Paratha",
    price: "₹50",
  },
  {
    image: "paneerparathaann.jpg",
    name: "Paneer Paratha",
    price: "₹80",
  },
  {
    image: "cheeseparathaann.jpg",
    name: "Cheese Paratha",
    price: "₹80",
  },
  {
    image: "mixvegparathaann.jpg",
    name: "Mix Veg Paratha",
    price: "₹60",
  },

  {
    image: "chowmeinann.jpg",
    name: "Chowmein",
    price: "₹80",
  },
  {
    image: "hakkanoodlesann.jpg",
    name: "Hakka Noodles",
    price: "₹100",
  },
  {
    image: "hotgarlicnoodlesann.jpg",
    name: "Hot Garlic Noodles",
    price: "₹100",
  },
  {
    image: "paneernoodlesann.jpg",
    name: "Paneer Noodles",
    price: "₹120",
  },
  {
    image: "chillipotatoann.jpg",
    name: "Chilli Potato",
    price: "₹100",
  },
  {
    image: "honeychillipotatoann.jpg",
    name: "Honey Chilli Potato",
    price: "₹120",
  },
  {
    image: "butterpaneermasalaann.jpg",
    name: "Butter Paneer Masala",
    price: "₹240",
  },
  {
    image: "shahipaneerann.jpg",
    name: "Shahi Paneer",
    price: "₹220",
  },
  {
    image: "lachaparathaann.jpg",
    name: "Lacha Paratha",
    price: "₹40",
  },
  {
    image: "tawarotibutterann.jpg",
    name: "Tawa Roti (Butter)",
    price: "₹13",
  },
  {
    image: "tawarotiplainann.jpg",
    name: "Tawa Roti (Plain)",
    price: "₹10",
  },
  {
    image: "minimealann.jpg",
    name: "Mini Meal",
    price: "₹130",
  },
  {
    image: "cholebatureann.jpg",
    name: "Chole Bature",
    price: "₹95",
  },
  {
    image: "mixvegmacaroniann.jpg",
    name: "Mix Veg Macaroni",
    price: "₹70",
  },
  {
    image: "mexicanmacaroniann.jpg",
    name: "Mexican Macaroni",
    price: "₹80",
  },
  {
    image: "cheesemacaroniann.jpg",
    name: "Cheese Macaroni",
    price: "₹90",
  },
  {
    image: "arrabbiatapastaann.jpg",
    name: "Arrabbiata Pasta",
    price: "₹110",
  },
  {
    image: "redsaucepastaann.jpg",
    name: "Red Sauce Pasta",
    price: "₹95",
  },
  {
    image: "whitesaucepastaann.jpg",
    name: "White Sauce Pasta",
    price: "₹120",
  },
  {
    image: "chillipaneerdryann.jpg",
    name: "Chilli Paneer (Dry)",
    price: "₹130",
  },
  {
    image: "chillipaneerann.jpg",
    name: "Chilli Paneer (Gravy)",
    price: "₹130",
  },
  {
    image: "chillimomosdryann.jpg",
    name: "Chilli Momos (Dry)",
    price: "₹120",
  },
  {
    image: "chillimomosann.jpg",
    name: "Chilli Momos (Gravy)",
    price: "₹120",
  },
  {
    image: "afghanichapann.jpg",
    name: "Afghani  Chap (Dry)",
    price: "₹140",
  },
  {
    image: "soyachapann.jpg",
    name: "Soya Chap (Dry)",
    price: "₹120",
  },
  {
    image: "vegbiryaniann.jpg",
    name: "Veg Biryani",
    price: "₹140",
  },
  {
    image: "friedriceann.jpg",
    name: "Fried Rice",
    price: "₹90",
  },
  {
    image: "tawabutterpulaoann.jpg",
    name: "Tawa Butter Pulao",
    price: "₹80",
  },
  {
    image: "springrollann.jpg",
    name: "Spring Roll",
    price: "₹110",
  },
  {
    image: "otcpizzaann.jpg",
    name: "OTC Pizza",
    price: "₹160",
  },
  {
    image: "farmfreshpizzaann.jpg",
    name: "Farm Fresh Pizza",
    price: "₹180",
  },
  {
    image: "kadhaipaneerpizzaann.jpg",
    name: "Kadhai Paneer Pizza",
    price: "₹220",
  },
  {
    image: "margheritapizzaann.jpg",
    name: "Margherita Pizza",
    price: "₹150",
  },
  {
    image: "vegsandwichann.jpg",
    name: "Veg Sandwich",
    price: "₹90",
  },
  {
    image: "cheesesandwichann.jpg",
    name: "Cheese Sandwich",
    price: "₹110",
  },
  {
    image: "paneertikkasandwichann.jpg",
    name: "Paneer Tikka Sandwich",
    price: "₹130",
  },
  {
    image: "garlicbreadplainann.jpg",
    name: "Garlic Bread (Plain)",
    price: "₹70",
  },
  {
    image: "garlicbreadcheeseann.jpg",
    name: "Garlic Bread (Cheese)",
    price: "₹120",
  },
  {
    image: "garlicbreadsupremeann.jpg",
    name: "Garlic Bread (Supreme)",
    price: "₹140",
  },
  {
    image: "garlicbreadspicyann.jpg",
    name: "Garlic Bread (Spicy)",
    price: "₹150",
  },
  {
    image: "vegburgerann.jpg",
    name: "Veg Burger",
    price: "₹50",
  },
  {
    image: "cheeseburgerann.jpg",
    name: "Cheese Burger",
    price: "₹70",
  },
  {
    image: "aloorollann.jpg",
    name: "Aloo Roll",
    price: "₹60",
  },
  {
    image: "tandoorialoorollann.jpg",
    name: "Tandoori Aloo Roll",
    price: "₹80",
  },
  {
    image: "vegpaneerrollann.jpg",
    name: "Mix Veg Roll",
    price: "₹70",
  },
  {
    image: "paneerrollann.jpg",
    name: "Paneer Roll",
    price: "₹80",
  },
  {
    image: "vegpaneerrollann.jpg",
    name: "Veg Paneer Roll",
    price: "₹90",
  },
  {
    image: "paneertikkarollann.jpg",
    name: "Paneer Tikka Roll",
    price: "₹90",
  },
  {
    image: "paneertikkarollann.jpg",
    name: "Paneer Kathi Roll",
    price: "₹100",
  },
  {
    image: "cheesepaneerrollann.jpg",
    name: "Cheese Paneer Roll",
    price: "₹100",
  },
  {
    image: "cheeserollann.jpg",
    name: "Cheese Roll",
    price: "₹80",
  },
  {
    image: "cheesecornrollann.jpg",
    name: "Cheese Corn Roll",
    price: "₹100",
  },
  {
    image: "plaincornrollann.jpg",
    name: "Plain Corn Roll",
    price: "₹70",
  },
  {
    image: "afghanichaprollann.jpg",
    name: "Afghani Chap Roll",
    price: "₹100",
  },
  {
    image: "masalachaprollann.jpg",
    name: "Masala Chap Roll",
    price: "₹100",
  },
  {
    image: "tandoorichaprollann.jpg",
    name: "Tandoori Chap Roll",
    price: "₹120",
  },
  {
    image: "springrollann.jpg",
    name: "Spring Roll",
    price: "₹110",
  },
  {
    image: "kitkatshakeann.jpg",
    name: "KitKat Shake",
    price: "₹100",
  },
  {
    image: "oreoshakeann.jpg",
    name: "Oreo Shake",
    price: "₹100",
  },
  {
    image: "chocolateshakeann.jpg",
    name: "Chocolate Shake",
    price: "₹90",
  },
  {
    image: "coldcoffeeann.jpg",
    name: "Cold Coffee",
    price: "₹90",
  },
  {
    image: "strawberryshakeann.jpg",
    name: "Strawberry Shake",
    price: "₹80",
  },
  {
    image: "butterscotchshakeann.jpg",
    name: "Butterscotch Shake",
    price: "₹80",
  },
  {
    image: "vanillashakeann.jpg",
    name: "Vanilla Shake",
    price: "₹70",
  },
  {
    image: "brownieshakeann.jpg",
    name: "Brownie Shake",
    price: "₹150",
  },
  {
    image: "teaann.jpg",
    name: "Tea",
    price: "₹15",
  },
  {
    image: "hotcoffeeann.jpg",
    name: "Hot Coffee",
    price: "₹30",
  },
  {
    image: "dalmakhaniann.jpg",
    name: "Dal Makhani",
    price: "₹180",
  },
  {
    image: "malaikoftaann.jpg",
    name: "Malai Kofta",
    price: "₹220",
  },
  {
    image: "garlicnaanann.jpg",
    name: "Garlic Naan",
    price: "₹90",
  },
  {
    image: "dahiann.jpg",
    name: "Dahi (Extra)",
    price: "₹10",
  },
]

export default function Annapurna() {
  return (
    <Layout>
      <div className="container text-center py-3">
        <button type="button" class="btn backbutton float-start">
          <Link to="/foodcorner">
            <ArrowLeft className="mx-auto" size="30" />
            <b> BACK</b>
          </Link>
        </button>
        <h2 className="pb-2 border-bottom text-center text-light">
          Annapurna Menu
        </h2>
        &nbsp;
        <button type="button" class="py-2 btn button12 text-center">
          <Link to="/shop">
            <Cart className="mx-auto" size="30" /> <b>SAMPLE SHOP</b>
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
