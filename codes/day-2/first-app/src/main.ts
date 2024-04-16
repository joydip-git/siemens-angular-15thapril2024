// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platformObject: PlatformRef = platformBrowserDynamic()
platformObject
  .bootstrapModule(AppModule)
  .then(
    (moduleRef: NgModuleRef<AppModule>) => console.log(moduleRef.instance)
  )
  .catch(e => console.log(e))
