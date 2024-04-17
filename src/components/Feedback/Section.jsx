import React from "react";
import css from "./Feedback.module.css";
const Section = ({ message }) => (
    <span className={css.title}> {message} </span>
)
export default Section;