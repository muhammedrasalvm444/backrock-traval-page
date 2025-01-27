import React from "react";
import Title from "./Title";
import { tours } from "../constants";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subTitle={"tours"} />

      <div className="section-center featured-center">
        {tours?.map((item) => (
          <article className="tour-card" key={item?.id}>
            <div className="tour-img-container">
              <img src={item?.image} className="tour-img" alt="" />
              <p className="tour-date">{item?.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{item?.title}</h4>
              </div>
              <p>{item?.cost}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {item?.location}
                </p>
                <p>{item?.duration} days</p>
                <p>from {item?.cost}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tours;
