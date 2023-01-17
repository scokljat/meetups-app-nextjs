import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./MeetupDetail.module.css";
import NewMeetupForm from "./NewMeetupForm";

function MeetupDetail(props) {
  const [editIsClicked, setEditIsClicked] = useState(false);
  const router = useRouter();

  async function deleteHandler() {
    const response = await fetch("/api/delete-meetup", {
      method: "DELETE",
      body: JSON.stringify({ id: props.id }),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/");
  }

  return (
    <>
      {editIsClicked ? (
        <NewMeetupForm isEdit={true} setEditIsClicked={setEditIsClicked} />
      ) : (
        <section className={classes.detail}>
          <div className={classes.buttonContainer}>
            <button onClick={() => setEditIsClicked(!editIsClicked)}>
              Edit
            </button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </section>
      )}
    </>
  );
}

export default MeetupDetail;
