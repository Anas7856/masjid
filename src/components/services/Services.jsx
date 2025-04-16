"user client";
import React from "react";
import "./services.scss";
import servies1Logo from "../../../public/services1.png";
import people from "../../../public/people.png";
import books from "../../../public/books.png";

import Image from "next/image";

const Services = () => {
  return (
    <div className="Services">
      <div className="container">
        <div className="row gy-3">
          <div className="col-12 co-md-12 col-lg-6">
            <div className="services-content active">
              <Image height={70} width={70} src={servies1Logo} alt="n/a" />
              <h2>
                تعارفِ جامعہ بنوری ٹاؤن <br />
                جامعہ اور اس کی شاخیں ایک نظر میں
              </h2>
            </div>
          </div>
          <div className="col-12 co-md-12 col-lg-6">
            <div className="services-content">
              <Image height={70} width={70} src={servies1Logo} alt="n/a" />
              <h2 className="active-text">
                بانی جامعہ حضرت بنوری رحمہ اللہ
                <br />
                تعارف، علمی و تحقیقی مقالات
              </h2>
            </div>
          </div>
          <div className="col-12 co-md-12 col-lg-6">
            <div className="services-content">
              <Image height={70} width={70} src={people} alt="n/a" />
              <h2 className="active-text">
                محتمم
                <br />
                بانی جامعہ حضرت بنوری رحمہ اللہ
              </h2>
            </div>
          </div>
          <div className="col-12 co-md-12 col-lg-6">
            <div className="services-content last-card">
              <Image height={70} width={70} src={books} alt="n/a" />
              <h2 className="active-text">
                دارالافتاء
                <br />
                آپ کے مسائل اور ان کا حل
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
