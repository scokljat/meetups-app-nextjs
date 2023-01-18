import { MongoClient, ObjectId } from "mongodb";

//  /api/edit-meetup
// PUT /api/edit-meetup

async function handler(req, res) {
  if (req.method === "PUT") {
    const client = await MongoClient.connect(process.env.CONNECTION_URL);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.updateOne(
      { _id: ObjectId(req.body.id) },
      { $set: req.body }
    );

    console.log(selectedMeetup);
    //client.close();
    setTimeout(() => {
      client.close();
    }, 1500);

    res.status(200).json({ message: "Meetup updated!" });
  }
}

export default handler;
