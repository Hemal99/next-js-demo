import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://hemal:19991020@cluster0.gvx2w.mongodb.net/meetups"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    return res.status(201).json({
      message: "meetup inserted",
    });
  }
}

export default handler;
