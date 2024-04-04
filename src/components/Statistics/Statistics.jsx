import React from 'react';
import css from "./Statistics.module.css";

const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title ? <h2 className="title">{title}</h2> : <span>Заголовок не пришел</span>}

            <ul className={css.stats}>
                {stats.map(stat => (
                    <li className={css.item}
                        style={{background:randomColor()}}
                        key={stat.id}>{stat.name}
                        <span className="label">{stat.label}</span><br/>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}

            </ul>
        </section>
    )
}

function randomColor() {
    const color = '#' + Math.random().toString(16).slice(3, 9);
    return color;
}
export default Statistics;