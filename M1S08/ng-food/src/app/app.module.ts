import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodContentComponent } from './content/food-content/food-content.component';
import { DrinkContentComponent } from './content/drink-content/drink-content.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'food', component: FoodContentComponent },
  { path: 'drink', component: DrinkContentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FoodContentComponent,
    DrinkContentComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
