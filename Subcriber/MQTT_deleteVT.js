const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "<mongodb://localhost:27017>";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("NTAP_NBIoT");
    const data = database.collection("geojsons");
    // Query for all movies with a title containing the string "Santa"
    const query = { slug: "xe-1" };
    const result = await data.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);