import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { UniquePipe } from './unique.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const enviroment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAccqlqo_MKyKRQG3o0Lyyr3NUNGDFUyp8",
    authDomain: "data-storage-b26cb.firebaseapp.com",
    databaseURL: "https://data-storage-b26cb.firebaseio.com",
    projectId: "data-storage-b26cb",
    storageBucket: "",
    messagingSenderId: "877282549369",
    appId: "1:877282549369:web:770e3040aaf0c444d93ea8"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddPageComponent,
    ArticlePageComponent,
    UniquePipe,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }