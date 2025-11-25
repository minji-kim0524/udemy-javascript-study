const express = require("express");

const router = express.Router();

const locationStorage = {
  locations: [],
};

// 첫번째 인수: 요청을 받을 위치
// 두번째 인수: 받은 요청을 처리하는 함수
router.post("/add-location", (req, res, next) => {
  const id = Math.random();
  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  res.json({ messgae: "Stored location!", locId: id });
});

router.get("/location", (req, res, next) => {});

module.exports = router;
