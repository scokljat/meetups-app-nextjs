import { MongoClient } from "mongodb";

//  /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.CONNECTION_URL);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = meetupsCollection.insertOne(data);
    console.log(result);

    //client.close();
    setTimeout(() => {
      client.close();
    }, 1500);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
