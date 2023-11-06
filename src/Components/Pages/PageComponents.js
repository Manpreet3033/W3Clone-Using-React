import React from "react";
import "./PageComponents.css";
import { dataArray } from "./Data";

export const PageComponents = () => {
  return dataArray.map((e) => {
    return (
      <section className={`section-html bg-${e.bg}`} key={e.id}>
        <div className="section-left">
          <h1>{e.title}</h1>
          <p>{e.para}</p>
          <a href="/html" className={`bg-${e.btn1bg}`}>
            {e.btn1}
          </a>
          <a
            href="https://www.w3schools.com/videos/index.php"
            className={`bg-${e.btn2bg}`}
          >
            {e.btn2}
          </a>
          <a
            href="https://www.w3schools.com/tags/default.asp"
            className={`bg-${e.btn3bg}`}
          >
            {e.btn3}
          </a>
          <a
            href="https://campus.w3schools.com/en-in/collections/certifications/products/html-certificate"
            className={`bg-${e.btn4bg}`}
          >
            {e.btn4}
          </a>
        </div>
        <div className="section-right">
          <div className="editor-container">
            <h1 className={`${e.textcolor}`}>{e.editorheading}</h1>
            <div className={`editor ${e.textcolor}`}>
              {e.content.split("\n").map((line, index) => {
                return <div key={index}>{line}</div>;
              })}
            </div>
            <button className="editor-btn">Try it Yourself</button>
          </div>
        </div>
      </section>
    );
  });
};
