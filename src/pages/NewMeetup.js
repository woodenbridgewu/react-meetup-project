import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();
  function addNewMeetupHandler(meetupData) {
    fetch(
      "https://react-review-521ee-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => navigate("/"));
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
