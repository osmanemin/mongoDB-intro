var MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const url = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db(dbName);

  // --- FIND ---
  //  dbo.collection(collectionName)
  // .findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // --- QUERY ---
  //   const query = { name: "osman" };
  //   dbo
  //     .collection(collectionName)
  //     .find(query)
  //     .toArray(function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //       db.close();
  //     });

  // --- INSERT ---
  //   var myobj = { name: "Osman", id: "6161" };
  //   dbo.collection(collectionName).insertOne(myobj, function (err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
  //   });

  // --- SORT ---
  //   var mysort = { name: 1 };
  //   dbo
  //     .collection(collectionName)
  //     .find()
  //     .sort(mysort)
  //     .toArray(function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //       db.close();
  //     });

  // --- DELETE ---
  //   const query = { name: "Osman" };
  //   dbo.collection(collectionName).deleteOne(query, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  //   });

  // --- DROP COLLECTION ---
  //   const query = { name: "Osman" };
  //   dbo.collection(collectionName).drop(function(err, delOK) {
  //     if (err) throw err;
  //     if (delOK) console.log("Collection deleted");
  //     db.close();
  //   });
});
