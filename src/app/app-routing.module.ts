import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { ChatComponent } from './chat/chat.component';
import { LearningplanComponent } from './learningplan/learningplan.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'classes',component:ClassesComponent},
  {path:'chat',component:ChatComponent},
  {path:'learningplan',component:LearningplanComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'setting',component:SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
