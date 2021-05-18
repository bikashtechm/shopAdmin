import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from '../model/db-data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beginnerCourses: Course[] = [];

  advancedCourses: Course[] = [];

  constructor() {}

  ngOnInit() {
    const courses: any = Object.values(COURSES);

    this.beginnerCourses = courses.filter(
      (course: any) => course.category === 'BEGINNER'
    );

    this.advancedCourses = courses.filter(
      (course: any) => course.category === 'ADVANCED'
    );
  }
}
