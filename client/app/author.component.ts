import {Component} from 'angular2/core';
import {AuthorService} from './author.service';


@Component({
	selector: 'authors', //<authors> is host element for AuthorComponent
	template:`
			<h2>Authors</h2>
			{{title}}
			<ul>
			<li *ngFor="#author of authors">
				{{author}}
			</li>
			</ul>
	`,
	providers: [AuthorService]
})

export class AuthorComponent{

	title = 'The title of authors page'
	authors;

	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
	}

}