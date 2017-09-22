import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { SpotifyService } from './services/spotify.service';
import { CallbackComponent } from './components/callback/callback.component';
import { IndexComponent } from './components/index/index.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'callback', component: CallbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
