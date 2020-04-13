import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TrekService } from './services/trek.service';
import { KinveyModule } from 'kinvey-angular-sdk';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { CreateTrekComponent } from './create-trek/create-trek.component';
import { FormsModule } from '@angular/forms';
import { DataStoreComponent } from './data-store/data-store.component';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponentComponent,
    RegisterComponent,
    CreateTrekComponent,
    DataStoreComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FlexLayoutModule,
    HttpClientModule,
    KinveyModule.init({
      appKey: 'kid_B12h6q1v8',
      appSecret: '9606468fe04c4e07a6a5af489bde7baf',
       })
    ],
  providers: [TrekService],
  bootstrap: [AppComponent]
})
export class AppModule { }
