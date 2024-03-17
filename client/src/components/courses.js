/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import s11 from "./images/Thumbnail/Sem-1/FOP.png";
import s12 from "./images/Thumbnail/Sem-1/Maths-1.png";
import s13 from "./images/Thumbnail/Sem-1/EOC.png";
import s14 from "./images/Thumbnail/Sem-1/EG.png";
import s15 from "./images/Thumbnail/Sem-1/EP.png";
import s16 from "./images/Thumbnail/Sem-1/ES.png";

import s21 from "./images/Thumbnail/Sem-2/OOPC.png";
import s22 from "./images/Thumbnail/Sem-2/Maths-2.png";
import s23 from "./images/Thumbnail/Sem-2/BEEE.png";
import s24 from "./images/Thumbnail/Sem-2/FME.png";
import s25 from "./images/Thumbnail/Sem-2/BCPS.png";
import s26 from "./images/Thumbnail/Sem-2/WORKSHOP.png";
import s27 from "./images/Thumbnail/Sem-2/IICT.png";

import s31 from "./images/Thumbnail/Sem-3/DSA.png";
import s32 from "./images/Thumbnail/Sem-3/Maths-3.png";
import s33 from "./images/Thumbnail/Sem-3/DBMS.png";
import s34 from "./images/Thumbnail/Sem-3/DE.png";
import s35 from "./images/Thumbnail/Sem-3/ITW.png";

import s41 from "./images/Thumbnail/Sem-4/OOPJ.png";
import s42 from "./images/Thumbnail/Sem-4/Maths-41.png";
import s43 from "./images/Thumbnail/Sem-4/OS.png";
import s44 from "./images/Thumbnail/Sem-4/COA.png";
import s45 from "./images/Thumbnail/Sem-4/POM.png";

import s51 from "./images/Thumbnail/Sem-5/AJP.png";
import s52 from "./images/Thumbnail/Sem-5/DAA.png";
import s53 from "./images/Thumbnail/Sem-5/SE.png";
import s54 from "./images/Thumbnail/Sem-5/TOC.png";
import s55 from "./images/Thumbnail/Sem-5/CN.png";
import s56 from "./images/Thumbnail/Sem-5/MAP.png";
import s57 from "./images/Thumbnail/Sem-5/Python.png";
import s58 from "./images/Thumbnail/Sem-5/SOA.png";

import s61 from "./images/Thumbnail/Sem-6/AI.png";
import s62 from "./images/Thumbnail/Sem-6/pyp.png";
import s63 from "./images/Thumbnail/Sem-6/cns.png";
import s64 from "./images/Thumbnail/Sem-6/ml.png";
import s65 from "./images/Thumbnail/Sem-6/ap.png";
import s66 from "./images/Thumbnail/Sem-6/iot.png";
import s67 from "./images/Thumbnail/Sem-6/sc.png";
import s68 from "./images/Thumbnail/Sem-6/is.png";
import s69 from "./images/Thumbnail/Sem-6/dc.png";
import s70 from "./images/Thumbnail/Sem-6/ecom.png";

// import handledarkmode from "./handledarkmode";
const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab !== null) {
      setActiveTab(parseInt(storedActiveTab, 10));
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Save the active tab index to localStorage when a tab is clicked
    localStorage.setItem("activeTab", index);
  };
  // Define data for semesters
  const semesters = [
    {
      title: "Sem 1",
      courses: [
        { title: "Fundamental Of Programming", units: 7, thumbnail: s11 },
        { title: "Engineering Mathematics – 1", units: 7, thumbnail: s12 },
        { title: "Elements Of Civil Engineering", units: 10, thumbnail: s13 },
        { title: "Engineering Graphics", units: 12, thumbnail: s14 },
        { title: "Engineering Physics", units: 10, thumbnail: s15 },
        { title: "Environmental Science", units: 5, thumbnail: s16 }
      ]
    },
    {
      title: "Sem 2",
      courses: [
        { title: "Object Oriented Programming Using 'C++'", units: 10, thumbnail: s21 },
        { title: "Engineering Mathematics – 2", units: 7, thumbnail: s22 },
        { title: "Basic Electrical and Electronics Engineering", units: 8, thumbnail: s23 },
        { title: "Fundamental Of Mechanical Engineering", units: 15, thumbnail: s24 },
        { title: "Business communication and presentation skills", units: 13, thumbnail: s25 },
        { title: "Workshop [Only Labs]", units: "#", thumbnail: s26 },
        { title: "Introduction To Information & Communication Technology", units: "#", thumbnail: s27 }
      ]
    },
    {
      title: "Sem 3",
      courses: [
        { title: "Data Structures & Algorithms", units: 6, thumbnail: s31 },
        { title: "Discrete Mathematics - 3", units: 5, thumbnail: s32 },
        { title: "Database Management Systems", units: 10, thumbnail: s33 },
        { title: "Digital Electronics", units: 7, thumbnail: s34 },
        { title: "IT Workshop", units: 7, thumbnail: s35 }
      ]
    },
    {
      title: "Sem 4",
      courses: [
        { title: "Object Oriented Programming Using Java", units: 8, thumbnail: s41 },
        { title: "Probability, Statistics and Numerical Methods", units: 7, thumbnail: s42 },
        { title: "Operating Systems", units: 7, thumbnail: s43 },
        { title: "Computer Organization & Architecture", units: 6, thumbnail: s44 },
        { title: "Principles of Management", units: 5, thumbnail: s45 }
      ]
    },
    {
      title: "Sem 5",
      courses: [
        { title: "Advanced Java Programming", units: 7, thumbnail: s51 },
        { title: "Design & Analysis of Algorithms", units: 8, thumbnail: s52 },
        { title: "Software Engineering", units: 10, thumbnail: s53 },
        { title: "Theory of Computation", units: 8, thumbnail: s54 },
        { title: "Computer Networks", units: 7, thumbnail: s55 },
        { title: "Microprocessor Architecture and Programming", units: 7, thumbnail: s56 },
        { title: "Python Programming", units: 6, thumbnail: s57 },
        { title: "Service Oriented Architecture", units: 6, thumbnail: s58 }
      ]
    },
    {
      title: "Sem 6",
      courses: [
        { title: "Artificial Intelligence", units: 8, thumbnail: s61 },
        { title: "Python Programming", units: 6, thumbnail: s62 },
        { title: "Cryptography and Network Security", units: 10, thumbnail: s63 },
        { title: "Machine Learning", units: 8, thumbnail: s64 },
        { title: "Android Programming", units: 7, thumbnail: s65 },
        { title: "Internet of Things", units: 6, thumbnail: s66 },
        { title: "Soft Computing", units: 7, thumbnail: s67 },
        { title: "Information Security", units: 7, thumbnail: s68 },
        { title: "Data Compression", units: 7, thumbnail: s69 },
        { title: "E-Commerce and E-Business", units: 7, thumbnail: s70 }
      ]
    }
  ];
  

;

  return (
    <section className="courses">
      <ul id="tabs">
        {semesters.map((semester, index) => (
          <li
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            <h3>{semester.title}</h3>
          </li>
        ))}
      </ul>

      <div className="box-container">
        {semesters[activeTab].courses.map((course, index) => (
          <div key={index} className="box">
            <div className="tutor">
              <div className="info">
                <h3 className="title">{course.title}</h3>
              </div>
            </div>
            <div className="thumb" data-title={course.title}>
              <img src={course.thumbnail} alt="" />
              <span>{course.units} Units</span>
            </div>
            <Link to={`/sem_${activeTab + 1}_${index + 1}_units`}>
              <a className="inline-btn">View Units</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
