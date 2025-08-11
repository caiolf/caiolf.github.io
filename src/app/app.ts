import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PersonalCard } from "./components/personal-card/personal-card";
import { MatTabsModule } from "@angular/material/tabs";
import { About } from "./pages/about/about";
import { Resume } from "./pages/resume/resume";
import { Portfolio } from "./pages/portfolio/portfolio";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    PersonalCard,
    MatTabsModule,
    About,
    Resume,
    Portfolio,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("caiolf.github.io");
}
