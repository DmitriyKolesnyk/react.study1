import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
<span>Good: {good}</span>
<br/>
<span>Neutral: {neutral}</span>
<br/>
<span>Bad: {bad}</span>
<br/>
<span>Total: {total}</span>
<br/>
<span>Positive feedback: {positivePercentage} %</span>
    </div>
)

export default Statistics;
