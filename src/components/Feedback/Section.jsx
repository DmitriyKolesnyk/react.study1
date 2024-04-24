import React from "react";
import css from "./Feedback.module.css";

const Section = ({ title, children }) => (
  <section>
    <span className={css.title}>
      {" "}
      {title} {" "}
    </span>
      {children}
  </section>
);
export default Section;
