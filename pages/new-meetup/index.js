import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetup),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add yout own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm meetupHandler={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
