
import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

//Component Dicorator , which tell angular that this is component
@Component({
	// Dicorator meta data
	selector: 'courses', // <courses> is host element for Courses Component
	template: `
				<input type="text" autoGrow />

				<h2>Courses</h2>
				{{title}}
				<ul>
				<li *ngFor="#course of courses">
					{{course}}
				</li>
				</ul>
			`,
	providers: [CourseService],
	directives: [AutoGrowDirective]
})

// Courses Component class
export class CoursesComponent{
	//property
	title = 'The title of courses page';
	//Array of courses
	courses;
	// Dependency of course service now use Dependency injection
	constructor (courseService: CourseService){
		this.courses = courseService.getCourses();
	}

}