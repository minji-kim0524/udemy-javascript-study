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
  res.json({ message: "Stored location!", locId: id });
});

router.get("/location/:lid", (req, res, next) => {
  // url에 포함된 데이터 상수에 저장
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find((loc) => {
    return loc.id === locationId;
  });
  if (!location) {
    return res.status(404).json({ message: "Not found!" });
  }
  res.json({ address: location.address, coordinates: location.coords });
});

module.exports = router;
