import React from "react";

// Components
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Men Nike Blazer Mid Suede",
    price: 129.99,
    imageURL: "/img/sneakers/1.jpg",
  },
  {
    title: "Men Nike Air Max 270",
    price: 129.99,
    imageURL: "/img/sneakers/2.jpg",
  },
  {
    title: "Men Nike Blazer Mid Suede",
    price: 84.99,
    imageURL: "/img/sneakers/3.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider",
    price: 89.99,
    imageURL: "/img/sneakers/4.jpg",
  },
  {
    title: "Men Under Armour Curry 8",
    price: 151.99,
    imageURL: "/img/sneakers/5.jpg",
  },
  { title: "Men Nike Kyrie 7", price: 112.99, imageURL: "/img/sneakers/6.jpg" },
  {
    title: "Men Jordan Air Jordan 11",
    price: 107.99,
    imageURL: "/img/sneakers/7.jpg",
  },
  {
    title: "Men Nike LeBron XVIII",
    price: 164.99,
    imageURL: "/img/sneakers/8.jpg",
  },
  {
    title: "Men Nike Lebron XVIII Low",
    price: 139.99,
    imageURL: "/img/sneakers/9.jpg",
  },
  {
    title: "Men Nike Kyrie Flytrap IV",
    price: 112.99,
    imageURL: "/img/sneakers/10.jpg",
  },
];

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
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
