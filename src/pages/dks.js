import React from "react"
import Layout from "../components/Layout/Layout"
import { ArrowLeft, Cart } from "react-bootstrap-icons"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const Items = [
  {
    image: "gate1bbc.jpg",
    name: "GATE 2023 : Computer Science and Information Technology - 33 Years' Topic wise Previous Solved Papers by GKP",
    price: "₹750",
  },
  {
    image: "gate2bbc.jpg",
    name: "GATE 2023 : Computer Science and Information Technology - Guide by GKP",
    price: "₹1125",
  },
  {
    image: "gate3bbc.jpg",
    name: "Hand Book of Civil Engineering By GKP.  (Paperback, Praveen Dwivedi, Prachi Bajpai)",
    price: "₹495",
  },
  {
    image: "gate4bbc.jpg",
    name: "GATE 2023 : Electrical Engineering - Guide by GKP",
    price: "₹1175",
  },
  {
    image: "gate5bbc.jpg",
    name: "GATE 2023 : Electrical Engineering - Solved Papers 2000-2022 by GKP",
    price: "₹495",
  },
  {
    image: "gate6bbc.jpg",
    name: "GATE 2023 : Mechanical Engineering - 27 Years' Chapter-wise Solved Papers (1996-2022) By GKP",
    price: "₹495",
  },
  {
    image: "gate7bbc.jpg",
    name: "GATE 2023 : Civil Engineering - 27 Years' Chapter-wise Solved Papers (1996-2022) by GKP",
    price: "₹525",
  },
  {
    image: "gate8bbc.jpg",
    name: "Gate 2021 Aerospace Engineering 14 Years' Section-Wise Solved Paper ",
    price: "₹550",
  },
  {
    image: "gate9bbc.jpg",
    name: "GATE 2022 : Mathematics - Guider",
    price: "₹750",
  },
  {
    image: "gate10bbc.jpg",
    name: "GATE 2022 - Chemistry - Solved Papers (2000-2021) By GKP.",
    price: "₹370",
  },
  {
    image: "neet1bbc.jpg",
    name: "34 Years Chapterwise Topicwise Solved Papers NEET Biology 2022",
    price: "₹325",
  },

  {
    image: "neet2bbc.jpg",
    name: "40 Days Crash Course for NEET Chemistry",
    price: "₹390",
  },
  {
    image: "neet3bbc.jpg",
    name: "40 Days Crash Course for NEET Physics",
    price: "₹390",
  },
  {
    image: "neet4bbc.jpg",
    name: "Kvpy 12 Years Solved Papers 2020-2009 Stream Sb/Sx ",
    price: "₹305",
  },
  {
    image: "neet5bbc.jpg",
    name: "The Big Book of Biology for Neet",
    price: "₹525",
  },
  {
    image: "upsc1bbc.jpg",
    name: "UPSC New Syllabus & Tips to Crack IAS Preliminary and Mains Exam with Rapid GK 2019 3rd Edition (English, Electronic book text, Experts Disha)",
    price: "₹150",
  },
  {
    image: "upsc2bbc.jpg",
    name: "TOPPERS' STUDY HACKS  (English, Paperback, Agarwal Avinash)",
    price: "₹249",
  },

  {
    image: "upsc3bbc.jpg",
    name: "151 Essays for IAS/ PCS & other Competitive Exams 3rd Edition",
    price: "₹320",
  },
  {
    image: "upsc4bbc.jpg",
    name: "International Relations - Interests & Challenges for Civil Services Exams",
    price: "₹350",
  },
  {
    image: "upsc5bbc.jpg",
    name: "Geography NCERT PLUS Objective & Subjective Question Bank for UPSC CSE & State PSC Prelim & Main Exams",
    price: "₹330",
  },
  {
    image: "upsc6bbc.jpg",
    name: "10000+ Objective General Studies MCQs with Explanatory Notes & Free Mega Yearbook 2021 - 3rd Edition",
    price: "₹990",
  },
  {
    image: "upsc7bbc.jpg",
    name: "History, Art & Culture NCERT PLUS Objective & Subjective Question Bank for UPSC CSE & State PSC Prelim & Main Exams",
    price: "₹320",
  },
  {
    image: "afcatbbc.jpg",
    name: "Afcat (Flying Technical & Ground Duty Branch) 2022",
    price: "₹395",
  },
  {
    image: "navy.jpg",
    name: "Indian Navy Secondary SSR Guide 2019",
    price: "₹265",
  },
  {
    image: "armybbc.jpg",
    name: "Indian Army Ner General Duty 2019 ",
    price: "₹140",
  },
  {
    image: "pilotbbc.jpg",
    name: "Bhartiya Vayu Sena Airman Group 'X' Technical Trades 2020  (Hindi, Paperback, unknown)",
    price: "₹295",
  },
  {
    image: "bbc1.jpg",
    name: "The Psychology of Money  (English, Paperback, Housel Morgan)",
    price: "₹339",
  },
  {
    image: "bbc2.jpg",
    name: "Great Stories for Children  (English, Paperback, Bond Ruskin)",
    price: "₹122",
  },
  {
    image: "bbc3.jpg",
    name: "Learning How To Fly - Life Lessons for the Youth  (English, Paperback, Kalam Abdul A. P. J.)",
    price: "₹195",
  },
  {
    image: "bbc4.jpg",
    name: "How to Win Friends and Influence People - The First and Still the Best Book of Its kind on Self-Help  (English, Paperback, Carnegie Dale)",
    price: "₹150",
  },
  {
    image: "bbc5.jpg",
    name: "Everything I Never Told You  (English, Paperback, Pandey Ajay K.)",
    price: "₹199",
  },
  {
    image: "bbc6.jpg",
    name: "The Power of Your Subconscious Mind  (English, Paperback, Murphy Joseph)",
    price: "₹125",
  },
  {
    image: "bbc7.jpg",
    name: "How I Taught My Grand Mother To Read  (English, Paperback, Sudha Murthy,)",
    price: "₹250",
  },

  {
    image: "bbc9.jpg",
    name: "Attitude Is Everything  (English, Paperback, Keller Jeff)",
    price: "₹199",
  },
  {
    image: "bbc10.jpg",
    name: "Think Like a Monk 1st edition - Train your Mind for Peace and Purpose Every Day  (English, Paperback, Jay Shetty)",
    price: "₹499",
  },
  {
    image: "bbc11.jpg",
    name: "Karma  (English, Paperback, Sadhguru)",
    price: "₹299",
  },

  {
    image: "bbc13.jpg",
    name: "The Elephant in the Womb  (English, Paperback, Koechlin Kalki)",
    price: "₹399",
  },
  {
    image: "bbc14.jpg",
    name: "The Black Island  (English, Paperback, Herge)",
    price: "₹550",
  },
  {
    image: "bbc15.jpg",
    name: "The Crab with the Golden Claws  (English, Paperback, Herge)",
    price: "₹550",
  },
  {
    image: "bbc16.jpg",
    name: "The Graveyard Book  (English, Paperback, Gaiman Neil)",
    price: "₹299",
  },
  {
    image: "bbc17.jpg",
    name: "Topi Rockets from Thumba  (English, Paperback, Raman Menaka)",
    price: "₹229",
  },
  {
    image: "bbc18.jpg",
    name: "What If?  (English, Paperback, Munroe Randall)",
    price: "₹499",
  },
  {
    image: "bbc19.jpg",
    name: "The Girl in Room 105  (English, Paperback, Bhagat Chetan)",
    price: "₹199",
  },
  {
    image: "bbc20.jpg",
    name: "Objective General English  (English, Paperback, Bakshi S.P.)",
    price: "₹285",
  },
  {
    image: "pencilbbc.jpg",
    name: "Apsara Absolute Extra Dark Pencils - Pack of 10",
    price: "₹70",
  },
  {
    image: "eraserbbc.jpg",
    name: "Apsara Non Dust Jumbo Erasers - Pack of 20",
    price: "₹100",
  },
  {
    image: "colorbbc.jpg",
    name: "Faber-Castell Triangular Colour Pencils - Pack of 24 (Assorted)",
    price: "₹169",
  },
  {
    image: "color2bbc.jpg",
    name: "Faber-Castell Connector Pen Set - Pack of 25 (Assorted)",
    price: "₹155",
  },
  {
    image: "coloringbookbbc.jpg",
    name: "Motivation- Colouring Book for Adults: Adult Colouring Book for Peace & Relaxation",
    price: "₹120",
  },
  {
    image: "pen1bbc.jpg",
    name: "Stic 25 Fineliner Mandala Doodle Colouring Fine Liner Point 0.5 mm Pens",
    price: "₹70",
  },
  {
    image: "brush1bbc.jpg",
    name: "KABEER ART® Short Black Handle Synthetic Mix Artist Paint Brush Set, 5 Pieces",
    price: "₹550",
  },
  {
    image: "paintbbc.jpg",
    name: "Camel Camlin Kokuyo Acrylic Color Box - 9ml Tubes, 12 Shades",
    price: "₹285",
  },

  {
    image: "notebook2bbc.jpg",
    name: "Classmate Premium 6 Subject Notebook - A4, Soft Cover, 300 Pages, Single Line",
    price: "₹145",
  },
  {
    image: "pencilbagbbc.jpg",
    name: "Pencil Case Large Capacity Pencil Pouch Pen Bag",
    price: "₹300",
  },
]

export default function Dks() {
  return (
    <Layout>
      <div className="container text-center py-3">
        <button type="button" class="btn backbutton float-start">
          <Link to="/station">
            <ArrowLeft className="mx-auto" size="30" />
            <b> BACK</b>
          </Link>
        </button>
        <h2 className="pb-2 border-bottom text-center text-light">
          D. K. Stationery
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
