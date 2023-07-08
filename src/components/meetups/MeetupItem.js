import React, { useContext, useState } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const [isDeleted, setIsDeleted] = useState(false); // 添加状态isDeleted，默认为false

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function deleteMeetup() {
    fetch(
      `https://react-review-521ee-default-rtdb.firebaseio.com/meetups/${props.id}.json`,
      { method: "DELETE" }
    )
      .then(() => {
        setIsDeleted(true); // 在删除成功后设置isDeleted为true
      })
      .catch((error) => {
        console.error("Error deleting meetup:", error);
      });
  }

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  if (isDeleted) {
    return null; // 如果isDeleted为true，直接返回null，不渲染该项
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button
            className={classes.tofavorites}
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
          {props.showDeleteButton && (
            <button className={classes.delete} onClick={deleteMeetup}>
              Delete
            </button>
          )}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
