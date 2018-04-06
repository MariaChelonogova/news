import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { TitleComponent } from './content/title/title.component';
import { NewsItemComponent } from './content/news-item/news-item.component';
import { NewsComponent } from './content/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavigationComponent,
    LogoComponent,
    SearchComponent,
    BreadcrumpsComponent,
    TitleComponent,
    NewsItemComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
