import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { input, computed } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // without signals: decorater Input
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!:string;
  // ! to convery that we know that the above var will have some value even if it looks like uninitialized
  // required true assures that the property must be set

  @Output() selectedId = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onclick() {
    this.selectedId.emit(this.id);
  }

  // // with signal: generic function input (work with broad variety of input type)
  // //avatar = input<string>(); //type of parameter
  // avatar = input.required<string>(); 
  // name = input.required<string>(); 
  // // '.required' to specify required, but cannot accept any initial value unlike 'input()'.
  // // now avatar and name are signals
  // // they are read only and we cannot use this.avatar.set()
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

}

// import { computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy_users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// export class UserComponent {

//   selected = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/'+this.selected().avatar)
//   //creates a under the hood signal
  
//   // get imagePath() {
//   //   return 'assets/users/'+this.selected().avatar
//   //   //getter property
//   // }

//   onClick() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     this.selected.set(DUMMY_USERS[randomIndex]);
    
//     // // convention to have 'on; for event handlers
//     // console.log("Clicked!");
//     // // result would be visible in in-browser console

//     //if not signal then:- this.selected = DUMMY_USERS[randomIndex];

//     //Changing State: changing the data which has impact on the UI of the application (without signals)(uses zone.js)

//     // Signal contains values which when changed, are notified to the angular by signals 
//     // Zone.js: automatically listens to all user events that could occur and checks for possible changes
//   }
// }
