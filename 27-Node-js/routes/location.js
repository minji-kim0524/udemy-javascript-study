const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url =
  "mongodb+srv://minjii:kmj30605*@cluster0.qud35ck.mongodb.net/?appName=Cluster0/locations?retryWrites=true&w=majority";

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

// 첫번째 인수: 요청을 받을 위치
// 두번째 인수: 받은 요청을 처리하는 함수
router.post("/add-location", (req, res, next) => {
  //   const id = Math.random();
  client.connect(function (err, client) {
    // MongoDB는 컬렉션과 문서로 불리는 것들과 함께 작동함
    // - 컬렉션: 레코드 표
    // - 문서: 레코드 표의 열에서 보이는 간단한 줄

    const db = client.db("locations");

    db.collection("user-locations").insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        //   console.log(r)
        res.json({ message: "Stored location!", locId: r.insertedId });
      }
    );
  });
  //   locationStorage.locations.push({
  //     id: id,
  //     address: req.body.address,
  //     coords: { lat: req.body.lat, lng: req.body.lng },
  //   });
});

router.get("/location/:lid", (req, res, next) => {
  // url에 포함된 데이터 상수에 저장
  const locationId = req.params.lid;
  client.connect(function (err, client) {
    const db = client.db("locations");

    db.collection("user-locations").findOne(
      {
        _id: new mongodb.ObjectId(locationId),
      },
      function (err, doc) {
        //   console.log(r)
        // res.json({ message: "Stored location!", locId: r.insertedId });
        if (!doc) {
          return res.status(404).json({ message: "Not found!" });
        }
        res.json({
          address: doc.address,
          coordinates: doc.coords,
        });
      }
    );
  });
  const location = locationStorage.locations.find((loc) => {
    return loc.id === locationId;
  });
});

module.exports = router;
