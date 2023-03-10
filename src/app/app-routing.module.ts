import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './pages/blog/blog1/blog1.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jugar', component: Blog1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
