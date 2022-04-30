import React from "react"
import Layout from "../components/Layout/Layout"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const Items = [
  {
    image: "jaljeeramuk.jpg",
    name: "Jal Jeera",
    price: "₹25",
  },
  {
    image: "lemonwatermuk.jpg",
    name: "Lemon Water",
    price: "₹25",
  },
  {
    image: "buttermilkmuk.jpg",
    name: "Butter Milk",
    price: "₹30",
  },
  {
    image: "lassimuk.jpg",
    name: "Lassi",
    price: "₹45",
  },
  {
    image: "teamuk.jpg",
    name: "Tea",
    price: "₹10",
  },
  {
    image: "hotcoffeemuk.jpg",
    name: "Hot Coffee",
    price: "₹20",
  },
  {
    image: "coldcoffeemuk.jpg",
    name: "Cold Coffee",
    price: "₹80",
  },
  {
    image: "farmfreshpizzamuk.jpg",
    name: "Farm Fresh Pizza",
    price: "₹140",
  },
  {
    image: "margheritamuk.jpg",
    name: "Margherita Pizza",
    price: "₹130",
  },
  {
    image: "exoticapizzamuk.jpg",
    name: " Exotica Pizza",
    price: "₹180",
  },

  {
    image: "paneerpizzamuk.jpg",
    name: "Indian Paneer Pizza",
    price: "₹210",
  },
  {
    image: "cheesebustmuk.jpg",
    name: "Cheese Bust Pizza",
    price: "₹240",
  },
  {
    image: "schezwanpizzamuk.jpg",
    name: "Schezwan Sauce Pizza",
    price: "₹170",
  },
  {
    image: "garlicrodmuk.jpg",
    name: "Garlic Rod",
    price: "₹50",
  },
  {
    image: "cocktailpizzamuk.jpg",
    name: "Cocktail Pizza",
    price: "₹170",
  },
  {
    image: "paobhajimuk.jpg",
    name: "Pao Bhaji",
    price: "₹80",
  },
  {
    image: "paneerpakodamuk.jpg",
    name: "Paneer Pakoda",
    price: "₹90",
  },
  {
    image: "cheesecutletmuk.jpg",
    name: "Cheese Cutlet",
    price: "₹75",
  },
  {
    image: "vegcutletmuk.jpg",
    name: "Veg Cutlet",
    price: "₹70",
  },
  {
    image: "fingerchipsmuk.jpg",
    name: "Finger Chips",
    price: "₹70",
  },
  {
    image: "cholebhaturemuk.jpg",
    name: "Chole Bhature",
    price: "₹80",
  },
  {
    image: "puribhajimuk.jpg",
    name: "Puri Bhaji",
    price: "₹60",
  },
  {
    image: "alooparathamuk.jpg",
    name: "Aloo Paratha",
    price: "₹70",
  },
  {
    image: "paneerparathamuk.jpg",
    name: "Paneer Paratha",
    price: "₹90",
  },
  {
    image: "gobhiparathamuk.jpg",
    name: "Gobhi Paratha",
    price: "₹75",
  },
  {
    image: "mixparathamuk.jpg",
    name: "Mix Paratha",
    price: "₹80",
  },
  {
    image: "redsaucemuk.jpg",
    name: "Red Sauce Pasta",
    price: "₹110",
  },
  {
    image: "whitesaucemuk.jpg",
    name: "White Sauce Pasta",
    price: "₹120",
  },
  {
    image: "arrabitamuk.jpg",
    name: "Arrabita Baked Pasta",
    price: "₹130",
  },
  {
    image: "vegmaggimuk.jpg",
    name: "Veg Maggi",
    price: "₹45",
  },
  {
    image: "plainmaggimuk.jpg",
    name: "Plain Maggi",
    price: "₹40",
  },
  {
    image: "chillipotatomuk.jpg",
    name: "Chilli Potato",
    price: "₹95",
  },
  {
    image: "honeychillipotatomuk.jpg",
    name: "Honey Chilli Potato",
    price: "₹120",
  },
  {
    image: "samosamuk.jpg",
    name: "Samosa",
    price: "₹10",
  },
  {
    image: "tomatosoupmuk.jpg",
    name: "Tomato Soup",
    price: "₹55",
  },
  {
    image: "vegsoupmuk.jpg",
    name: "Vegetable Soup",
    price: "₹55",
  },
  {
    image: "sweetcornsoupmuk.jpg",
    name: "Veg Sweet Corn Soup",
    price: "₹65",
  },
  {
    image: "hot&sourmuk.jpg",
    name: "Hot & Sour Soup",
    price: "₹65",
  },

  {
    image: "vegmanchowmuk.jpg",
    name: "Veg Manchow Soup",
    price: "₹65",
  },

  {
    image: "vegchowmeinmuk.jpg",
    name: "Veg Chowmein",
    price: "₹70",
  },
  {
    image: "cheesechowmeinmuk.jpg",
    name: "Cheese Chowmein",
    price: "₹90",
  },
  {
    image: "vegmacronimuk.jpg",
    name: "Veg Macroni",
    price: "₹75",
  },
  {
    image: "cheesemacronimuk.jpg",
    name: "Cheese Macroni",
    price: "₹90",
  },
  {
    image: "vegchopsueymuk.jpg",
    name: "Veg Chopsuey",
    price: "₹90",
  },
  {
    image: "vegmanchurianmuk.jpg",
    name: "Veg Manchurian",
    price: "₹85",
  },
  {
    image: "hotgarlicmuk.jpg",
    name: "Hot Garlic Noodles",
    price: "₹90",
  },
  {
    image: "hakkamuk.jpg",
    name: "Hakka Noodles",
    price: "₹75",
  },
  {
    image: "drymanchurianmuk.jpg",
    name: "Dry Manchurian",
    price: "₹110",
  },
  {
    image: "paneermanchurianmuk.jpg",
    name: "Paneer Manchurian",
    price: "₹110",
  },
  {
    image: "vegfriedricemuk.jpg",
    name: "Veg Fried Rice",
    price: "₹90",
  },
  {
    image: "springrollmuk.jpg",
    name: "Spring Roll",
    price: "₹80",
  },
  {
    image: "singaporimuk.jpg",
    name: "Singapori Noodles",
    price: "₹90",
  },
  {
    image: "onionuttapammuk.jpg",
    name: "Onion Uttapam",
    price: "₹80",
  },
  {
    image: "tomatouttapammuk.jpg",
    name: "Tomato Uttapam",
    price: "₹80",
  },
  {
    image: "coconututtapammuk.jpg",
    name: "Coconut Uttapam",
    price: "₹80",
  },
  {
    image: "mukuttapam.jpg",
    name: "Mukteshwari's Uttapam",
    price: "₹90",
  },
  {
    image: "rawadosamuk.jpg",
    name: "Rawa Masala Dosa",
    price: "₹80",
  },
  {
    image: "onionrawamuk.jpg",
    name: "Onion Rawa Masala",
    price: "₹90",
  },
  {
    image: "mysoremasalamuk.jpg",
    name: "Mysore Masala Dosa",
    price: "₹80",
  },
  {
    image: "paneermasalamuk.jpg",
    name: "Paneer Masala Dosa",
    price: "₹90",
  },
  {
    image: "masaladosamuk.jpg",
    name: "Masala Dosa",
    price: "₹70",
  },
  {
    image: "garlicbreadmuk.jpg",
    name: "Garlic Bread Supreme",
    price: "₹120",
  },
  {
    image: "masalasandwichmuk.jpg",
    name: "Masala Sandwich",
    price: "₹70",
  },
  {
    image: "cheesesandwichmuk.jpg",
    name: "Veg Cheese Sandwich",
    price: "₹90",
  },
  {
    image: "paneertikkamuk.jpg",
    name: "Paneer Tikka Sandwich",
    price: "₹100",
  },
  {
    image: "butterslicemuk.jpg",
    name: "Butter Slice",
    price: "₹40",
  },
  {
    image: "vegburgermuk.jpg",
    name: "Veg Burger",
    price: "₹70",
  },
  {
    image: "cheeseburgermuk.jpg",
    name: "Cheese Burger",
    price: "₹85",
  },
  {
    image: "vegsizzlermuk.jpg",
    name: "Veg Sizzler",
    price: "₹250",
  },
  {
    image: "mushroomsizzlermuk.jpg",
    name: "Mushroom Sizzler",
    price: "₹320",
  },
  {
    image: "greensaladmuk.jpg",
    name: "Green Salad",
    price: "₹45",
  },
  {
    image: "fruitraitamuk.jpg",
    name: "Fruit Raita",
    price: "₹85",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "boondiraitamuk.jpg",
    name: "Boondi Raita",
    price: "₹75",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "vegraitamuk.jpg",
    name: "Veg Raita",
    price: "₹60",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "kadhaipaneermuk.jpg",
    name: "Kadhai Paneer",
    price: "₹130",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "shahipaneermuk.jpg",
    name: "Shahi Paneer",
    price: "₹140",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "matarpaneermuk.jpg",
    name: "Matar Paneer",
    price: "₹130",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "palakpaneermuk.jpg",
    name: "Palak Paneer",
    price: "₹150",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "malaikoftamuk.jpg",
    name: "Malai Kofta",
    price: "₹130",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "dalmakhnimuk.jpg",
    name: "Dal Makhni",
    price: "₹120",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "aloojeeramuk.jpg",
    name: "Aloo Jeera",
    price: "₹90",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "mixvegmuk.jpg",
    name: "Mix Veg",
    price: "₹130",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "paneertikkaamuk.jpg",
    name: "Paneer Tikka",
    price: "₹150",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "jeeraricemuk.jpg",
    name: "Jeera Rice",
    price: "₹75",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "vegpulaomuk.jpg",
    name: "Veg Pulao",
    price: "₹110",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "biryanimuk.jpg",
    name: "Veg Biryani",
    price: "₹130",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "ricenoodlesmuk.jpg",
    name: "Rice Noodles Mix",
    price: "₹130",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "butterrotimuk.jpg",
    name: "Tan. Butter Roti",
    price: "₹15",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "saadirotimuk.jpg",
    name: "Tan. Saadi Roti",
    price: "₹10",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "missirotimuk.jpg",
    name: "Tan. Missi Roti",
    price: "₹20",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "saadanaanmuk.jpg",
    name: "Tan. Saada Naan",
    price: "₹30",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "butternaanmuk.jpg",
    name: "Tan. Butter Naan",
    price: "₹40",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "lacchamuk.jpg",
    name: "Tan. Laccha Paratha",
    price: "₹40",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "plainparathamuk.jpg",
    name: "Tan. Plain Paratha",
    price: "₹40",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "kulchamuk.jpg",
    name: "Tan. Kulcha",
    price: "₹30",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "garlicnaanmuk.jpg",
    name: "Tan. Garlic Naan",
    price: "₹40",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "papayashakemuk.jpg",
    name: "Papaya Shake",
    price: "₹35",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "bananashakemuk.jpg",
    name: "Banana Shake",
    price: "₹35",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "pineappleshakemuk.jpg",
    name: "Pineapple Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "litchishakemuk.jpg",
    name: "Litchi Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "strawberryshakemuk.jpg",
    name: "Strawberry Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "mangoshakemuk.jpg",
    name: "Mango Shake",
    price: "₹50",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "appleshakemuk.jpg",
    name: "Apple Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "blackcurrmuk.jpg",
    name: "Black Current Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "chocolateshakemuk.jpg",
    name: "Chocolate Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },

  {
    image: "butterscmuk.jpg",
    name: "Butter Scotch",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "roseshakemuk.jpg",
    name: "Rose Shake",
    price: "₹70",
    desc: "Perfectly refreshing for hot summer",
  },

  {
    image: "mausambimuk.jpg",
    name: "Mausambi Juice",
    price: "₹35",
    desc: "Perfectly refreshing for hot summer",
  },

  {
    image: "orangemuk.jpg",
    name: "Orange Juice",
    price: "₹35",
    desc: "Perfectly refreshing for hot summer",
  },
  {
    image: "carrotmuk.jpg",
    name: "Carrot Juice",
    price: "₹25",
    desc: "Perfectly refreshing for hot summer",
  },
]

export default function Mukteshwari() {
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
          Mukteshwari Menu
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
