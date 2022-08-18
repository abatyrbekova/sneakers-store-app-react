function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Bag
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men Nike Air Max 270</p>
              <b>129,99 €</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/4.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Puma X Aka Boku Future Rider</p>
              <b>89,99 €</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Summary:</span>
              <div></div>
              <b>219,98 €</b>
            </li>
            <li>
              <span>Taxes 5%:</span>
              <div></div>
              <b>11 €</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
