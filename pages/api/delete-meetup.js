import { MongoClient, ObjectId } from "mongodb";

//  /api/delete-meetup
// DELETE /api/delete-meetup

async function handler(req, res) {
  if (req.method === "DELETE") {
    const client = await MongoClient.connect(process.env.CONNECTION_URL);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    meetupsCollection.deleteOne({ _id: ObjectId(req.body.id) });

    //client.close();
    setTimeout(() => {
      client.close();
    }, 1500);

    res.status(200).json({ message: "Meetup deleted!" });
  }
}

export default handler;
