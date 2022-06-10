import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import NgxScrollPositionRestorationModule
import { NgxScrollPositionRestorationModule } from 'ngx-scroll-position-restoration';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**
     * Does not seem to work.
     * 
     * Error: "Error: StaticInjectorError(AppModule)[NgxScrollPositionRestorationService -> Router]: 
  StaticInjectorError(Platform: core)[NgxScrollPositionRestorationService -> Router]: 
    NullInjectorError: No provider for Router!"
     */
    NgxScrollPositionRestorationModule.forRoot({
      debug: true
    }) // Import NgxScrollPositionRestorationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
