import React from "react";
import css from "./FriendList.module.css";

const FriendListItem = (props) => {
    const {avatar, name, isOnline} = props;
    return (
        <li className={css.item} >
            {isOnline ? <span className={css.statusGreen}>Online</span> : <span className={css.statusRed}>Offline</span>}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48"/>
            <p className={css.name}>{name}</p>
        </li>)
}
export default FriendListItem;

