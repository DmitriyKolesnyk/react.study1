import React from 'react';
import css from "./Profile.module.css";

const Profile = () => {
    return (
            <div className={css.container}>

                <div className={css.description}>
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
                        alt="User avatar"
                        className={css.avatar}
                    />
                    <p className={css.name}>Jacques Gluke</p>
                    <p className={css.tag}>jgluke</p>
                    <p className={css.location}>Ocho Rios, Jamaica</p>
                </div>

                <ul className={css.stats}>
                    <li>
                        <span className={css.label}>Followers</span><br/>
                        <span className={css.quantity}>5603</span>
                    </li>
                    <li>
                        <span className={css.label}>Views</span><br/>
                        <span className={css.quantity}>4827</span>
                    </li>
                    <li>
                        <span className={css.label}>Likes</span><br/>
                        <span className={css.quantity}>1308</span>
                    </li>
                </ul>
            </div>
    );
};

export default Profile;