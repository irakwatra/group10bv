import React from "react"
import Layout from "../components/Layout/Layout"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const Items = [
  {
    image: "lays1muk.jpg",
    name: "Lay's Potato Chips - American Style Cream and Onion Flavour, 28g",
    price: "₹10",
  },
  {
    image: "lays2muk.jpg",
    name: "Lay's Chile Limon Potato Chips, 25 grams",
    price: "₹10",
  },
  {
    image: "lays3muk.jpg",
    name: "Lay's Potato Chips - Spanish Tomato Tango, 28g (20g +8g Extra)",
    price: "₹10",
  },
  {
    image: "lays4muk.jpg",
    name: "Lays Classic Salted Potato Chips, 28g(20g+8g Extra)",
    price: "₹10",
  },
  {
    image: "lays5muk.jpg",
    name: "Lay's Potato Chips - India's Magic Masala, 52g",
    price: "₹20",
  },
  {
    image: "sippermuk.jpg",
    name: "Sipper",
    price: "₹200",
  },
  {
    image: "combmuk.jpg",
    name: "Vega Tortoise Shell Half Coarse Half Fine Medium Sized Dressing Comb, Brown",
    price: "₹185",
  },
  {
    image: "hairbandmuk.jpg",
    name: "Hair Band",
    price: "₹20",
  },
  {
    image: "horlicsmuk.jpg",
    name: "Horlicks Health & Nutrition drink - 500g Pet Jar",
    price: "₹237",
  },
  {
    image: "glucondmuk.jpg",
    name: "Glucon-D",
    price: "₹280",
  },
  {
    image: "sunsilkmuk.jpg",
    name: "Sunsilk Stunning Black Shine Shampoo 340 ml",
    price: "₹186",
  },

  {
    image: "conditionermuk.jpg",
    name: "Sunsilk Hair Conditioner - Stunning Black Shine, 80ml Bottle",
    price: "₹69",
  },
  {
    image: "soap1muk.jpg",
    name: "Himalaya Herbals Protecting Neem and Turmeric Soap",
    price: "₹60",
  },
  {
    image: "soap2muk.jpg",
    name: "Lifebuoy Lemon Fresh Soap Bar 125gm",
    price: "₹45",
  },
  {
    image: "soap3muk.jpg",
    name: "Dove Cream Beauty Bathing Bar",
    price: "₹49",
  },
  {
    image: "soap4muk.jpg",
    name: "Pears Pure And Gentle Soap",
    price: "₹67",
  },
  {
    image: "surfexcelmuk.jpg",
    name: "Surf Excel 3kg",
    price: "₹372",
  },

  {
    image: "tropicana1muk.jpg",
    name: "Tropicana Fruit Juice - Delight, Orange, 200ml",
    price: "₹115",
  },
  {
    image: "tropicana2muk.jpg",
    name: "TROPICANA MIXED FRUIT DELIGHT JUICE - ASEPTIC PACK, 200 ML BOTTLE",
    price: "₹20",
  },
  {
    image: "maggimuk.jpg",
    name: "MAGGI 2-Minute Instant Noodles - Masala, 560 g Pouch",
    price: "₹105",
  },
  {
    image: "maggi2muk.jpg",
    name: "Maggi 2-Minute Instant Noodles - Masala, 140g",
    price: "₹5",
  },
  {
    image: "talcummuk.jpg",
    name: "POND'S Dream Flower Talc Powder, 200gmPOND'S Dream Flower Talc Powder, 200gm",
    price: "₹185",
  },
  {
    image: "oilmuk.jpg",
    name: "Parachute 100 % Pure Coconut Oil, 600 ml",
    price: "₹239",
  },
  {
    image: "oil2muk.jpg",
    name: "Parachute Advansed Ayurvedic Hot Oil,Warming Coconut Hair Oil,Frizz Free Hair, 300 ml",
    price: "₹140",
  },
  {
    image: "oil3muk.jpg",
    name: "Parachute Advansed Jasmine,Non Sticky Coconut Hair Oil,400 ml with Free 90 ml pack",
    price: "₹165",
  },
  {
    image: "hideandseekmuk.jpg",
    name: "Parle Hide & Seek Biscuit Chocolate 100g",
    price: "₹30",
  },
  {
    image: "oreomuk.jpg",
    name: "Cadbury Oreo Original Vanilla Creme Biscuit, 46.3g",
    price: "₹10",
  },
  {
    image: "puffcornmuk.jpg",
    name: "Kurkure Namkeen - Puffcorn (Yummy Cheese) - 55 g Pack",
    price: "₹20",
  },
  {
    image: "madangles1muk.jpg",
    name: "Bingo Mad Angles Tomato Madness, 66/72.5gm",
    price: "₹20",
  },
  {
    image: "madangles2muk.jpg",
    name: "Bingo! Mad Angles – Achaari Masti, 66g/72.5g Pack",
    price: "₹20",
  },
  {
    image: "madangles3muk.jpg",
    name: "Bingo Mad Angles Chaat Masti, 66g Pack",
    price: "₹20",
  },
  {
    image: "chocopiemuk.jpg",
    name: "Lotte Choco Pie, 336g",
    price: "₹135",
  },
  {
    image: "darkfantasymuk.jpg",
    name: "Sunfeast Dark Fantasy, 300g",
    price: "₹120",
  },
  {
    image: "sanitizer1muk.jpg",
    name: "Lifebuoy Hand Sanitizer 500ml",
    price: "₹221",
  },
  {
    image: "santizer2muk.jpg",
    name: "Dettol Original Germ Protection Alcohol Based Hand Sanitizer, 50ml",
    price: "₹25",
  },
  {
    image: "razormuk.jpg",
    name: "Gillette Venus Breeze Razor for Women, 1 Piece",
    price: "₹130",
  },
  {
    image: "pad1muk.jpg",
    name: "Stayfree Secure Night Sanitary Napkins for Women, Pack of 40",
    price: "₹285",
  },
  {
    image: "pad2muk.jpg",
    name: "Stayfree Secure Cottony Wings (20 Count) - Pack of 2",
    price: "₹170",
  },
  {
    image: "bodylotion1muk.jpg",
    name: "NIVEA Body Lotion For Men & Women, 200 ml)",
    price: "₹199",
  },
  {
    image: "bodylotion2muk.jpg",
    name: "Vaseline Intensive Care Aloe Fresh Hydrating Body Lotion 400 ml",
    price: "₹340",
  },
  {
    image: "moisturizer1muk.jpg",
    name: "Mamaearth Oil-Free Moisturizer For Face With Apple Cider Vinegar For Acne Prone Skin, 80 ml",
    price: "₹299",
  },
  {
    image: "moisturizer2muk.jpg",
    name: "POND'S Super Light Gel Face Moisturiser, 147 g",
    price: "₹299",
  },
  {
    image: "facewash1muk.jpg",
    name: "Lakmé Blush & Glow Strawberry Combo Face Wash With Fruit Extracts, 100 g",
    price: "₹205",
  },
  {
    image: "facewash2muk.jpg",
    name: "Himalaya Herbals Purifying Neem Face Wash, 200ml",
    price: "₹170",
  },
  {
    image: "facewash3muk.jpg",
    name: "Joy Revivify Mineral Clay Face Wash, 150ml",
    price: "₹225",
  },
  {
    image: "deo1muk.jpg",
    name: "Nivea Fresh Flower Deodorant (150ml)",
    price: "₹199",
  },
  {
    image: "deo2muk.jpg",
    name: "New Spinz Mystic White Perfumed Deo for Women, with Fresh Lily Fragrance, 200ml",
    price: "₹250",
  },
  {
    image: "deo3muk.jpg",
    name: "Engage Spell Deodorant For Women, Citrus and Fruity, Skin Friendly, 150 ml",
    price: "₹190",
  },
  {
    image: "removermuk.jpg",
    name: "Lakmé Nail Color Remover, 27ml",
    price: "₹95",
  },
  {
    image: "toothpaste1muk.jpg",
    name: "Colgate Toothpaste Maxfresh Peppermint Ice - 80 g (Blue Gel)",
    price: "₹55",
  },
  {
    image: "toothpaste2muk.jpg",
    name: "Colgate Swarna Vedshakti Ayurvedic Oral Care Toothpaste, 200gm",
    price: "₹70",
  },
  {
    image: "toothpaste3muk.jpg",
    name: "Himalaya Complete Care Plaque Removal Toothpaste - 150 g",
    price: "₹70",
  },
  {
    image: "brush1muk.jpg",
    name: "Sensodyne Sensitive Toothbrush With Soft Rounded Bristles",
    price: "₹20",
  },
  {
    image: "brush2muk.jpg",
    name: "Oral-B Pro-Health Toothbrush, 1 Piece, (Medium)",
    price: "₹40",
  },
  {
    image: "vimmuk.jpg",
    name: "Vim Dishwash Liquid Gel Lemon, With Lemon Fragrance, 750 ml Bottle",
    price: "₹190",
  },
  {
    image: "vimbarmuk.jpg",
    name: "Vim Dishwash bar",
    price: "₹30",
  },
  {
    image: "notebook2muk.jpg",
    name: "Classmate Premium 6 Subject Notebook - A4, Soft Cover, 300 Pages, Single Line",
    price: "₹145",
  },
  {
    image: "pencilbagmuk.jpg",
    name: "Pencil Bag",
    price: "₹60",
  },
  {
    image: "notebook3muk.jpg",
    name: "Classmate Origami Notebooks - Unruled, 172 Pages, 240 mm x 180 mm",
    price: "₹100",
  },
  {
    image: "detergentmuk.jpg",
    name: "Rin Detergent Powder 500 g",
    price: "₹50",
  },
]

export default function Shreeshakti() {
  return (
    <Layout>
      <div className="container text-center py-3">
        <button type="button" class="btn backbutton float-start">
          <Link to="/grocery">
            <ArrowLeft className="mx-auto" size="30" />
            <b> BACK</b>
          </Link>
        </button>
        <h2 className="pb-2 border-bottom text-center text-light">
          Shree Shakti General Store
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
