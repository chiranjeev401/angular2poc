import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
 
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  data: string[];

  constructor(private postsService: PostsService){
      this.data = [];
    
    this.address = {
        name: '',
        email: '',
        street: '',
        city: '', 
        state: ''
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }


  saveData(){


    this.data.push(
         this.address.name,
        this.address.email,
        this.address.street,
        this.address.city,
        this.address.state,
        )

      console.log(name);
  }

  cancelData(){
        this.address.name ='';
        this.address.email ='';
        this.address.street ='';
        this.address.city ='';
        this.address.state ='';
        
  }

  toggleHobbies(){
       this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: any){
      this.hobbies.push(hobby);
  }

  deleteHobby(i: any){
      this.hobbies.splice(i, 1);
  }
}

interface address {
    name:string;
    email:string;
    street: string;
    city: string;
    state: string;
}

interface data {
    name:string;
    email:string;
    street: string;
    city: string;
    state: string;
}
