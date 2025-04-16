"use client";
import "./question.scss";
import React from "react";

const Question = () => {
  const questions = [
    {
      id: 1,
      date: "25-02-2024",
      title: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      footerTitle: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      moreText: "مزید جانیۓ",
    },
    {
      id: 2,
      date: "25-02-2024",
      title: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      footerTitle: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      moreText: "مزید جانیۓ",
    },
    {
      id: 3,
      date: "25-02-2024",
      title: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      footerTitle: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      moreText: "مزید جانیۓ",
    },
    {
      id: 4,
      date: "25-02-2024",
      title: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      footerTitle: "جامعہ کے فتاویٰ اور دیگر مواد کو کسی دوسرے فورم پر",
      moreText: "مزید جانیۓ",
    },
  ];
  return (
    <div className="Question">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="question-content">
              <div className="question-content-header">
                <h1> سوالات</h1>
              </div>
              <div className="question-content-body">
                {questions.map((q) => (
                  <div key={q.id} className="question-item mb-4">
                    <h4>تاریخ: {q.date}</h4>
                    <h2>{q.title}</h2>
                    <div className="question-content-footer">
                      <h5>{q.footerTitle}</h5>
                      <h6>{q.moreText}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
