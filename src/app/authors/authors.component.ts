import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})



export class AuthorsComponent implements OnInit {

authors: any;
title: string;

/* Inject the authorService as a Dependency and Register it in provider [ ] in module so it becomes 
available to all the components --> app.module.ts */
  constructor(_service: AuthorService) {
    this.authors = _service.getAuthors();
  }

// Method to get number of authors
getNumberAuthors() {

      return this.authors.length;
}

  ngOnInit() {
    this.title = 'Angular';
  }

}
