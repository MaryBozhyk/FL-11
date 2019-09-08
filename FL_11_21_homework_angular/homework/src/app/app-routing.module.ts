import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },  
  { path: 'add', component: AddPageComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
