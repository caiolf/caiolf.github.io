import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PersonalCard } from "./components/personal-card/personal-card";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, PersonalCard],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("caiolf.github.io");
}
