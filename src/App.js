import React from "react";

// Components
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />

          {/* <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unliked" />
            </div>

            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="sneakers1"
            />
            <h5>Men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div> */}

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="sneakers2"
            />
            <h5>Men Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="sneakers3"
            />
            <h5>Men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>84,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="sneakers4"
            />
            <h5>Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>89,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="sneakers5"
            />
            <h5>Men Under Armour Curry 8</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>151,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/6.jpg"
              alt="sneakers6"
            />
            <h5>Men Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>112,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/7.jpg"
              alt="sneakers7"
            />
            <h5>Men Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>107,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/8.jpg"
              alt="sneakers8"
            />
            <h5>Men Nike LeBron XVIII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>164,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/9.jpg"
              alt="sneakers9"
            />
            <h5>Men Nike Lebron XVIII Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>139,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/10.jpg"
              alt="sneakers10"
            />
            <h5>Men Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>112,99 €</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
