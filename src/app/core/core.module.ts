import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavigationComponent, LandingComponent, FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [NavigationComponent, LandingComponent, FooterComponent]
})
export class CoreModule { }
