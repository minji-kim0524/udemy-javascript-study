import * as _ from "loadash";
import { ProjectList } from "./App/ProjectList";

// 전역객체1. window
// window.DEFAULT_VALUE = "MAX";

// 전역객체2. globalThis (this 대신사용)
// - 브라우저 외에도 Node.js 에서도 사용가능 -> 어디에서나 사용가능
// - undefined 표시되지않음이 보장됨
globalThis.DEFAULT_VALUE = "MAX";

console.log(_.difference([0, 1], [1, 2]));

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/Utility/Analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
