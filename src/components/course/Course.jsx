"use client";
import Image from "next/image";
import React from "react";
import course1 from "../../../public/course1.jpeg";
import "./course.scss";

const Course = () => {
  const courses = [
    {
      id: 1,
      title: "درس نظامی",
      subtitle: "علوم شرعبہ پر مشتمل 8 سالہ کو رس",
      image: course1,
    },
    {
      id: 2,
      title: "درس نظامی",
      subtitle: "علوم شرعبہ پر مشتمل 8 سالہ کو رس",
      image: course1,
    },
    {
      id: 3,
      title: "درس نظامی",
      subtitle: "علوم شرعبہ پر مشتمل 8 سالہ کو رس",
      image: course1,
    },
    {
      id: 4,
      title: "درس نظامی",
      subtitle: "علوم شرعبہ پر مشتمل 8 سالہ کو رس",
      image: course1,
    },
  ];

  return (
    <div className="Course">
      <h1>کورسز</h1>
      <div className="container">
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-3">
              <div className="Course-content">
                <div className="course-content-img"></div>
                <div className="Course-content-body">
                  <h6>{course.title}</h6>
                  <h5>{course.subtitle}</h5>
                  <button>مزید جانیے</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
