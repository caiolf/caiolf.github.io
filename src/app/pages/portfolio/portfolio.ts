import { Component } from "@angular/core";

interface Project {
  title: string;
  description: string;
}

@Component({
  selector: "app-portfolio",
  imports: [],
  templateUrl: "./portfolio.html",
  styleUrl: "./portfolio.scss",
})
export class Portfolio {
  projects: Project[] = [];
}
