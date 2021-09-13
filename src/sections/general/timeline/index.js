import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import "./timeline.css";
import icon from "./../../../assets/images/TR LOGO new.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Timeline = (props) => {
  const { items } = props;
  
  const animateFromTo = (elem, direction) => {
    const offset = 1000;
    let x = 0;
    let y = direction * offset;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem);
        },
        onEnterBack: function () {
          animateFromTo(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="timeline">
        <ul>
          {items.map((te, idx) => {
            return (
              <li key={`${te.title}_${te.date}`}>
                <div className="content">
                  <h3
                    className={`animate ${
                      idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
                    }`}
                  >
                    {te.title}
                  </h3>
                  <p
                    className={`animate ${
                      idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
                    }`}
                  >
                    {te.description}
                  </p>
                </div>
                <div
                  className={`time animate ${
                    idx % 2 === 0 ? "slide_from_right" : "slide_from_left"
                  }`}
                >
                  <h4>{te.date}</h4>
                </div>
              </li>
            );
          })}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </div>
  );
};

export default Timeline; 