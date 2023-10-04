import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Component } from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
