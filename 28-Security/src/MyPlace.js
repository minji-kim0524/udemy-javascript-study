import { Map } from "./UI/Map";
import sanitizeHtml from "sanitize-html";

// 안전성 검사(sanitize)
// - 가능한 서버 측에서 이루어져야 함

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.innerHTML = sanitizeHtml(address);
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
  lat: parseFloat(queryParams.get("lat")),
  lng: +queryParams.get("lng"),
};
const address = queryParams.get("address");
new LoadedPlace(coords, address);
