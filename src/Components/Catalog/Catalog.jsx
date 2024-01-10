import React, { useState } from "react";
import { fylterData, products } from "./mapData";
import "./Catalog.css";

export const Catalog = () => {
  const [data, setData] = useState(products);

  const FBP = (i) => {
    console.log(
      setData(
        products.filter(
          (item) =>
            item.price >= i.split("-")[0] && item.price <= i.split("-")[1]
        )
      )
    );
  };

  const FBS = (i) => {
    setData(products.filter((item) => item.size === i));
  };
  return (
    <div className="main catalog">
      <div className="filter">
        <h1>Fylter by</h1>
        <span className="line"></span>
        <h1>Price</h1>
        {fylterData.Price.map((i, index) => (
          <label style={{ display: "flex", flexDirection: "row" }} key={index}>
            <input type="radio" name="ccc" onClick={() => FBP(i)} key={index} />
            <p className="btw">
              <span> ${i}</span>
              <span>
                (
                {
                  products.filter(
                    (item) =>
                      item.price >= i.split("-")[0] &&
                      item.price <= i.split("-")[1]
                  ).length
                }
                )
              </span>
            </p>
          </label>
        ))}
        <span className="line"></span>
        <h1>Size</h1>
        {fylterData.Size.map((i, index) => (
          <label style={{ display: "flex", flexDirection: "row" }} key={index}>
            <input type="radio" name="ccc" onClick={() => FBS(i)} key={index} />
            <p className="btw">
              {i}
              <span>({products.filter((item) => item.size === i).length})</span>
            </p>
          </label>
        ))}
        <span className="line"></span>
        <button onClick={() => setData(products)}>Clear</button>
      </div>
      <span className="CL"></span>
      <div className="products">
        {data?.map((i, index) => (
          <div className="product" key={index}>
            <img src={i.images[0]} alt="" className="prImg" />
            <section>
              <h1>{i.title}</h1>
              <h2>{i.price}$</h2>
            </section>
            <p>{i.description}</p>
            <img src={require("../../Images/star-rating.jpg")} alt="" />
            <button>Choose options</button>
          </div>
        ))}
      </div>
    </div>
  );
};
