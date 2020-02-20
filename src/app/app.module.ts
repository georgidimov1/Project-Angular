import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TreksComponent } from 'src/app/trek/treks/treks.component';
import { TrekService } from './services/trek.service';
import { KinveyModule } from 'kinvey-angular-sdk';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { CreateTrekComponent } from './create-trek/create-trek.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    TreksComponent,
    NotFoundComponent,
    LoginComponentComponent,
    RegisterComponent,
    CreateTrekComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FlexLayoutModule,
    HttpClientModule,
    KinveyModule.init({
      appKey: 'kid_HkP-y2r2S',
      appSecret: '1372ee77d9ae420399fa410adc10084d',
       })
    ],
  providers: [TrekService],
  bootstrap: [AppComponent]
})
export class AppModule { }
