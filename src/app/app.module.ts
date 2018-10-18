import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { LearnComponent } from "./learn/learn.component";
import { HeroChildComponent } from "./hero-child/hero-child.component";
import { RouterModule, Routes, NavigationStart } from '@angular/router';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialModule';
import { ReactiveFormsModule } from '@angular/forms';
import { Loger } from './loger';

import 'hammerjs';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { SizeParentComponent } from './size-parent/size-parent.component';
import { SizeChildComponent } from './size-child/size-child.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { TimerChildComponent } from './timer-child/timer-child.component';
import { TimerParentComponent } from './timer-parent/timer-parent.component';
import { TimerViewComponent } from './timer-view/timer-view.component';
import { HeightlightDirective } from './heightlight.directive';

const appRoutes: Routes = [
  { path: 'timerview', component: TimerViewComponent },
  { path: 'size', component: SizeParentComponent },
  { path: 'timer', component: TimerParentComponent },
  { path: 'voter', component: VotetakerComponent },
  { path: 'version', component: VersionParentComponent },
  { path: 'name', component: NameParentComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: 'detail', component: HerodetailComponent },
  { path: '',redirectTo: '/hero/1', pathMatch: 'full'},
];
@NgModule({
   declarations: [
      AppComponent,
      LearnComponent,
      HeroComponent,
      HerodetailComponent,
      HeroChildComponent,
      NameParentComponent,
      NameChildComponent,
      VersionParentComponent,
      VersionChildComponent,
      SizeParentComponent,
      SizeChildComponent,
      VoterComponent,
      VotetakerComponent,
      TimerChildComponent,
      TimerParentComponent,
      TimerViewComponent,
      HeightlightDirective
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      MaterialModule
   ],
   providers: [
      Loger
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
