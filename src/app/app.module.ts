import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FilterByPipe} from './courses.service';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, FilterByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
