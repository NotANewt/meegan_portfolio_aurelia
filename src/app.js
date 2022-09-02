require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/bootstrap.bundle");

import { PLATFORM } from "aurelia-pal";

export class App {
  configureRouter(config, router) {
    config.title = "Aurelia";

    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("./components/home/home"),
        nav: true,
        title: "Home",
      },
      {
        route: "about",
        name: "about",
        moduleId: PLATFORM.moduleName("./components/about/about"),
        nav: true,
        title: "About",
      },
    ]);

    this.router = router;
  }
}
