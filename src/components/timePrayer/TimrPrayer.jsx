"use client";
import React from "react";
import "./TimrPrayer.scss";
import Image from "next/image";
import masjid from "../../../public/masjid.png";
import layer from "../../../public/layer.png";

const TimrPrayer = () => {
  const prayerTimes = [
    { id: 1, name: "فجر", time: "05:30 AM" },
    { id: 2, name: "ظہر", time: "01:15 PM" },
    { id: 3, name: "عصر", time: "05:15 PM" },
    { id: 4, name: "مغرب", time: "06:35 PM" },
    { id: 5, name: "عشاء", time: "08:15 PM" },
  ];

  return (
    <div className="TimrPrayer">
      <h1>نماز کے اوقات</h1>
      <div className="container">
        <div className="row">
          {prayerTimes.map((prayer) => (
            <div key={prayer.id} className="col-12 col-md-4 col-lg-2">
              <div className="time-prayer-content">
                <h4>{prayer.name}</h4>
                <h5>{prayer.time}</h5>
              </div>
            </div>
          ))}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="timePrayer-img">
              <Image src={masjid} width={150} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimrPrayer;
