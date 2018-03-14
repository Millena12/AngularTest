import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  categoryList: any;
  coursesList: any;
  categoryUrl = 'http://angulartest.eadbox.com/api/categories';
  coursesUrl = 'http://angulartest.eadbox.com/api/courses'

  constructor( private http: HttpClient ) {

  }

  ngOnInit(): void {
    this.http.get(this.categoryUrl).subscribe((data) => {
      this.categoryList = data;
    });
    this.http.get(this.coursesUrl).subscribe((data) => {
      this.coursesList = data;
    });
  }

}
