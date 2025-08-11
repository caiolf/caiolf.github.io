import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
interface Persona {
  name: string;
  birthYear: number;
  email: string;
  title: string;
}
interface Location {
  city: string;
  country: string;
}
interface DataItem {
  icon: string;
  label: string;
  value: string;
}
interface SocialLink {
  icon: string;
  url: string;
}

@Component({
  selector: "app-personal-card",
  imports: [MatExpansionModule],
  templateUrl: "./personal-card.html",
  styleUrl: "./personal-card.scss",
})
export class PersonalCard {
  me: Persona = {
    name: "Caio Ferraresi",
    birthYear: 1999,
    email: "caio.lferraresi@gmail.com",
    title: "Web Developer",
  };
  location: Location = {
    city: "Italy",
    country: "Cesena",
  };

  dataItems: DataItem[] = [
    {
      icon: "mail",
      label: "EMAIL",
      value: this.me.email,
    },
    {
      icon: "location_on",
      label: "LOCATION",
      value: `${this.location.city}, ${this.location.country}`,
    },
  ];

  socialLinks: SocialLink[] = [
    {
      icon: "devicon-github-original",
      url: "https://github.com/caiolf",
    },
    {
      icon: "devicon-linkedin-plain",
      url: "https://www.linkedin.com/in/caiolf/",
    },
  ];
}
