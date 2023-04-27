import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, SplashScreenComponent, NgIf],
  selector: 'metden-tech-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isVisibleSplashScreen = true;
  ngOnInit() {
    setTimeout(() => (this.isVisibleSplashScreen = false), 6000);
  }
}
