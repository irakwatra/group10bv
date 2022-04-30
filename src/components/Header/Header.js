import React from "react"
import { Link } from "gatsby" //to avoid refreshing on each click
import {
  House,
  Person,
  Basket,
  CupStraw,
  Basket3,
  Pen,
  Cart,
  FileMedical,
  Shop,
} from "react-bootstrap-icons"

class Header extends React.Component {
  state = {
    items: 0,
  }

  updateItemTotal = qty => {
    this.setState({ items: qty })
  }

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count()
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe("cart.closed", () => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe("cart.ready", data => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })
    }
  }

  componentWillUnmount() {
    window.Snipcart.unsubscribe("cart.closed")
    window.Snipcart.unsubscribe("cart.ready")
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar header1 py-3 mx-auto justify-content-center"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
            PROJECT 2022
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="d-grid gap-2 d-md-flex justify-content-center mx-auto me-2">
                <Link to="/">
                  <button type="button" class="btn button11">
                    <House className="mx-auto" size="30" />
                    <b>Home</b>
                  </button>
                </Link>
              </div>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end me-2">
                <Link to="/shop">
                  <button type="button" class="btn button10">
                    <Shop className="mx-auto" size="30" />
                    <b>Sample Shop</b>
                  </button>
                </Link>
              </div>

              <div class="btn-group mx-auto me-2">
                <button type="button" class="btn button6">
                  <Link to="/foodcorner">
                    <CupStraw className="mx-auto" size="30" />
                    <b>Food Corner</b>
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn button7 dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwari">Mukteshwari</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/annapurna">Annapurna</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/spicybite">Spicy Bite</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shanus">Shanus</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-2">
                <button type="button" class="btn button8">
                  <Link to="/grocery">
                    <Basket3 className="mx-auto" size="30" />
                    <b>Grocery</b>
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn button9 dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/agarwal">Agarwal General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shreeshakti">Shree Shakti General Store</Link>
                    </a>
                  </li>
                  {/* <li>
                    <a class="dropdown-item">
                      <Link to="/rohit">Rohit Greens And Juice Point</Link>
                    </a>
                  </li> */}
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwarinewmarket">
                        Mukteshwari General Store
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-2">
                <button type="button" class="btn button4">
                  <Link to="/station">
                    <Pen className="mx-auto" size="30" />
                    <b>Stationery</b>
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn button5 dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bbc">Banasthali Book Center</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/dks">D.K. Stationery</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-2">
                <button class="btn button2">
                  <Link to="/pharmacy">
                    <FileMedical className="mx-auto" size="30" />
                    <b>Pharmacy</b>
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn button3 dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bhadauriyamed">Bhadauriya Medical Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/maheshmed">Mahesh Medical Store</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="d-grid gap-2 d-md-flex justify-content me-2 float-end">
                <div className="d-grid gap-2 d-md-flex justify-content-center mx-auto me-2">
                  <Link to="/signup">
                    <button className="btn button1">
                      <Person size="30" />
                      <b>My Account</b>
                    </button>
                  </Link>
                </div>
              </div>
            </ul>

            <div className="snipcart-summary">
              <button className="btn btn-disabled snipcart-checkout">
                {" "}
                <Cart fill="#ffff" size="30" />
              </button>

              <strong className="badge bg-light text-dark">
                {this.state.items}
              </strong>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
