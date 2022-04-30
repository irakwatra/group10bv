import React from "react"
import Layout from "../components/Layout/Layout"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const Items = [
  {
    image: "5starags.jpg",
    name: "5-Star",
    price: "₹10",
  },
  {
    image: "amuldarkchocags.jpg",
    name: "Amul Dark Chocolate",
    price: "₹85",
  },

  { image: "amulchoc2ags.jpg", name: "Amul Milk Chocolate", price: "₹100" },
  {
    image: "amulchoc3ags.jpg",
    name: "Amul Fruit 'N' Nut ",
    price: "₹100",
  },
  {
    image: "chocominisags.jpg",
    name: "Chocominis",
    price: "₹120",
  },
  {
    image: "crispelloags.jpg",
    name: "Crispello",
    price: "₹30",
  },
  {
    image: "dairymilk1ags.jpg",
    name: "Dairy Milk",
    price: "₹20",
  },
  {
    image: "dairymilk2ags.jpg",
    name: "Dairy Milk silk Bubbly",
    price: "₹175",
  },
  {
    image: "dairymilk3ags.jpg",
    name: "Dairy Milk Silk Oreo",
    price: "₹160",
  },
  {
    image: "dairymilk4ags.jpg",
    name: "Dairy Milk Silk Fruit 'N' Nut",
    price: "₹70",
  },
  {
    image: "dairymilk5ags.jpg",
    name: "Dairy Milk Silk Hazelnut",
    price: "₹170",
  },
  {
    image: "kitkat1ags.jpg",
    name: "Kitkat",
    price: "₹40",
  },
  {
    image: "kitkat2ags.jpg",
    name: "Kitkat White",
    price: "₹100",
  },
  {
    image: "kitkat3ags.jpg",
    name: "Kitkat Dark 70%",
    price: "₹190",
  },
  {
    image: "munchags.jpg",
    name: "Munch",
    price: "₹20",
  },
  {
    image: "perkags.jpg",
    name: "Perk",
    price: "₹10",
  },
  {
    image: "eclairsags.jpg",
    name: "Eclairs",
    price: "₹2",
  },
  {
    image: "creamfillsags.jpg",
    name: "Creamfills",
    price: "₹2",
  },
  {
    image: "melodyags.jpg",
    name: "Melody",
    price: "₹2",
  },
  {
    image: "pulseags.jpg",
    name: "Pulse",
    price: "₹2",
  },
  {
    image: "juztjellyags.jpg",
    name: "Juztjelly",
    price: "₹2",
  },
  {
    image: "kacchamangobiteags.jpg",
    name: "Kaccha Mango Bite",
    price: "₹1",
  },
  {
    image: "bingo1ags.jpg",
    name: "Bingo Potato Chips",
    price: "₹20",
  },
  {
    image: "bingo2ags.jpg",
    name: "Bingo Mad Angles",
    price: "₹20",
  },
  {
    image: "bingo3ags.jpg",
    name: "Bingo Potato Chips",
    price: "₹20",
  },
  {
    image: "bingo4ags.jpg",
    name: "Bingo Mad Angles",
    price: "₹20",
  },
  {
    image: "bingo5ags.jpg",
    name: "Bingo Mad Angles",
    price: "₹20",
  },

  {
    image: "kurkure1ags.jpg",
    name: "Kurkure Masala Munch",
    price: "₹10",
  },
  {
    image: "kurkure2ags.jpg",
    name: "Kurkure Chilli Chataka",
    price: "₹10",
  },
  {
    image: "kurkure3ags.jpg",
    name: "Kurkure Green Chutney",
    price: "₹10",
  },
  {
    image: "lays1ags.jpg",
    name: "Lays American Style Creamic & Onion",
    price: "₹20",
  },
  {
    image: "lays2ags.jpg",
    name: "Lays Joyful Magic Masala",
    price: "₹20",
  },
  {
    image: "lays3ags.jpg",
    name: "Lays Classic Salted",
    price: "₹20",
  },
  {
    image: "lays4ags.jpg",
    name: "Lays Barbecue",
    price: "₹20",
  },
  {
    image: "lays5ags.jpg",
    name: "Lays Sour Cream & Onion",
    price: "₹20",
  },
  {
    image: "doritosags.jpg",
    name: "Doritos",
    price: "₹20",
  },
  {
    image: "maxxchipsags.jpg",
    name: "Maxx Macho Chilli",
    price: "₹20",
  },
  {
    image: "maxx2ags.jpg",
    name: "Maxx Hot 'N' Sour Punch",
    price: "₹20",
  },
  {
    image: "puffcornags.jpg",
    name: "Puffcorn",
    price: "₹10",
  },
  {
    image: "soyastick1ags.jpg",
    name: "Soyastick",
    price: "₹10",
  },
  {
    image: "soyastick2ags.jpg",
    name: "Soyastick",
    price: "₹10",
  },

  {
    image: "bhujiahaldiramags.jpg",
    name: "Bikaneri Bhujiya",
    price: "₹90",
  },
  {
    image: "ratlamimixhaldiramags.jpg",
    name: "Ratlam Mixture",
    price: "₹89",
  },
  {
    image: "khattameethahaldiramags.jpg",
    name: "Khatta Meetha",
    price: "₹90",
  },
  {
    image: "navratanhaldiramags.jpg",
    name: "Navratan",
    price: "₹90",
  },
  {
    image: "bicanobhujiaags.jpg",
    name: "Aloo Bhujia",
    price: "₹102",
  },
  {
    image: "bikaneribhujiabicanoags.jpg",
    name: "Bikaneri Bhujia",
    price: "₹105",
  },
  {
    image: "natkhatnimbuags.jpg",
    name: "Natkhat Nimbu",
    price: "₹90",
  },
  {
    image: "bikaneribhujiabikajiags.jpg",
    name: "Bikaneri Bhujia",
    price: "₹90",
  },
  {
    image: "kuchkuchbikajiags.jpg",
    name: "Kuch-Kuch",
    price: "₹220",
  },
  {
    image: "tanatanbikajiags.jpg",
    name: "Tana-Tan Aloo Bhujia",
    price: "₹220",
  },
  {
    image: "datesags.jpg",
    name: "Dates (100g)",
    price: "₹196",
  },
  {
    image: "kajuags.jpg",
    name: "Kaju (250g)",
    price: "₹380",
  },
  {
    image: "kajusaltedags.jpg",
    name: "Kaju Salted (250g)",
    price: "₹310",
  },
  {
    image: "almondsags.jpg",
    name: "Almonds (200g)",
    price: "₹206",
  },
  {
    image: "dryfruitsags.jpg",
    name: "Raisin (250g)",
    price: "₹120",
  },
  {
    image: "pistapacketags.jpg",
    name: "Pista (200g)",
    price: "₹400",
  },
  {
    image: "walnutags.jpg",
    name: "Walnut (200g)",
    price: "₹450",
  },
  {
    image: "roastedchanaags.jpg",
    name: "Roasted Chana (500g)",
    price: "₹180",
  },
  {
    image: "saltedpeanutsags.jpg",
    name: "Salted Peanuts",
    price: "₹60",
  },
  {
    image: "peanutbutterags.jpg",
    name: "Peanut Butter crunchy",
    price: "₹220",
  },
  {
    image: "peanutbutter2ags.jpg",
    name: "Peanut Butter",
    price: "₹200",
  },
  {
    image: "daburhoneyags.jpg",
    name: "Dabur Honey",
    price: "₹115",
  },
  {
    image: "gemsags.jpg",
    name: "Gems",
    price: "₹20",
  },
  {
    image: "hersheysags.jpg",
    name: "Hershy's Syrup",
    price: "₹70",
  },
  {
    image: "bournvitaags.jpg",
    name: "Bournvita",
    price: "₹200",
  },
  {
    image: "horlicksags.jpg",
    name: "Horlicks",
    price: "₹230",
  },
  {
    image: "boostags.jpg",
    name: "Boost",
    price: "₹205",
  },
  {
    image: "protinexags.jpg",
    name: "Protinex",
    price: "₹250",
  },
  {
    image: "parlegags.jpg",
    name: "Parle-G",
    price: "₹10",
  },
  {
    image: "oreoags.jpg",
    name: "Oreo",
    price: "₹20",
  },
  {
    image: "happyhappyags.jpg",
    name: "Happy Happy biscuits",
    price: "₹10",
  },
  {
    image: "coconutbiscuitags.jpg",
    name: "Coconut Biscuits",
    price: "₹10",
  },
  {
    image: "butterbiteags.jpg",
    name: "Butterbite",
    price: "₹10",
  },
  {
    image: "toothbrushags.jpg",
    name: "Tooth Brush",
    price: "₹45",
  },
  {
    image: "colgateags.jpg",
    name: "Colgate",
    price: "₹90",
  },
  {
    image: "colgatemaxags.jpg",
    name: "Colgate Max Fresh",
    price: "₹115",
  },
  {
    image: "pepsodentags.jpg",
    name: "Pepsodent",
    price: "₹120",
  },
  {
    image: "dovesoapags.jpg",
    name: "Dove Soap",
    price: "₹25",
  },
  {
    image: "pearssoapags.jpg",
    name: "Pears",
    price: "₹49",
  },
  {
    image: "nirmaags.jpg",
    name: "Nirma Soap",
    price: "₹25",
  },
  {
    image: "godrejsoapags.jpg",
    name: "Godrej No. 1",
    price: "₹30",
  },

  {
    image: "dettol1ags.jpg",
    name: "Dettol",
    price: "₹30",
  },
  {
    image: "dettol2ags.jpg",
    name: "Dettol",
    price: "₹30",
  },

  {
    image: "lifebuoy1ags.jpg",
    name: "Lifebuoy",
    price: "₹25",
  },
  {
    image: "lifebuoy2ags.jpg",
    name: "Lifebuoy",
    price: "₹25",
  },
  {
    image: "luxsoapags.jpg",
    name: "Lux Soap",
    price: "₹30",
  },
  {
    image: "niveashowergel1ags.jpg",
    name: "Nivea Shower Gel",
    price: "₹90",
  },
  {
    image: "niveashowergel2ags.jpg",
    name: "Nivea Shower Gel",
    price: "₹175",
  },
  {
    image: "fiamashowergel1ags.jpg",
    name: "Fiama Shower Gel",
    price: "₹150",
  },
  {
    image: "fiamashowergel2ags.jpg",
    name: "Fiama Shower Gel",
    price: "₹150",
  },
  {
    image: "fiamashowergel3ags.jpg",
    name: "Fiama Shower Gel",
    price: "₹150",
  },
  {
    image: "loofahags.jpg",
    name: "Loofah",
    price: "₹30",
  },
  {
    image: "garnierfwags.jpg",
    name: "Garnier Facewash",
    price: "₹72",
  },
  {
    image: "himalyafw1ags.jpg",
    name: "Himalaya Neem Facewash",
    price: "₹75",
  },
  {
    image: "himalyafw2ags.jpg",
    name: "Himalaya Moisturizing Aloe Vera Facewash",
    price: "₹113",
  },
  {
    image: "himalyafw3ags.jpg",
    name: "Himalaya Oil Clear Lemon Facewash",
    price: "₹157",
  },
  {
    image: "cleanandclearfw1ags.jpg",
    name: "Clean and Clear Facewash",
    price: "₹105",
  },
  {
    image: "cleanandclearfw2ags.jpg",
    name: "Clean and Clear Facewash",
    price: "₹70",
  },
  {
    image: "cleanandclearfw3ags.jpg",
    name: "Clean and Clear Facewash",
    price: "₹70",
  },
  {
    image: "niveafwags.jpg",
    name: "Nivea Facewash",
    price: "₹90",
  },
  {
    image: "clinicplusags.jpg",
    name: "Clinic Plus Shampoo",
    price: "₹190",
  },
  {
    image: "clinicplus2ags.jpg",
    name: "Clinic Plus Shampoo",
    price: "₹205",
  },
  {
    image: "dove1ags.jpg",
    name: "Dove Shampoo Intense Repair",
    price: "₹165",
  },
  {
    image: "dove2ags.jpg",
    name: "Dove Shampoo Hairfall Rescue",
    price: "₹160",
  },
  {
    image: "dove3ags.jpg",
    name: "Dove Shampoo Colour Care",
    price: "₹170",
  },
  {
    image: "headandshouldersags.jpg",
    name: "Head And Shoulders Cool Menthol",
    price: "₹129",
  },
  {
    image: "headandshoulders2ags.jpg",
    name: "Head And Shoulders Smooth and Silky",
    price: "₹139",
  },
  {
    image: "loreal1ags.jpg",
    name: "L'oreal Paris Dream Length",
    price: "₹122",
  },
  {
    image: "loreal2ags.jpg",
    name: "L'oreal Paris Total Repair 5",
    price: "₹130",
  },
  {
    image: "loreal3ags.jpg",
    name: "L'oreal Paris Elvive Shampoo",
    price: "₹190",
  },
  {
    image: "pantene1ags.jpg",
    name: "Pantene Hairfall Control Shampoo",
    price: "₹90",
  },
  {
    image: "pantene2ags.jpg",
    name: "Pantene pro v Shampoo",
    price: "₹220",
  },
  {
    image: "pantene3ags.jpg",
    name: "Pantene Daily Moisture Renewal",
    price: "₹259",
  },
  {
    image: "patanjali1ags.jpg",
    name: "Kesh KantiNatural Hair Cleanser ",
    price: "₹90",
  },
  {
    image: "patanjali2ags.jpg",
    name: "Kesh Kanti Hair Cleanser Reetha",
    price: "₹100",
  },
  {
    image: "sunsilk1ags.jpg",
    name: "Sunsilk Stunning Black Shine Shampoo",
    price: "₹135",
  },
  {
    image: "sunsilk2ags.jpg",
    name: "Sunsilk Strong And Long Shampoo",
    price: "₹105",
  },
  {
    image: "sunsilk3ags.jpg",
    name: "Sunsilk Perfect Straight Shampoo",
    price: "₹98",
  },
  {
    image: "vatikaags.jpg",
    name: "Vatika Shampoo",
    price: "₹70",
  },
  {
    image: "conditioner1ags.jpg",
    name: "Himalaya Hair Conditioner",
    price: "₹90",
  },
  {
    image: "conditioner2ags.jpg",
    name: "Dove Hair Conditioner",
    price: "₹140",
  },
  {
    image: "conditioner3ags.jpg",
    name: "Pantene hair Conditioner",
    price: "₹120",
  },
  {
    image: "conditioner4ags.jpg",
    name: "L'oreal Paris Nourishing Conditoner",
    price: "₹95",
  },
  {
    image: "bajajalmondags.jpg",
    name: "Bajaj Almond Drops",
    price: "₹190",
  },
  {
    image: "daburamlaoilags.jpg",
    name: "Dabur Amla Hair Oil",
    price: "₹130",
  },
  {
    image: "indulekhaags.jpg",
    name: "Indulekha Hair Oil",
    price: "₹400",
  },
  {
    image: "keshkingags.jpg",
    name: "Kesh King Hair Oil",
    price: "₹275",
  },
  {
    image: "navratanoilags.jpg",
    name: "Navratan Hair Oil",
    price: "₹150",
  },
  {
    image: "niharshantiamlaags.jpg",
    name: "Nihar Shanti Amla",
    price: "₹65",
  },
  {
    image: "vatikaoilags.jpg",
    name: "Vatika Hair Oil",
    price: "₹180",
  },

  {
    image: "bodylotion1ags.jpg",
    name: "Nivea Body Milk",
    price: "₹260",
  },
  {
    image: "bodylotion2ags.jpg",
    name: "Himalaya Cocoa Butter Intensive",
    price: "₹224",
  },
  {
    image: "bodylotion3ags.jpg",
    name: "Vaseline Deep Restore",
    price: "₹200",
  },
  {
    image: "bodylotion4ags.jpg",
    name: "Joey Honey and Almonds",
    price: "₹169",
  },
  {
    image: "sofy1ags.jpg",
    name: "Sofy - 54 pads",
    price: "₹399",
  },
  {
    image: "sofy2ags.jpg",
    name: "Sofy - 7 pads ",
    price: "₹59",
  },
  {
    image: "sofy3ags.jpg",
    name: "Sofy Overnight - 7 pads",
    price: "₹200",
  },
  {
    image: "stayfree1ags.jpg",
    name: "Stayfree - 6 pads",
    price: "₹39",
  },
  {
    image: "stayfree2ags.jpg",
    name: "Stayfree - 28 pads",
    price: "₹295",
  },
  {
    image: "stayfree3ags.jpg",
    name: "Stayfree - 42 pads",
    price: "₹490",
  },
  {
    image: "whisper1ags.jpg",
    name: "Whisper Ultra Clean - 50 pads",
    price: "₹510",
  },
  {
    image: "whisper2ags.jpg",
    name: "Whisper Ultra Clean with Herbal Oil - 50 pads",
    price: "₹560",
  },
  {
    image: "whisper3ags.jpg",
    name: "Whisper - 15 pads",
    price: "₹210",
  },
  {
    image: "babylips1ags.jpg",
    name: "Baby Lips Color - Pink Lolita",
    price: "₹170",
  },
  {
    image: "babylips2ags.jpg",
    name: "Baby Lips Color - Berry Rush",
    price: "₹150",
  },
  {
    image: "babylips3ags.jpg",
    name: "Baby Lips Color - Pink Bloom",
    price: "₹190",
  },
  {
    image: "combags.jpg",
    name: "Comb",
    price: "₹30",
  },
  {
    image: "comb2ags.jpg",
    name: "Wood Comb",
    price: "₹60",
  },
  {
    image: "comb3ags.jpg",
    name: "comb",
    price: "₹190",
  },
  {
    image: "kajalags.jpg",
    name: "Herbal Kajal",
    price: "₹90",
  },
  {
    image: "iodexags",
    name: "Iodex",
    price: "₹30",
  },
  {
    image: "vicksags.jpg",
    name: "Vicks",
    price: "₹30",
  },
  {
    image: "vaselineags.jpg",
    name: "Vaseline Petroleum Jelly",
    price: "₹40",
  },
  {
    image: "vimliquidags.jpg",
    name: "Vim Liquid",
    price: "₹75",
  },
  {
    image: "scrubberags.jpg",
    name: "Scrubber",
    price: "₹30",
  },
  {
    image: "surfexcelags.jpg",
    name: "surfexcel",
    price: "₹35",
  },
  {
    image: "tideags.jpg",
    name: "Tide Bar",
    price: "₹25",
  },
  {
    image: "rinags.jpg",
    name: "Rin Bar",
    price: "₹25",
  },
  {
    image: "rubberbandsags.jpg",
    name: "Rubber",
    price: "₹10/each",
  },
  {
    image: "powder1ags.jpg",
    name: "Nivea Musk Talc",
    price: "₹99",
  },
  {
    image: "powder2ags.jpg",
    name: "Cinthol",
    price: "₹75",
  },
  {
    image: "powder3ags.jpg",
    name: "Pond's Starlight",
    price: "₹75",
  },
  {
    image: "sauceags.jpg",
    name: "Kissan Ketchup",
    price: "₹55",
  },
  {
    image: "schezwanags.jpg",
    name: "Schezwan Chutney",
    price: "₹65",
  },
]

export default function Agarwal() {
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
          Agarwal General Store
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
