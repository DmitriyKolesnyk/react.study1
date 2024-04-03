import React from 'react';
import css from "./Profile.module.css";
// import user from "src/api/user.json"

const Profile = ({username, tag, location, stats, avatar}) => {
    return (
            <div className={css.container}>

                <div className={css.description}>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className={css.avatar}
                    />
                    <p className={css.name}>{username}</p>
                    <p className={css.tag}>{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>

                <ul className={css.stats}>
                    <li>
                        <span className={css.label}>Followers</span><br/>
                        <span className={css.quantity}>{stats.followers}</span>
                    </li>
                    <li>
                        <span className={css.label}>Views</span><br/>
                        <span className={css.quantity}>{stats.views}</span>
                    </li>
                    <li>
                        <span className={css.label}>Likes</span><br/>
                        <span className={css.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
    );
};

export default Profile;