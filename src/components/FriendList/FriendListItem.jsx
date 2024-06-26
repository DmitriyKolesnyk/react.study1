import React from "react";
import css from "./FriendList.module.css";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  const statusColor = isOnline ? css.statusGreen : css.statusRed;
  return (
    <li className={css.item}>
      <span className={statusColor} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
