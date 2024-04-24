import React from "react";
import css from "./Feedback.module.css";

const Notification = ({ message }) => (
    <span className={css.title}> {message} </span>
)
export default Notification;