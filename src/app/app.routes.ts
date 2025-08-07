import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/about/about").then((m) => m.About),
  },
  {
    path: "resume",
    loadComponent: () => import("./pages/resume/resume").then((m) => m.Resume),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./pages/portfolio/portfolio").then((m) => m.Portfolio),
  },
];
