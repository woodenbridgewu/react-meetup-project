import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function deleteMeetup() {
    fetch(
      `https://react-review-521ee-default-rtdb.firebaseio.com/meetups/${props.id}.json`,
      { method: "DELETE" }
    );
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
