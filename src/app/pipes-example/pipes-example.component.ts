import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

// Course object to apply pipe on in the HTML

course = {
    title: 'The Complete Angular Coure vbdfbvhodfhlnfbofdnbnfobunofnboiufndbuoinfoubnfonbofjkdnbokjfndbokjfnobjknfbokjfbda',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
};

  constructor() { }

  ngOnInit() {
  }

}
