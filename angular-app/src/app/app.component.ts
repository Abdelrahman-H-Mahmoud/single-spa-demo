import { Component, Inject } from '@angular/core';
import { assetUrl } from '../single-spa/asset-url';
import { APP_BASE_HREF } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  angularImg=assetUrl("angular.svg");
}
