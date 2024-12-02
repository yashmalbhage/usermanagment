import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsercrudserviceService } from '../../services/usercrudservice.service';
import {FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  users: any[] = [];

  AddUserForm:FormGroup;
  constructor(private fb: FormBuilder, private userService : UsercrudserviceService){
    this.AddUserForm = this.fb.group({
      username:'',
      firstName:'',
      lastName:'',
      email:'',
      gender:'',
      age:0

    })
  }
  
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (response: any) => {
        this.users = response.users; 
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  get formControls(){
    return this.AddUserForm.controls
  }
  onSubmit():void{
    if(this.AddUserForm.valid){
      const {username, firstName, lastName, gender, email, age} = this.AddUserForm.value
      this.userService.addUser({username, firstName, lastName, gender, email, age}).subscribe((newUser)=>{
        this.users.push(newUser)
        alert("success")
      })
      
    }
  }

}
