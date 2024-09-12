// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { AppModule } from "./app/app.module";

// platformBrowserDynamic().bootstrapModule(AppModule);


// Would work only if the AppComponent was a standalone component
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
