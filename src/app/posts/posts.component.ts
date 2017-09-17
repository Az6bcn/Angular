import { PostServiceUsingGenericService } from '../service/post-service/post-serviceUsingGenericService';
import { BadRequestError } from '../Common/bad-request-error';

import { AppError } from '../Common/app-error';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../Common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  input: string;


  constructor(private genericService: PostServiceUsingGenericService
              ) { }

  //Get and render data when the Component Initialises.
  ngOnInit() {
    // Call service to get Posts from Backend
    this.genericService.getAll()
      // subuscribe to the observable Response result.
      .subscribe(
      postsFromService => {
        // subuscribe to the JavaScript Array result (Array bcos we used Map Operator in the Service).
        this.posts = postsFromService;
        console.log(this.posts);
        console.log(postsFromService);
      });
  }


  createPost(inputfield: HTMLInputElement) {
    console.log(inputfield.value);
    let post = { title: inputfield.value }
     //add to the beginnning of the postArray
     this.posts.splice(0, 0, post);

    //Clear the input field
    inputfield.value= '';

    //To create data we send http post to the serve
    // The Body: is a json object we want to send to the server, convert the JSON Object to string using JSON.STRINGIFY()
    let postStringify = JSON.stringify(post);

    //Call Service to Post
    this.genericService.create(postStringify)
      // subuscribe to the Response result.
      .subscribe(
        //Retuen the newly created post Object
        newPostFromService => {
        console.log(newPostFromService);
        //Set the Id of the Item in the Array upon getting 'Sucessful' response from the server
        post['id'] = newPostFromService.id;
       
        console.log(newPostFromService);
      }, //Handling Unexpected Error
      (error: AppError) => {
        //Remove the Item from the top of the Array upon getting 'Unsucessful' response from the server
        this.posts.splice(0, 1);
        //check if error is an instance of not found 
        
        if (error instanceof BadRequestError) {
          alert('invalid xxxxx ');
          /*If we had a form we can display the error message from the server in the form by setting the error:  */
              //this.form.setErrors(error.originalError()) 
        }
        //Rethrow error so it can be handler (captured) by our Global error handler
        else throw error;
      });
  }



  updatePost(post) {
    /*PATCH: To Update only a few properties in an Object. --> Instead of 
    sending the complete Object to the Server we send only the properties that should be modified*/
    //this.http.patch(this.url, JSON.stringify({isRead: true}));

    // tO uPDATE(PUT): we send the ID of the item we want to Update and the full Object of the Updated item.
    let postStringify = JSON.stringify(post)
    this.genericService.update(post.id, postStringify)
      // subuscribe to the Response result.
      .subscribe(
        updatedPostFromService => {
        console.log(updatedPostFromService);
      
      });
  }

  DeletePost(post) {
    this.genericService.delete(post)                   // this.service.Delete(5000) --> to simulate error handling
      // subuscribe to the observable Response result.
      .subscribe(
        //Delete doesn't send anything back in our case so we jst put ()
        () => {
        //Delete post from our postArray 
        // 1st find the index of this post in the Array
        let index = this.posts.lastIndexOf(post);
        //use the splice methos to delete 
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        //check if error is an instance of not found error
        if (error instanceof NotFoundError)
          alert('The Post has already been deleted');
        //Rethrow error so it can be handler (captured) by our Global error handler
        else throw error;
      });

  }


}
