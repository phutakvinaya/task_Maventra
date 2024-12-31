import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SiderightComponent } from './sideright/sideright.component';
import { DayPipe } from './day.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ClassesComponent } from './classes/classes.component';
import { ResourcesComponent } from './resources/resources.component';
import { LearningplanComponent } from './learningplan/learningplan.component';
import { ChatComponent } from './chat/chat.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    SiderightComponent,
    DayPipe,
    ClassesComponent,
    ResourcesComponent,
    LearningplanComponent,
    ChatComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    RouterModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
