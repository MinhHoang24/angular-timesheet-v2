import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));