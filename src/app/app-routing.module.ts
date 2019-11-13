import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { Way1ParentComponent } from './components/way1-parent/way1-parent.component';
import { Way2ParentComponent } from './components/way2-parent/way2-parent.component';
import { Way3Component } from "./components/way3/way3.component";

const routes: Routes = [
  {
    path: 'way1',
    component: Way1ParentComponent
  },
  {
    path: 'way2',
    component: Way2ParentComponent
  },
  {
    path: 'way3',
    component: Way3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
