import FriendListItem from "./FriendListItem.jsx";
import css from "./FriendList.module.css";
import React from 'react';
import friends from "../../api/friends.json"

const FriendList = () => {
    return (
        <ul className={css.friendList} >
            {friends.map(friend => {
                return <FriendListItem
                    // key={friend.id}
                    avatar = {friend.avatar}
                    name = {friend.name}
                    isOnline = {friend.isOnline}
                />
            })}
        </ul>
    );
};

export default FriendList;
