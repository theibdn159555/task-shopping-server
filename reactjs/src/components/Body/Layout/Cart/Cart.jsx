import React from "react";

import "./Cart.css";

function Cart(props) {
  const continueShopping = () => {
    window.location.href = "/";
  };

  return (
    <div className="cartside">
      <div class="card">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                   44.00 &#8363;<span class="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/ba3tvGm.jpg"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                   44.00 &#8363;<span class="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/pHQ3xT3.jpg"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                   44.00 &#8363;<span class="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div class="back-to-shop">
              <a href="/">&#8592;</a>
              <span class="text-muted">Back to shop</span>
            </div>
          </div>
          <div class="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div class="row">
              <div class="col" style={{ paddingLeft: 0 }}>
                ITEMS 3
              </div>
              <div class="col text-right"> 132.00&#8363;</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option class="text-muted">
                  Standard-Delivery- 5.00
  &#8363;              </option>
              </select>
              <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
            </form>
            <div
              class="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div class="col">TOTAL PRICE</div>
              <div class="col text-right"> 137.00&#8363;</div>
            </div>
            <button class="btn">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
