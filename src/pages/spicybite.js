import React from "react"
import Layout from "../components/Layout/Layout"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const Items = [
  {
    image: "samosasb.jpg",
    name: "Samosa",
    price: "₹15",
  },
  {
    image: "pattiesb.jpg",
    name: "Pattie",
    price: "₹20",
  },

  { image: "cholasamosachatsb.jpg", name: "Chola Samosa Chat", price: "₹40" },
  {
    image: "vegrollsb.jpg",
    name: "Veg Roll",
    price: "₹60",
  },
  {
    image: "momossteamsb.jpg",
    name: "Momos Steam",
    price: "₹70",
  },
  {
    image: "Friedmomossb.jpg",
    name: "Fried Momos",
    price: "₹80",
  },
  {
    image: "Cheesemomossb.jpg",
    name: "Cheese Momos",
    price: "₹95",
  },
  {
    image: "paneermomossb.jpg",
    name: "Paneer Momos",
    price: "₹95",
  },
  {
    image: "chillipotatosb.jpg",
    name: "Chilli Potato",
    price: "₹115",
  },
  {
    image: "honeychillipotatosb.jpg",
    name: "Honey Chilli Potato",
    price: "₹95",
  },
  {
    image: "chilligobisb.jpg",
    name: "Chilli Gobi",
    price: "₹95",
  },
  {
    image: "Springrollssb.jpg",
    name: "Spring Roll",
    price: "₹95",
  },
  {
    image: "Fingercripssb.jpg",
    name: "Finger Crisps",
    price: "₹85",
  },
  {
    image: "Frenchfriessb.jpg",
    name: "French fries",
    price: "₹85",
  },
  {
    image: "cheeserollssb.jpg",
    name: "Cheese Roll",
    price: "₹120",
  },
  {
    image: "soyachillichaapsb.jpg",
    name: "Soya Chaap Chilli",
    price: "₹120",
  },
  {
    image: "candychillipaneerkababsb.jpg",
    name: "Candy Chilli Paneer Kabab",
    price: "₹120",
  },
  {
    image: "paneerbarbequesb.jpg",
    name: "Paneer Barbeque",
    price: "₹120",
  },
  {
    image: "chillipaneersb.jpg",
    name: "Chilli Paneer",
    price: "₹160",
  },
  {
    image: "chillimashroomsb.jpg",
    name: "Chilli Mushroom",
    price: "₹170",
  },
  {
    image: "Garlicbreadsb.jpg",
    name: "Garlic Bread",
    price: "₹95",
  },
  {
    image: "aloosandwhichsb.jpg",
    name: "Aaloo Sandwhich",
    price: "₹60",
  },
  {
    image: "grillsandwhichsb.jpg",
    name: "Grill Sandwich",
    price: "₹70",
  },
  {
    image: "cheesesandwhichsb.jpg",
    name: "Cheese Sanwich",
    price: "₹80",
  },
  {
    image: "paneersandwhichsb.jpg",
    name: "Paneer Sandwich",
    price: "₹80",
  },
  {
    image: "clubsandwichsb.jpg",
    name: "Club Sandwich",
    price: "₹100",
  },

  {
    image: "opengrillsandwhichsb.jpg",
    name: "Open Grill Sandwich",
    price: "₹110",
  },
  {
    image: "Redsaucepastasb.jpg",
    name: "Red Sauce Pasta",
    price: "₹105",
  },
  {
    image: "vegpastawithsaucesb.jpg",
    name: "Veg Pasta With Sauce",
    price: "₹105",
  },
  {
    image: "greensaucepastasb.jpg",
    name: "Green Sauce Pasta",
    price: "₹105",
  },
  {
    image: "Whitesaucepastasb.jpg",
    name: "White Sauce Pasta",
    price: "₹135",
  },
  {
    image: "plainmaggiesb.jpg",
    name: "Plain Maggi",
    price: "₹50",
  },
  {
    image: "masalamaggisb.jpg",
    name: "Masala Maggi",
    price: "₹60",
  },
  {
    image: "buttermaggisb.jpg",
    name: "Butter Maggi",
    price: "₹75",
  },
  {
    image: "garlicmaggisb.jpg",
    name: "Garlic Maggi",
    price: "₹75",
  },
  {
    image: "cheesemaggisb.jpg",
    name: "Cheese Maggi",
    price: "₹85",
  },
  {
    image: "paneermaggisb.jpg",
    name: "Paneer Maggi",
    price: "₹85",
  },
  {
    image: "vegpizzawithcheesesb.jpg",
    name: "Veg Pizza With Cheese",
    price: "₹140",
  },
  {
    image: "onionpizzasb.jpg",
    name: "Onion Pizza With Cheese",
    price: "₹135",
  },
  {
    image: "tomatopizzawithcheesesb.jpg",
    name: "Tomato Pizza With Cheese",
    price: "₹135",
  },
  {
    image: "cheesepizzawithcheesesb.jpg",
    name: "Cheese Pizza With Cheese Only",
    price: "₹140",
  },
  {
    image: "capsicumpizzawithcheesesb.jpg",
    name: "Capsicum Pizza With Cheese",
    price: "₹145",
  },
  {
    image: "garlicpizzawithcheesesb.jpg",
    name: "Garlic Pizza With Cheese",
    price: "₹145",
  },
  {
    image: "paneerpizzawithcheesesb.jpg",
    name: "Paneer Pizza With Cheese",
    price: "₹160",
  },
  {
    image: "Mexicanpizzawithcheesesb.jpg",
    name: "Mexican Pizza With Cheese",
    price: "₹160",
  },
  {
    image: "mushroompizzawithcheesesb.jpg",
    name: "Mushroom Pizza With Cheese",
    price: "₹170",
  },
  {
    image: "margehritapizzawithcheesesb.jpg",
    name: "Margehrita Pizza With Cheese",
    price: "₹170",
  },
  {
    image: "pastapizzawithcheesesb.jpg",
    name: "Pasta Pizza With Cheese",
    price: "₹170",
  },
  {
    image: "paneerpizzawithcheesesb.jpg",
    name: "Paneer Pizza With Cheese",
    price: "₹170",
  },
  {
    image: "makhanipizzasb.jpg",
    name: "Makhani Pizza",
    price: "₹170",
  },
  {
    image: "vegmanchuriansb.jpg",
    name: "Veg Manchurian",
    price: "₹100",
  },
  {
    image: "gobimanchurainsb.jpg",
    name: "Gobi Manchurian",
    price: "₹100",
  },
  {
    image: "Drymanchuriansb.jpg",
    name: "Dry Manchurian",
    price: "₹130",
  },
  {
    image: "paneermanchuriansb.jpg",
    name: "Paneer Manchurian",
    price: "₹120",
  },
  {
    image: "drypaneermanchuriansb.jpg",
    name: "Dry Paneer Manchurian",
    price: "₹140",
  },
  {
    image: "plainricesb.jpg",
    name: "Plain Rice",
    price: "₹60",
  },
  {
    image: "jeeraricesb.jpg",
    name: "Jeera Rice",
    price: "₹70",
  },
  {
    image: "steamricesb.jpg",
    name: "Steam Rice",
    price: "₹70",
  },
  {
    image: "FrieddryRicesb.jpg",
    name: "Fried Dry Rice",
    price: "₹80",
  },
  {
    image: "tavapulavsb.jpg",
    name: "Tava Pulav",
    price: "₹80",
  },
  {
    image: "Heydrabadibiryanisb.jpg",
    name: "Heydrabadi Biryani",
    price: "₹80",
  },
  {
    image: "specialvegbiryanisb.jpg",
    name: "Special Veg Biryani",
    price: "₹90",
  },
  {
    image: "mushroomricesb.jpg",
    name: "Mushroom Rice",
    price: "₹110",
  },
  {
    image: "Paneerricesb.jpg",
    name: "Paneer Rice",
    price: "₹110",
  },
  {
    image: "cholakulchasb.jpg",
    name: "Chola Kulcha",
    price: "₹70",
  },
  {
    image: "paneerkulchasb.jpg",
    name: "Paneer Kulcha",
    price: "₹80",
  },
  {
    image: "cholabhaturasb.jpg",
    name: "Chola Bhatura",
    price: "₹75",
  },
  {
    image: "stuffcheesekulchasb.jpg",
    name: "Stuff Cheese Kulcha",
    price: "₹95",
  },
  {
    image: "kulchasandwichsb.jpg",
    name: "Kulcha Cheese Sandwich",
    price: "₹95",
  },
  {
    image: "vegburgersb.jpg",
    name: "Veg Burger",
    price: "₹70",
  },
  {
    image: "cheeseburgersb.jpg",
    name: "Cheese Burger",
    price: "₹90",
  },
  {
    image: "paneerburgersb.jpg",
    name: "Paneer burger",
    price: "₹90",
  },
  {
    image: "vegchowmiensb.jpg",
    name: "Veg Chowmein",
    price: "₹75",
  },
  {
    image: "butterchowmiensb.jpg",
    name: "Butter Chowmein",
    price: "₹85",
  },
  {
    image: "cheesechowmiensb.jpg",
    name: "Cheese Chowmein",
    price: "₹90",
  },
  {
    image: "paneerchowmiensb.jpg",
    name: "Paneer Chowmein",
    price: "₹90",
  },
  {
    image: "hakkanoodlesb.jpg",
    name: "Hakka Noodles",
    price: "₹90",
  },
  {
    image: "garlicchowmiensb.jpg",
    name: "Garlic chowmein",
    price: "₹85",
  },
  {
    image: "vegmacronisb.jpg",
    name: "Veg Macroni",
    price: "₹75",
  },
  {
    image: "buttermacronisb.jpg",
    name: "Butter Macroni",
    price: "₹85",
  },
  {
    image: "cheesemacronisb.jpg",
    name: "Cheese Macroni",
    price: "₹90",
  },
  {
    image: "garlicmacronisb.jpg",
    name: "Garlic Macroni",
    price: "₹85",
  },
  {
    image: "mixuttpamsb.jpg",
    name: "Mix Uttpam",
    price: "₹90",
  },
  {
    image: "veguttpamsb.jpg",
    name: "Veg Uttpam",
    price: "₹85",
  },
  {
    image: "Tomatouttpamsb.jpg",
    name: "Tomato Uttpam",
    price: "₹85",
  },
  {
    image: "onionuttpamsb.jpg",
    name: "Onion Uttpam",
    price: "₹85",
  },
  {
    image: "cheeseuttpamsb.jpg",
    name: "Cheese Uttpam",
    price: "₹110",
  },
  {
    image: "paneeruttpamsb.jpg",
    name: "Paneer Uttpam",
    price: "₹110",
  },
  {
    image: "mushroomuttpamsb.jpg",
    name: "Mushroom Uttpam",
    price: "₹125",
  },
  {
    image: "plaindosasb.jpg",
    name: "Plain Dosa",
    price: "₹70",
  },
  {
    image: "masaladosasb.jpg",
    name: "Masala Dosa",
    price: "₹80",
  },
  {
    image: "ravadosasb.jpg",
    name: "Rava Dosa",
    price: "₹120",
  },
  {
    image: "cheesedosasb.jpg",
    name: "Cheese Dosa",
    price: "₹115",
  },
  {
    image: "pavbsb.jpg",
    name: "Pav Bhaji",
    price: "₹60",
  },
  {
    image: "butterpavbhajisb.jpg",
    name: "Butter Pav Bhaji",
    price: "₹70",
  },
  {
    image: "paneerpavbhajisb.jpg",
    name: "Paneer Pav Bhaji",
    price: "₹80",
  },
  {
    image: "dabelisb.jpg",
    name: "Dabeli",
    price: "₹50",
  },
  {
    image: "vegsizzlersb.jpg",
    name: "Veg Sizzler",
    price: "₹205",
  },
  {
    image: "indiansizzlersb.jpg",
    name: "Indian Sizzler",
    price: "₹205",
  },
  {
    image: "mushroomsizzlersb.jpg",
    name: "Mushroom Sizzler",
    price: "₹270",
  },
  {
    image: "breadcutletsb.jpg",
    name: "Bread Cutlet",
    price: "₹90",
  },
  {
    image: "vegcutletsb.jpg",
    name: "Veg Cutlet",
    price: "₹90",
  },
  {
    image: "chillicutletsb.jpg",
    name: "Chilli Cutlet",
    price: "₹90",
  },
  {
    image: "plainparathawithacharsb.jpg",
    name: "Plain Paratha With Achar",
    price: "₹30",
  },
  {
    image: "aalooparathawithcurdsb.jpg",
    name: "Aaloo Paratha With Dahi",
    price: "₹55",
  },
  {
    image: "aaloopyazparathawithdahisb.jpg",
    name: "Aaloo Pyaz Paratha With Dahi",
    price: "₹60",
  },
  {
    image: "gobiparathawithcurdsb.jpg",
    name: "Gobi Paratha With Dahi",
    price: "₹65",
  },
  {
    image: "lacchaparathawithdahisb.jpg",
    name: "Laccha Paratha With Dahi",
    price: "₹65",
  },
  {
    image: "paneerparathawithdahisb.jpg",
    name: "Paneer Paratha With Dahi",
    price: "₹70",
  },
  {
    image: "dalfrysb.jpg",
    name: "Dal Fry",
    price: "₹80",
  },
  {
    image: "sevtamatarsb.jpg",
    name: "Sev Tamatar",
    price: "₹90",
  },
  {
    image: "daltadkasb.jpg",
    name: "Dal Tadka (Punjabi)",
    price: "₹90",
  },
  {
    image: "aaloogobisb.jpg",
    name: "Aaloo Gobi",
    price: "₹90",
  },
  {
    image: "aaloocholasb.jpg",
    name: "Aaloo Chola",
    price: "₹90",
  },
  {
    image: "aaloopyazsb.jpg",
    name: "Aaloo Pyaz ",
    price: "₹90",
  },
  {
    image: "dumaaloosb.jpg",
    name: "Dum Aaloo",
    price: "₹100",
  },
  {
    image: "mixvegsabzisb.jpg",
    name: "Mix Veg Sabzi",
    price: "₹100",
  },
  {
    image: "stufftamatarsb.jpg",
    name: "stuff Tamatar",
    price: "₹105",
  },
  {
    image: "shahipaneersb.jpg",
    name: "Shahi Paneer",
    price: "₹110",
  },
  {
    image: "malaikoftasb.jpg",
    name: "Malai Kofta",
    price: "₹110",
  },
  {
    image: "matarpaneersb.jpg",
    name: "Matar Paneer",
    price: "₹110",
  },
  {
    image: "butterpaneermasalasb.jpg",
    name: "Butter Paneer Masala",
    price: "₹110",
  },
  {
    image: "kadahipaneersb.jpg",
    name: "Kadhai Paneer",
    price: "₹120",
  },
  {
    image: "dahisb.jpg",
    name: "Dahi",
    price: "₹50",
  },
  {
    image: "masalapapadsb.jpg",
    name: "masala papad",
    price: "₹30",
  },
  {
    image: "bundiraytasb.jpg",
    name: "Bundi Rayta",
    price: "₹55",
  },
  {
    image: "vegraytasb.jpg",
    name: "Veg Rayta",
    price: "₹55",
  },
  {
    image: "greensaladsb.jpg",
    name: "Green Salad",
    price: "₹50",
  },
  {
    image: "sadachapatisb.jpg",
    name: "Sada Chapati",
    price: "₹9",
  },
  {
    image: "butterchapatisb.jpg",
    name: "Butter Chapati",
    price: "₹10",
  },
  {
    image: "butternaansb.jpg",
    name: "Butter Naan",
    price: "₹30",
  },
  {
    image: "coldcoffeesb.jpg",
    name: "Cold Coffee",
    price: "₹90",
  },
  {
    image: "lemonicedteasb.jpg",
    name: "Lemon Ice Tea",
    price: "₹90",
  },
  {
    image: "chocolateshakesb.jpg",
    name: "Chocolate Shake",
    price: "₹90",
  },
  {
    image: "butterscotchshakesb.jpg",
    name: "Butterscotch Shake",
    price: "₹90",
  },
  {
    image: "Strawberryshakesb.jpg",
    name: "Strawberry Shake",
    price: "₹90",
  },
  {
    image: "litchishakesb.jpg",
    name: "Litchi Shake",
    price: "₹90",
  },
  {
    image: "vanillashakesb.jpg",
    name: "Vanilla Shake",
    price: "₹90",
  },
  {
    image: "blackcurrentshakesb.jpg",
    name: "Black Current Shake",
    price: "₹90",
  },
  {
    image: "anjeershakesb.jpg",
    name: "Anjeer Shake",
    price: "₹95",
  },
  {
    image: "mangoshakesb.jpg",
    name: "mango Shake",
    price: "₹90",
  },
  {
    image: "oreoshakesb.jpg",
    name: "Oreo Shake",
    price: "₹110",
  },
  {
    image: "nutellashakesb.jpg",
    name: "Nutella Shake",
    price: "₹160",
  },
  {
    image: "kitkatshakesb.jpg",
    name: "KitKat Shake",
    price: "₹110",
  },
  {
    image: "coldcoffeewithbrowniesb.jpg",
    name: "Cold Coffee With Brownie",
    price: "₹120",
  },
  {
    image: "browniesizzlersb.jpg",
    name: "Brownie Sizzler",
    price: "₹250",
  },
  {
    image: "browniewithicecreamsb.jpg",
    name: "brownie With Icecream",
    price: "₹90",
  },
]

export default function Spicybite() {
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
          Spicy Bite Menu
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
