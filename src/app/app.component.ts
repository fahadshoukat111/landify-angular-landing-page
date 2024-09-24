import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BannerComponent } from "./components/banner/banner.component";
import { BrandComponent } from "./components/brand/brand.component";
import { MadeFeaturesComponent } from "./components/made-features/made-features.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { AchievementsComponent } from "./components/achievements/achievements.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, BrandComponent, MadeFeaturesComponent, TestimonialComponent, AchievementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'figma-to-landingpage-angular';
}
