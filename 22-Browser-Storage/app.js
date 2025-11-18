// indexedDB 학습

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

// indexedDB 호출
// 프로미스 객체가 아님 -> then 사용 불필요
const dbRequest = indexedDB.open("StorageDummy", 1);

// 브라우저 교차 지원목적 -> onsuccess 이용
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  // 매개변수 위치별 의미
  // 첫번째 : 객체 저장소의 이름
  // 두번째 : 객체 저장소마다의 객체 식별자 (설정객체)

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    // 첫번째 매개변수 : 저장소 이름
    // 두번째 매개변수 : 저장소 접근모드
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1",
      title: "A First Product",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("ERROR");
};

storeBtn.addEventListener("click", () => {});

retrBtn.addEventListener("click", () => {});
