import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: `
    			<h1>My First Angular 2 App</h1>
    			
    			<authors></authors>

    			<courses></courses>
    		`,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { }